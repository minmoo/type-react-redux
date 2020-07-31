import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '../../modules';

export default function useTable() {
	const { rows, cols } = useSelector(
		(state: RootState) => ({ rows: state.table.tableRows, cols: state.table.tableCols }),
		shallowEqual
	);

	return { rows, cols };
}
