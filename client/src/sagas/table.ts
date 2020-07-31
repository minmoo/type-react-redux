import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import * as table from '../modules/table/actions';

function* tableSearchAsync() {
	try {
		console.log('search table saga');
		const { data } = yield axios.get('/api/table/data');
		yield put(table.set_data(data));
	} catch (error) {
		//error 액션 정의
	}
}

export default function* watchTable() {
	console.log('watch Table saga');
	yield takeEvery(table.GET_DATA, tableSearchAsync);
}
