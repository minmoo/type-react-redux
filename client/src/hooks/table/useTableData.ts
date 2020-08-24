import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { useEffect } from 'react';
import { get_data } from '../../modules/table/actions';

export default function useTable() {
	const { rows, cols } = useSelector(
		(state: RootState) => ({ rows: state.table.tableRows, cols: state.table.tableCols }),
		shallowEqual
    );

	return { rows, cols };
}
