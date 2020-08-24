import * as React from 'react';
import InputGroup, { InputGroupAppend } from 'react-bootstrap/InputGroup';
import { Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import useChatSend from '../../hooks/chat/useChatSend';
import useChat from '../../hooks/chat/useChat';

export default function MsgTyping() {
	const chatSend = useChatSend();
	const chat = useChat();
	const inputRef = React.useRef<HTMLInputElement>(null);

	// const onClick = React.useCallback((e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
	//     //컴포넌트 내에서 useRef의 반환값을 사용할 땐 null check 필수
	//     if(inputRef && inputRef.current){
	//         chatSend(inputRef.current.value)
	//     }
	// }, [inputRef]);

	const send = () => {
		if (chat.userId !== '' && inputRef.current.value) {
			chatSend({ text: inputRef.current.value, userId: chat.userId });
			inputRef.current.value = '';
		}
	};

	const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		//컴포넌트 내에서 useRef의 반환값을 사용할 땐 null check 필수
		if (inputRef && inputRef.current) {
			send();
		}
	};

	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key == 'Enter' && inputRef && inputRef.current) {
			send();
		}
	};

	return (
		<InputGroup className="mb-1 shadow-lg">
			<FormControl
				placeholder="Typing here..."
				aria-label="Typing here.."
				aria-describedby="button-addon2"
				className="rounded-0 border-0 py-4"
				onKeyPress={onKeyPress}
				ref={inputRef}
			/>
			<InputGroup.Append>
				<Button variant="link" onClick={onClick} className="bg-white">
					<FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
				</Button>
			</InputGroup.Append>
		</InputGroup>
	);
}
