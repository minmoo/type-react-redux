import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { WebSocketState, WebSocketAction } from './types';
import { CONNECTED, DISCONNECTED } from './actions';

const initialState: WebSocketState = {
	isConnected: false,
};

const websocket = createReducer<WebSocketState, WebSocketAction>(initialState, {
	[CONNECTED]: (state, action) =>
		produce(state, (draft) => {
			draft.isConnected = true;
		}),
	[DISCONNECTED]: (state, action) =>
		produce(state, (draft) => {
			draft.isConnected = false;
		}),
});

export default websocket;
