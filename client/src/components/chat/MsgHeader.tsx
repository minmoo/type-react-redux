import * as React from 'react';
import { useState } from 'react';
import { Form, Button, Collapse, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import useChat from '../../hooks/chat/useChat';

export default function MsgHeader() {
	const chat = useChat();
	const userId = React.useRef<HTMLInputElement>(null);
	const nickname = React.useRef<HTMLInputElement>(null);
	const ordNo = React.useRef<HTMLInputElement>(null);
	const ordItemSeq = React.useRef<HTMLInputElement>(null);
	const promId = React.useRef<HTMLInputElement>(null);
	const [open, setOpen] = useState(false);

	React.useEffect(() => {
		if (userId && userId.current && nickname && nickname.current) {
			userId.current.value = chat.userId;
			nickname.current.value = '김민수';
		}
	});

	const rcvImgSrc = 'http://qa-static.ssgcdn.com/ui/m_ssg/img/ssgtalk_web/profile_csbot.png';

	return (
		<div className="bg-info text-monospace text-white">
			<img width={50} height={50} className="mx-3 my-3 rounded-circle d-inline" src={rcvImgSrc} />
			<h3 className="d-inline">SSG TALK</h3>
			<Button variant="link" onClick={() => setOpen(!open)} className="mx-3">
				<FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} style={{color: 'black'}}></FontAwesomeIcon>
			</Button>
			<p className="d-inline">user id: {chat.userId} / nickname: </p>
			<Collapse in={open}>
				<Form className="p-3">
					<Form.Group as={Row} controlId="userId">
						<Form.Label column sm={2}>
							user id
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="userId" placeholder="User id" ref={userId} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="nickname">
						<Form.Label column sm={2}>
							nickname
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="nickname" placeholder="nickname" ref={nickname} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="ordNo">
						<Form.Label column sm={2}>
							ordNo
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="ordNo" placeholder="ordNo" ref={ordNo} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="ordItemSeq">
						<Form.Label column sm={2}>
							ordItemSeq
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="ordItemSeq" placeholder="ordItemSeq" ref={ordItemSeq} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="promId">
						<Form.Label column sm={2}>
							promId
						</Form.Label>
						<Col sm={10}>
							<Form.Control type="promId" placeholder="promId" ref={promId} />
						</Col>
					</Form.Group>
				</Form>
			</Collapse>
		</div>
	);
}
