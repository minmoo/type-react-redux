import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { send } from '../../modules/chat/actions';

export default function useChatSend() {
	const dispatch = useDispatch();
	//useMemo는 특정 결과값을 재사용 할 때 쓰고, useCallback은 특정 함수를 재사용 할 때 사용한다.
	const onSend = useCallback((req) => dispatch(send(req)), [dispatch]);
	return onSend;
}
