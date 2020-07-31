import * as React from 'react';
import { Route } from 'react-router-dom';
import Table from './pages/Table';
import Home from './pages/Home';
import Chat from './pages/Chat';
import WsTest from './components/ws/WsTest';

function App() {
	return (
		<>
			<Route path="/" exact={true} component={Home} />
			<Route path="/chat" exact={true} component={Chat} />
			<Route path="/table" exact={true} component={Table} />
			<Route path="/ws" exact={true} component={WsTest} />
			{/* <TableSearch/> */}
			{/* <Table /> */}
		</>
	);
}

export default App;
