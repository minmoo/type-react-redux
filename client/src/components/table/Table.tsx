import * as React from 'react';
import TableBootstrap from './TableBootstrap';

import useWsConnect from '../../hooks/websocket/useWsConnect';

function Table() {
	useWsConnect();

	return <TableBootstrap />;
}

export default Table;
