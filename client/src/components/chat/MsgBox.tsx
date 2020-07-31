import * as React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import MsgHeader from './MsgHeader';
import MsgList from './MsgList';
import MsgTyping from './MsgTyping';

//TODO chatbox로 바꿀까
export default function MsgBox() {
	return (
		<Container fluid className="w-50">
			<Row>
				<Col>
					<MsgHeader />
				</Col>
			</Row>
			<Row>
				<Col>
					<MsgList />
				</Col>
			</Row>
			<Row>
				<Col>
					<MsgTyping />
				</Col>
			</Row>
		</Container>
		// <div>
		//     <MsgHeader/>
		//     <MsgList/>
		//     <MsgTyping/>
		// </div>
	);
}
