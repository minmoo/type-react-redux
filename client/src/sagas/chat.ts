import { takeEvery, put } from 'redux-saga/effects';
import * as chat from '../modules/chat/actions';
import axios from 'axios';
import { ActionType } from 'typesafe-actions';

//TODO 액션타입 지정 이상함
function* chatSendSaga(action: ActionType<typeof chat.send>) {
	try {
		const requestMsg = {
			message: {
				custom_type: 'plainText',
				text: action.payload.text,
			},
			device_type: '',
		};

		const { data } = yield axios.post('/test/', {
			sender: {
				nickname: '김민수',
				user_id: action.payload.userId,
			},
			message: {
				type: 'MESG',
				custom_type: 'text',
				data: JSON.stringify(requestMsg),
			},
			bot: {
				bot_nickname: '',
			},
		});

		let dataStrAry = data['result_message'].map((msg: { [x: string]: { [x: string]: any } }) => {
			return { text: msg['body']['data'], type: 'RECIEVE', log: data['log'] };
		});

		yield put(chat.send_saga(dataStrAry));
	} catch (error) {
		//error 액션 정의
	}
}

export default function* watchChatSend() {
	yield takeEvery(chat.SEND, chatSendSaga);
}
