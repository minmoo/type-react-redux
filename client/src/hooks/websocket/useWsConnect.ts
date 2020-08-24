import { useDispatch } from 'react-redux';
import { connect, disconnect} from '../../modules/websocket/actions';
import {useCallback, useEffect} from 'react';

export default function useWsConnect() {
    
	const dispatch = useDispatch();
    const onConnect = useCallback(() => dispatch(connect()), [dispatch]);
    const onDisconnect = useCallback(() => dispatch(disconnect()), [dispatch]);

	useEffect(() => {
		onConnect()
		return () => {onDisconnect();}
	}, [])
}
