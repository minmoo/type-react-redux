import { ActionType } from 'typesafe-actions';
import { ColumnDescription } from 'react-bootstrap-table-next';
import * as actions from './actions';

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

export type TableRows = TableRow[];
export type TableCols = Array<ColumnDescription<TableRow>>;

export type Table = {
	tableRows: TableRows;
	tableCols: TableCols;
};

export type TableAction = ActionType<typeof actions>;
