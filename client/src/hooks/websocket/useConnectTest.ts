import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useState } from 'react';
import { connect } from '../../modules/websocket/actions';
import { RootState } from '../../modules';

export default function useConnectTest() {
	const dispatch = useDispatch();

	const onConn = useCallback(() => dispatch(connect()), [dispatch]);
	return onConn;
}
