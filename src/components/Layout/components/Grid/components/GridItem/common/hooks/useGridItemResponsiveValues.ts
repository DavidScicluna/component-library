import type { Required } from 'utility-types';

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
import type { GridItemNonResponsiveValueProps, GridItemResponsiveValueProps } from '../types';

type UseGridItemResponsiveValuesProps = Partial<GridItemResponsiveValueProps>;
type UseGridItemResponsiveValuesReturn = Required<
	GridItemNonResponsiveValueProps,
	'alignSelf' | 'justifySelf' | 'zIndex'
>;

const useGridItemResponsiveValues = (props: UseGridItemResponsiveValuesProps): UseGridItemResponsiveValuesReturn => {
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

	const alignSelf = useGetResponsiveValue<Undefinable<AlignSelfClass>>(alignSelfProp);
	const columnSpan = useGetResponsiveValue<Undefinable<GridColumnSpanClass>>(columnSpanProp);
	const columnStart = useGetResponsiveValue<Undefinable<GridColumnStartEndClass>>(columnStartProp);
	const columnEnd = useGetResponsiveValue<Undefinable<GridColumnStartEndClass>>(columnEndProp);
	const justifySelf = useGetResponsiveValue<Undefinable<JustifySelfClass>>(justifySelfProp);
	const rowSpan = useGetResponsiveValue<Undefinable<GridRowSpanClass>>(rowSpanProp);
	const rowStart = useGetResponsiveValue<Undefinable<GridRowStartEndClass>>(rowStartProp);
	const rowEnd = useGetResponsiveValue<Undefinable<GridRowStartEndClass>>(rowEndProp);
	const zIndex = useGetResponsiveValue<Undefinable<ZIndexClass>>(zIndexProp);

	return {
		alignSelf: alignSelf || __DEFAULT_GRID_ITEM_ALIGN_SELF__,
		columnSpan,
		columnStart,
		columnEnd,
		justifySelf: justifySelf || __DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
		rowSpan,
		rowStart,
		rowEnd,
		zIndex: zIndex || __DEFAULT_GRID_ITEM_Z_INDEX__
	};
};

export default useGridItemResponsiveValues;
