import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './ConfigureStore';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore();

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);
