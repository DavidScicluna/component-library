import { useGetResponsiveValue } from '@common/hooks';
import type {
	AlignContentClass,
	AlignItemsClass,
	GridAutoClass,
	GridAutoFlowClass,
	JustifyContentClass,
	JustifyItemsClass,
	ThemeSpacing,
	Undefinable
} from '@common/types';

import type {
	GridNonResponsiveValueProps,
	GridResponsiveValueProps,
	GridTemplateColumns,
	GridTemplateRows
} from '../types';

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

	const alignContent = useGetResponsiveValue<Undefinable<AlignContentClass>>(alignContentProp);
	const alignItems = useGetResponsiveValue<Undefinable<AlignItemsClass>>(alignItemsProp);
	const autoColumns = useGetResponsiveValue<Undefinable<GridAutoClass>>(autoColumnsProp);
	const autoFlow = useGetResponsiveValue<Undefinable<GridAutoFlowClass>>(autoFlowProp);
	const autoRows = useGetResponsiveValue<Undefinable<GridAutoClass>>(autoRowsProp);
	const columnSpacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(columnSpacingProp);
	const justifyContent = useGetResponsiveValue<Undefinable<JustifyContentClass>>(justifyContentProp);
	const justifyItems = useGetResponsiveValue<Undefinable<JustifyItemsClass>>(justifyItemsProp);
	const rowSpacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(rowSpacingProp);
	const templateColumns = useGetResponsiveValue<Undefinable<GridTemplateColumns>>(templateColumnsProp);
	const templateRows = useGetResponsiveValue<Undefinable<GridTemplateRows>>(templateRowsProp);
	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);

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
