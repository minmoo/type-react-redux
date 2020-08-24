import * as React from 'react';

function Home() {
	return (
		<div>
			<h1>홈</h1>
			<p>{process.env.REACT_APP_CHAT_URL}</p>
		</div>
	);
}

export default Home;
