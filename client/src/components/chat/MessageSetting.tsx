import * as React from 'react';
import { InputGroup, FormControl, FormControlProps } from 'react-bootstrap';

import useChatSettingUserId from '../../hooks/chat/useChatSettingUserId';

type FormControlElement = HTMLInputElement;

export default function MessageSetting() {
	const userIdRef = React.useRef<HTMLInputElement>(null);
	const chatSettingUserId = useChatSettingUserId();

	const handleChange = (e: React.ChangeEvent<FormControlElement>) => {
		if (userIdRef && userIdRef.current) {
			chatSettingUserId(userIdRef.current.value);
		}
	};

	return (
		<>
			<div className="bg-gray bg-light">
				<h3 className="px-3">Setting</h3>
			</div>
			<InputGroup className="p-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="inputUserId">USER ID</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl aria-label="userId" aria-describedby="inputUserId" ref={userIdRef} onChange={handleChange} />
			</InputGroup>
		</>
	);
}
