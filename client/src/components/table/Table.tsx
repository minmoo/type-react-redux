import * as React from 'react';
import useTable from '../../hooks/table/useTable';
import TableBootstrap from './TableBootstrap';

function Table() {
	useTable();

	return <TableBootstrap />;
}

export default Table;
