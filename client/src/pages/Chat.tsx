import * as React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
// import Messenger from '../components/chat/Messenger';
import MsgBox from '../components/chat/MsgBox';

function Chat() {
	return (
		//TODO device 크기를 lg로 셋팅
		<Container fluid className="py-3 px-3">
			<Row>
				<Col>
					<header className="text-center">
						{/* <h3 className="display-4 text-dark">BOT TEST</h3> */}
					</header>
				</Col>
			</Row>
			<Row className="justify-content-md-center" style={{ overflow: 'hidden' }}>
				<Col>
					<MsgBox></MsgBox>
				</Col>
			</Row>
		</Container>
	);
}

export default Chat;
