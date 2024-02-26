import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { DEFAULT_GRID_ITEM_ALIGN_SELF, DEFAULT_GRID_ITEM_JUSTIFY_SELF, DEFAULT_GRID_ITEM_Z_INDEX } from '../constants';
import type { GridItemProps } from '../types';

import useGridItemResponsiveValues from './useGridItemResponsiveValues';

type PickedGridItemProps =
	| 'alignSelf'
	| 'columnSpan'
	| 'columnStart'
	| 'columnEnd'
	| 'justifySelf'
	| 'rowSpan'
	| 'rowStart'
	| 'rowEnd'
	| 'zIndex';
type UseGridItemClassesProps<Element extends PolymorphicElementType> = Pick<
	GridItemProps<Element>,
	PickedGridItemProps
>;
type UseGridItemClassesReturn = ClassName;

const useGridItemClasses = <Element extends PolymorphicElementType>(
	props: UseGridItemClassesProps<Element>
): UseGridItemClassesReturn => {
	const {
		alignSelf: alignSelfProp = DEFAULT_GRID_ITEM_ALIGN_SELF,
		columnSpan: columnSpanProp,
		columnStart: columnStartProp,
		columnEnd: columnEndProp,
		justifySelf: justifySelfProp = DEFAULT_GRID_ITEM_JUSTIFY_SELF,
		rowSpan: rowSpanProp,
		rowStart: rowStartProp,
		rowEnd: rowEndProp,
		zIndex: zIndexProp = DEFAULT_GRID_ITEM_Z_INDEX
	} = props;

	const { alignSelf, columnSpan, columnStart, columnEnd, justifySelf, rowSpan, rowStart, rowEnd, zIndex } =
		useGridItemResponsiveValues({
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
