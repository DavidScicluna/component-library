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

import type { GridItemNonResponsiveValueProps, GridItemResponsiveValueProps } from '../types';

type UseGridItemResponsiveValuesProps = Partial<GridItemResponsiveValueProps>;
type UseGridItemResponsiveValuesReturn = GridItemNonResponsiveValueProps;

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

	return { alignSelf, columnSpan, columnStart, columnEnd, justifySelf, rowSpan, rowStart, rowEnd, zIndex };
};

export default useGridItemResponsiveValues;
