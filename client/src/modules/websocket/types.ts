import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type WebSocketState = {
    isConnected: boolean;
    socketId: string;
};

export type WebSocketAction = ActionType<typeof actions>;
