import * as React from 'react';
import ReactJson from 'react-json-view-ts';
import { Media, Button, Overlay, OverlayTrigger, Popover, PopoverProps } from 'react-bootstrap';
import { Msg } from '../../modules/chat/types';
import MsgTyping from './MsgTyping';

import '../../sass/chat/rcvMsg.scss';

type MsgProps = {
	msg: Msg;
};

export default function RcvMsg({ msg }: MsgProps) {
	const rcvImgSrc = 'http://qa-static.ssgcdn.com/ui/m_ssg/img/ssgtalk_web/profile_csbot.png';
	const media = React.useRef(null);

	const [show, setShow] = React.useState(false);
	const [target, setTarget] = React.useState(null);

	return (
		<Media className="receive" ref={media}>
			<Button
				variant="link"
				onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
					setShow(!show);
					setTarget(e.target);
				}}
			>
				<img width={40} height={40} className="rounded-circle" src={rcvImgSrc} />
			</Button>

			<Overlay show={show} placement="left" target={target} container={media.current} containerPadding={20}>
				<Popover id="popover-contained" className="mr-3">
					<Popover.Title as="h3">Server side data</Popover.Title>
					<Popover.Content>
						<ReactJson src={JSON.parse(msg.log)} />
					</Popover.Content>
				</Popover>
			</Overlay>

			<Media.Body className="ml-1">
				<div className="bg-light rounded py-2 px-3 mb-2">
					<p className="text-small mb-0 text-dark">{msg.text}</p>
				</div>
				<p className="small text-muted">12:00P PM | Aug 13</p>
			</Media.Body>
		</Media>
	);
}
