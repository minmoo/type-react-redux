import * as React from 'react';
import SendMsg from './SendMsg';
import RcvMsg from './RcvMsg';
import '../../sass/chat/msgList.scss';

import useChat from '../../hooks/chat/useChat';
import { Msg } from '../../modules/chat/types';

export default function MsgList() {
	const chat = useChat();
	const msgs = chat.msgs;
	const msgBoxRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (msgBoxRef && msgBoxRef.current){
			//scroll to Bottom
			msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight - msgBoxRef.current.clientHeight;
		}
	});

	return (
		<div className="msg-box bg-light" ref={msgBoxRef}>
			{msgs.map((msg: Msg) => (msg.type == 'SEND' ? <SendMsg msg={msg} /> : <RcvMsg msg={msg} />))}
		</div>
	);
}
