import { take, put, call, fork, all, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as ioClient from 'socket.io-client';
import * as ws from '../modules/websocket/actions';
import * as table from '../modules/table/actions';

//allow us connect to a server and return a promise wrapping the result of this connection
//(socket.io returns just a callback)
function connect() {
	//Real life project extract this into an API module
	const socket = ioClient.connect('http://202.8.174.146:7078', { transports: ['websocket'] });

	//We need to wrap the socket connection into a promise (socket returns callback)
	return new Promise((resolve, reject) => {
		socket.on('connect', () => {
			// socket.emit('message');
			console.log('connect success');
			resolve({ socket });
		});

		socket.on('connect_error', () => {
			console.log('connect failed');
			reject(new Error('ws:connect_failed'));
		});
	}).catch((error) => ({ socket, error }));
}

function subscribe(socket: SocketIOClient.Socket) {
	return eventChannel((emit) => {
		socket.on('my socket id', (id) => {
			console.log('my socket id: ' + id);
		});

		socket.on('table data', (e) => {
			console.log('table data: ' + e);
			emit(table.set_data(e));
		});

		socket.on('disconnect', (e) => {
			emit(ws.disconnected());
		});
		socket.on('error', (error) => {
			console.log('Error while trying to connect, TODO: proper handle of this event');
		});

		return () => {}; //called on channel closed / cleanup(free resources)
	});
}

//subscribe to the eventChannel
function* read(socket: SocketIOClient.Socket) {
	const channel = yield call(subscribe, socket);
	while (true) {
		let action = yield take(channel);
		yield put(action);
	}
}

function* write(socket: SocketIOClient.Socket) {
	while (true) {
		const { msg } = yield take(ws.SEND_MESSAGE);
		console.log('send msg');
		socket.emit('receive', msg);
	}
}

function* handleIO(socket: SocketIOClient.Socket) {
	yield fork(read, socket);
	yield fork(write, socket);
	//TODO in the future we could add here a write fork
}

//register the flow saga. listen for the action, 연결 될 때 한번
export function* flow() {
	while (true) {
		yield take(ws.CONNECTED);
		const { socket, error } = yield call(connect);
		if (socket) {
			console.log('connection to socket succeeded');
			const ioTask = yield fork(handleIO, socket);
			yield take(ws.DISCONNECTED);
			yield cancel(ioTask);
			socket.disconnect();
		} else {
			console.log('error connecting');
		}
	}
}

export function* socketRootSaga() {
	yield all([fork(flow)]);
}
