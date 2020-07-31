import * as React from 'react';
import SendMsg from './SendMsg';
import RcvMsg from './RcvMsg';
import '../../sass/chat/msgList.scss';

import useChat from '../../hooks/chat/useChat';
import { Msg } from '../../modules/chat/types';

export default function MsgList() {
	const chat = useChat();
	const msgs = chat.msgs;
	const msgEndRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (msgEndRef && msgEndRef.current) {
			msgEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	});

	return (
		<div className="msg-box">
			{msgs.map((msg: Msg) => (msg.type == 'SEND' ? <SendMsg msg={msg} /> : <RcvMsg msg={msg} />))}
			<div ref={msgEndRef} />
		</div>
	);
}
