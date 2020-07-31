import { createAction } from 'typesafe-actions';

//Channel
export const CONNECTED = 'websocket/CONNECTED';
export const DISCONNECTED = 'websocket/DISCONNECTED';
export const SEND_MESSAGE = 'websocket/SEND_MESSAGE';

export const connected = createAction(CONNECTED)();
export const disconnected = createAction(DISCONNECTED)();
export const send_message = createAction(SEND_MESSAGE)<string>();
