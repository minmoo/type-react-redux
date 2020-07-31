import { combineReducers } from 'redux';
import table from './table';
import chat from './chat';
import ws from './websocket';

const rootReducer = combineReducers({
	table,
	chat,
	ws,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
