import { createAction, ActionType, createReducer } from 'typesafe-actions';
import { ColumnDescription } from 'react-bootstrap-table-next';

//1. 액션 type
export const SEARCH = 'table/SEARCH';
export const SEARCH_ASYNC = 'table/SEARCH_ASYNC';

//2. 상태를 위한 타입
export type TableRow = {
	date: string;
	type: string;
	big_category: string;
	mid_category: string;
	ord_num: string;
	seq: number;
	item_id: string;
	item_nm: string;
};

type TableRows = TableRow[];

export type Table = {
	tableRows: TableRows;
	tableCols: Array<ColumnDescription<TableRow>>;
};

//3. 액션 생성 함수
export const search = createAction(SEARCH)();
export const searchAsync = createAction(SEARCH_ASYNC)<TableRows>();

//4. 액션들의 타입
type TableAction = ActionType<typeof search> | ActionType<typeof searchAsync>;

//5. 초기값 설정
const initialRows: TableRows = [];

const initialCols: Array<ColumnDescription<TableRow>> = [
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
	[SEARCH]: (state) => state,
	[SEARCH_ASYNC]: (state, { payload: tableRows }) => {
		return { ...state, tableRows: tableRows };
	},
});

export default table;
