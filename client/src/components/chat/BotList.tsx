import * as React from 'react';
import { ListGroup, Media } from 'react-bootstrap'; // Styled-component
import '../../sass/chat/botList.scss';

export default function BotList() {
	const sendImgSrc = 'http://qa-static.ssgcdn.com/ui/m_ssg/img/ssgtalk_web/profile_csbot.png';

	return (
		<>
			<div className="bg-gray bg-light">
				<h3 className="px-3">Bot list</h3>
			</div>

			<ListGroup>
				<ListGroup.Item action href="#link1">
					<Media>
						<img width={64} height={64} className="mr-3 rounded-circle" src={sendImgSrc} />
						<Media.Body>
							<h5>SSG Talk</h5>
							<p>customer service talk test</p>
						</Media.Body>
					</Media>
				</ListGroup.Item>
			</ListGroup>
		</>
	);
}
