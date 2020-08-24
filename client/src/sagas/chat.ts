import { takeEvery, put } from 'redux-saga/effects';
import * as chat from '../modules/chat/actions';
import axios from 'axios';
import { ActionType } from 'typesafe-actions';

//TODO 액션타입 지정 이상함
function* chatSendSaga(action: ActionType<typeof chat.send>) {
	try {
		const requestMsg = {
			message: {
				custom_type: 'text',
				text: action.payload.text
			}
		};
		
		const { data } = yield axios.post(process.env.REACT_APP_CHAT_URL, {
			sender: {
				nickname: '김민수',
				user_id: action.payload.userId
			},
			message: {
				type: 'MESG',
				data: JSON.stringify(requestMsg)
			},
			channel_id: "1"
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
