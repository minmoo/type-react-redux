import * as React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import useTableData from '../../hooks/table/useTableData';

export default function TableBootstrap() {
	const { rows, cols } = useTableData();

	if (rows.length === 0) return <p>테이블에 데이터가 없습니다.</p>;

	return <BootstrapTable data={rows} keyField="seq" columns={cols} striped hover condensed />;
}
