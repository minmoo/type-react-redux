import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type Request = {
	userId: string;
	text: string;
};

export type Msg = {
	text: string;
	type: string;
	log?: string;
};

export type Msgs = Msg[];

export type Chat = {
	botName: string;
	userId: string;
	msgs: Msgs;
};

export type ChatAction = ActionType<typeof actions>;
