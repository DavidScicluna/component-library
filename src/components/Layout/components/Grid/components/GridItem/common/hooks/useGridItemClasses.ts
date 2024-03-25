import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import { DEFAULT_GRID_ITEM_ALIGN_SELF, DEFAULT_GRID_ITEM_JUSTIFY_SELF, DEFAULT_GRID_ITEM_Z_INDEX } from '../constants';
import type { GridItemUniqueProps } from '../types';

import useGridItemResponsiveValues from './useGridItemResponsiveValues';

type PickedGridItemUniqueProps =
	| 'alignSelf'
	| 'columnSpan'
	| 'columnStart'
	| 'columnEnd'
	| 'justifySelf'
	| 'rowSpan'
	| 'rowStart'
	| 'rowEnd'
	| 'zIndex';
type UseGridItemClassesProps = Pick<GridItemUniqueProps, PickedGridItemUniqueProps>;
type UseGridItemClassesReturn = ClassName;

const useGridItemClasses = (props: UseGridItemClassesProps): UseGridItemClassesReturn => {
	const {
		alignSelf: alignSelfProp,
		columnSpan: columnSpanProp,
		columnStart: columnStartProp,
		columnEnd: columnEndProp,
		justifySelf: justifySelfProp,
		rowSpan: rowSpanProp,
		rowStart: rowStartProp,
		rowEnd: rowEndProp,
		zIndex: zIndexProp
	} = props;

	const {
		alignSelf = DEFAULT_GRID_ITEM_ALIGN_SELF,
		columnSpan,
		columnStart,
		columnEnd,
		justifySelf = DEFAULT_GRID_ITEM_JUSTIFY_SELF,
		rowSpan,
		rowStart,
		rowEnd,
		zIndex = DEFAULT_GRID_ITEM_Z_INDEX
	} = useGridItemResponsiveValues({
		alignSelf: alignSelfProp,
		columnSpan: columnSpanProp,
		columnStart: columnStartProp,
		columnEnd: columnEndProp,
		justifySelf: justifySelfProp,
		rowSpan: rowSpanProp,
		rowStart: rowStartProp,
		rowEnd: rowEndProp,
		zIndex: zIndexProp
	});

	const alignSelfClassName = useGetClass((classes) => classes.grid.align_self[alignSelf]);
	const justifySelfClassName = useGetClass((classes) => classes.grid.justify_self[justifySelf]);

	const columnSpanClassName = useGetClass((classes) => (columnSpan ? classes.grid.column_span[columnSpan] : ''));
	const columnStartClassName = useGetClass((classes) => (columnStart ? classes.grid.column_start[columnStart] : ''));
	const columnEndClassName = useGetClass((classes) => (columnEnd ? classes.grid.column_end[columnEnd] : ''));

	const rowSpanClassName = useGetClass((classes) => (rowSpan ? classes.grid.row_span[rowSpan] : ''));
	const rowStartClassName = useGetClass((classes) => (rowStart ? classes.grid.row_start[rowStart] : ''));
	const rowEndClassName = useGetClass((classes) => (rowEnd ? classes.grid.row_end[rowEnd] : ''));

	const zIndexClassName = useGetClass((classes) => (zIndex ? classes.layout.z_index[zIndex] : '') as string);

	return classNames(
		alignSelfClassName,
		justifySelfClassName,
		columnSpanClassName,
		columnStartClassName,
		columnEndClassName,
		rowSpanClassName,
		rowStartClassName,
		rowEndClassName,
		zIndexClassName
	);
};

export default useGridItemClasses;
