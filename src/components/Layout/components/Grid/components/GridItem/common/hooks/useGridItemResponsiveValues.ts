import { useGetResponsiveValue } from '@common/hooks';

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

	const alignSelf = useGetResponsiveValue<GridItemNonResponsiveValueProps['alignSelf']>(alignSelfProp);
	const columnSpan = useGetResponsiveValue<GridItemNonResponsiveValueProps['columnSpan']>(columnSpanProp);
	const columnStart = useGetResponsiveValue<GridItemNonResponsiveValueProps['columnStart']>(columnStartProp);
	const columnEnd = useGetResponsiveValue<GridItemNonResponsiveValueProps['columnEnd']>(columnEndProp);
	const justifySelf = useGetResponsiveValue<GridItemNonResponsiveValueProps['justifySelf']>(justifySelfProp);
	const rowSpan = useGetResponsiveValue<GridItemNonResponsiveValueProps['rowSpan']>(rowSpanProp);
	const rowStart = useGetResponsiveValue<GridItemNonResponsiveValueProps['rowStart']>(rowStartProp);
	const rowEnd = useGetResponsiveValue<GridItemNonResponsiveValueProps['rowEnd']>(rowEndProp);
	const zIndex = useGetResponsiveValue<GridItemNonResponsiveValueProps['zIndex']>(zIndexProp);

	return { alignSelf, columnSpan, columnStart, columnEnd, justifySelf, rowSpan, rowStart, rowEnd, zIndex };
};

export default useGridItemResponsiveValues;
