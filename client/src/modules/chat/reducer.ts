import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { SEND, SEND_SAGA, SETTING_USER_ID } from './actions';
import { Chat, ChatAction } from './types';

// immer: copy-on-write
const initialState: Chat = {
	botName: 'SSG',
	userId: 'C25261921',
	msgs: [
		{ text: '첫번째 요청 테스트 텍스트입니다.', type: 'SEND' },
		{
			text: '첫번째 응답 테스트 텍스트입니다.',
			type: 'RECEIVE',
			log: '{"key1":"value1","key2":{"key2_1":"value1","key2_2":"value2"}}',
		},
	],
};

const chat = createReducer<Chat, ChatAction>(initialState, {
	[SEND]: (state, action) =>
		produce(state, (draft) => {
			draft.msgs.push({
				text: action.payload.text,
				type: 'SEND',
			});
		}),
	[SEND_SAGA]: (state, { payload: msgs }) =>
		produce(state, (draft) => {
			draft.msgs = draft.msgs.concat(msgs);
		}),
	[SETTING_USER_ID]: (state, { payload: userId }) =>
		produce(state, (draft) => {
			draft.userId = userId;
		}),
});

export default chat;
