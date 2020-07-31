import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useState } from 'react';
import { connected } from '../../modules/websocket/actions';
import { RootState } from '../../modules';

export default function useConnectTest() {
	const dispatch = useDispatch();

	const onConn = useCallback(() => dispatch(connected()), [dispatch]);
	return onConn;
}
