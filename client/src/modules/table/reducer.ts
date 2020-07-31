import { createReducer } from 'typesafe-actions';
import { TableAction, TableRows, Table } from './types';
import { GET_DATA, SET_DATA } from './actions';
import produce from 'immer';

//초기값 설정
const initialRows: TableRows = [];

const initialCols: Table['tableCols'] = [
	{ dataField: 'date', text: '일시' },
	{ dataField: 'type', text: '구분' },
	{ dataField: 'big_category', text: '대분류' },
	{ dataField: 'mid_category', text: '중분류' },
	{ dataField: 'ord_num', text: '주문번호' },
	{ dataField: 'seq', text: '순번' },
	{ dataField: 'item_id', text: '상품ID' },
	{ dataField: 'item_nm', text: '상품명' },
];

const initialState: Table = {
	tableCols: initialCols,
	tableRows: initialRows,
};

const table = createReducer<Table, TableAction>(initialState, {
	[GET_DATA]: (state) => state,
	[SET_DATA]: (state, { payload: tableRows }) =>
		produce(state, (draft) => {
			draft.tableRows = tableRows;
		}),
});

export default table;
