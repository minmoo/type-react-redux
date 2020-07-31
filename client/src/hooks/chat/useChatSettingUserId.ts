import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setting_user_id } from '../../modules/chat/actions';

export default function useChatSettingUserId() {
	const dispatch = useDispatch();
	const onSettingUserId = useCallback((user_id: string) => dispatch(setting_user_id(user_id)), [dispatch]);
	return onSettingUserId;
}
