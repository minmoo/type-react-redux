import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { WebSocketState, WebSocketAction } from './types';
import { CONNECT, DISCONNECT, SET_SOCKET_ID } from './actions';

const initialState: WebSocketState = {
    isConnected: false,
    socketId: ""
};

const websocket = createReducer<WebSocketState, WebSocketAction>(initialState, {
	[CONNECT]: (state, action) =>
		produce(state, (draft) => {
			draft.isConnected = true;
		}),
	[DISCONNECT]: (state, action) =>
		produce(state, (draft) => {
            draft.isConnected = false;
            draft.socketId = "";
        }),
    [SET_SOCKET_ID]: (state, {payload:socketId}) =>
        produce(state, (draft) => {
            draft.socketId = socketId;
        })
});

export default websocket;
