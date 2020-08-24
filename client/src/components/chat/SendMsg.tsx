import * as React from 'react';
import { Media } from 'react-bootstrap';
import { Msg } from '../../modules/chat/types';

import '../../sass/chat/sendMsg.scss';

type MsgProps = {
	msg: Msg;
};

export default function SendMsg({ msg }: MsgProps) {
	// const sendImgSrc = "http://qa-img.ssgcdn.com/trans.ssg?src=/talk/bot/htalkcs_profile.png&w=140&h=140";

	return (
		<Media className="send">
			<Media.Body>
				<div className="bg-dark rounded py-2 px-3 mb-2">
					<p className="text-small mb-0 text-white">{msg.text}</p>
				</div>
				<p className="small text-muted">12:00P PM | Aug 13</p>
			</Media.Body>
		</Media>
	);
}
