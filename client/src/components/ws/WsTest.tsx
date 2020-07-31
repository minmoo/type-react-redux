import * as React from 'react';
import useTable from '../../hooks/table/useTable';
import { Button } from 'react-bootstrap';
import useConnectTest from '../../hooks/websocket/useConnectTest';

function WsTest() {
	const conn = useConnectTest();

	const clickHandle = () => {
		conn();
	};
	return <Button onClick={clickHandle}>연결</Button>;
}

export default WsTest;
