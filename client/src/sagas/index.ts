import { all, fork } from 'redux-saga/effects';
import watchTable from './table';
import watchChatSend from './chat';
import { flow } from './websocket';

// Generator 함수
function* rootSaga() {
	console.log('rootSaga');
	yield all([fork(watchTable), fork(watchChatSend), fork(flow)]);
}
//fork 함수 비동기적 호출
//call 함수 동기적 호출
//put 액션 dispatch

export default rootSaga;
