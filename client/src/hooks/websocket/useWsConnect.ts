import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useState } from 'react';
import { connected } from '../../modules/websocket/actions';
import { RootState } from '../../modules';

export default function useWsConnect() {
	const isConnected = useSelector((state: RootState) => state.ws.isConnected, shallowEqual);
	console.log('isConnected: ' + isConnected);

	const dispatch = useDispatch();
	if (!isConnected) {
		dispatch(connected());
	}
	return isConnected;
}
