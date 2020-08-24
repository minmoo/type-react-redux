import * as React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import useTableData from '../../hooks/table/useTableData';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { get_data } from '../../modules/table/actions';

export default function TableBootstrap() {

	const dispatch = useDispatch();

    useEffect(() => {
	    dispatch(get_data());
	}, [])
	
	const { rows, cols } = useTableData();

	if (rows.length === 0) return <p>테이블에 데이터가 없습니다.</p>;

	return <BootstrapTable data={rows} keyField="seq" columns={cols} striped hover condensed />;
}
