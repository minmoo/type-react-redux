import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import useWsConnect from '../websocket/useWsConnect';
import { RootState } from '../../modules';
import { get_data } from '../../modules/table/actions';

export default function useTable() {
	let isConnected = useWsConnect();

	const dispatch = useDispatch();
	if (isConnected) {
		dispatch(get_data());
	}
}
