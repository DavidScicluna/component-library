import { useGetResponsiveValue } from '@common/hooks';
import type {
	AlignSelfClass,
	GridColumnSpanClass,
	GridColumnStartEndClass,
	GridRowSpanClass,
	GridRowStartEndClass,
	JustifySelfClass,
	Undefinable,
	ZIndexClass
} from '@common/types';

import {
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_Z_INDEX__
} from '../constants';
import type { GridItemProps } from '../types';

type UseGridItemResponsiveValuesProps = Partial<
	Pick<
		GridItemProps,
		| 'alignSelf'
		| 'columnSpan'
		| 'columnStart'
		| 'columnEnd'
		| 'justifySelf'
		| 'rowSpan'
		| 'rowStart'
		| 'rowEnd'
		| 'zIndex'
	>
>;

const useGridItemResponsiveValues = (props: UseGridItemResponsiveValuesProps) => {
	const {
		alignSelf: alignSelfProp = __DEFAULT_GRID_ITEM_ALIGN_SELF__,
		columnSpan: columnSpanProp,
		columnStart: columnStartProp,
		columnEnd: columnEndProp,
		justifySelf: justifySelfProp = __DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
		rowSpan: rowSpanProp,
		rowStart: rowStartProp,
		rowEnd: rowEndProp,
		zIndex: zIndexProp = __DEFAULT_GRID_ITEM_Z_INDEX__
	} = props;

	const alignSelf = useGetResponsiveValue<AlignSelfClass>(alignSelfProp);
	const columnSpan = useGetResponsiveValue<Undefinable<GridColumnSpanClass>>(columnSpanProp);
	const columnStart = useGetResponsiveValue<Undefinable<GridColumnStartEndClass>>(columnStartProp);
	const columnEnd = useGetResponsiveValue<Undefinable<GridColumnStartEndClass>>(columnEndProp);
	const justifySelf = useGetResponsiveValue<JustifySelfClass>(justifySelfProp);
	const rowSpan = useGetResponsiveValue<Undefinable<GridRowSpanClass>>(rowSpanProp);
	const rowStart = useGetResponsiveValue<Undefinable<GridRowStartEndClass>>(rowStartProp);
	const rowEnd = useGetResponsiveValue<Undefinable<GridRowStartEndClass>>(rowEndProp);
	const zIndex = useGetResponsiveValue<ZIndexClass>(zIndexProp);

	return { alignSelf, columnSpan, columnStart, columnEnd, justifySelf, rowSpan, rowStart, rowEnd, zIndex };
};

export default useGridItemResponsiveValues;
