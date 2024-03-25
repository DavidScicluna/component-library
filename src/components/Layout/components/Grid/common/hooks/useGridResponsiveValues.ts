import { useGetResponsiveValue } from '@common/hooks';

import type { GridNonResponsiveValueProps, GridResponsiveValueProps } from '../types';

type UseGridResponsiveValuesProps = Partial<GridResponsiveValueProps>;
type UseGridResponsiveValuesReturn = GridNonResponsiveValueProps;

const useGridResponsiveValues = (props: UseGridResponsiveValuesProps): UseGridResponsiveValuesReturn => {
	const {
		alignContent: alignContentProp,
		alignItems: alignItemsProp,
		autoColumns: autoColumnsProp,
		autoFlow: autoFlowProp,
		autoRows: autoRowsProp,
		columnSpacing: columnSpacingProp,
		justifyContent: justifyContentProp,
		justifyItems: justifyItemsProp,
		rowSpacing: rowSpacingProp,
		templateColumns: templateColumnsProp,
		templateRows: templateRowsProp,
		spacing: spacingProp
	} = props;

	const alignContent = useGetResponsiveValue<GridNonResponsiveValueProps['alignContent']>(alignContentProp);
	const alignItems = useGetResponsiveValue<GridNonResponsiveValueProps['alignItems']>(alignItemsProp);
	const autoColumns = useGetResponsiveValue<GridNonResponsiveValueProps['autoColumns']>(autoColumnsProp);
	const autoFlow = useGetResponsiveValue<GridNonResponsiveValueProps['autoFlow']>(autoFlowProp);
	const autoRows = useGetResponsiveValue<GridNonResponsiveValueProps['autoRows']>(autoRowsProp);
	const columnSpacing = useGetResponsiveValue<GridNonResponsiveValueProps['columnSpacing']>(columnSpacingProp);
	const justifyContent = useGetResponsiveValue<GridNonResponsiveValueProps['justifyContent']>(justifyContentProp);
	const justifyItems = useGetResponsiveValue<GridNonResponsiveValueProps['justifyItems']>(justifyItemsProp);
	const rowSpacing = useGetResponsiveValue<GridNonResponsiveValueProps['rowSpacing']>(rowSpacingProp);
	const templateColumns = useGetResponsiveValue<GridNonResponsiveValueProps['templateColumns']>(templateColumnsProp);
	const templateRows = useGetResponsiveValue<GridNonResponsiveValueProps['templateRows']>(templateRowsProp);
	const spacing = useGetResponsiveValue<GridNonResponsiveValueProps['spacing']>(spacingProp);

	return {
		alignContent,
		alignItems,
		autoColumns,
		autoFlow,
		autoRows,
		columnSpacing,
		justifyContent,
		justifyItems,
		rowSpacing,
		templateColumns,
		templateRows,
		spacing
	};
};

export default useGridResponsiveValues;
