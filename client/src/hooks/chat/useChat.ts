import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function useChat() {
	const chat = useSelector((state: RootState) => state.chat);
	return chat;
}
