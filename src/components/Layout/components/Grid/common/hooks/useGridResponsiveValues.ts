import { __DEFAULT_SPACING__ } from '@common/constants';
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

import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from '../constants';
import type { GridProps, GridTemplateColumns, GridTemplateRows } from '../types';

type UseGridResponsiveValuesProps = Partial<
	Pick<
		GridProps,
		| 'alignContent'
		| 'alignItems'
		| 'autoColumns'
		| 'autoFlow'
		| 'autoRows'
		| 'columnSpacing'
		| 'justifyContent'
		| 'justifyItems'
		| 'rowSpacing'
		| 'templateColumns'
		| 'templateRows'
		| 'spacing'
	>
>;

const useGridResponsiveValues = (props: UseGridResponsiveValuesProps) => {
	const {
		alignContent: alignContentProp = __DEFAULT_GRID_ALIGN_CONTENT__,
		alignItems: alignItemsProp = __DEFAULT_GRID_ALIGN_ITEMS__,
		autoColumns: autoColumnsProp,
		autoFlow: autoFlowProp,
		autoRows: autoRowsProp,
		columnSpacing: columnSpacingProp,
		justifyContent: justifyContentProp = __DEFAULT_GRID_JUSTIFY_CONTENT__,
		justifyItems: justifyItemsProp = __DEFAULT_GRID_JUSTIFY_ITEMS__,
		rowSpacing: rowSpacingProp,
		templateColumns: templateColumnsProp = __DEFAULT_GRID_TEMPLATE_COLUMNS__,
		templateRows: templateRowsProp = __DEFAULT_GRID_TEMPLATE_ROWS__,
		spacing: spacingProp = __DEFAULT_SPACING__
	} = props;

	const alignContent = useGetResponsiveValue<AlignContentClass>(alignContentProp);
	const alignItems = useGetResponsiveValue<AlignItemsClass>(alignItemsProp);
	const autoColumns = useGetResponsiveValue<Undefinable<GridAutoClass>>(autoColumnsProp);
	const autoFlow = useGetResponsiveValue<Undefinable<GridAutoFlowClass>>(autoFlowProp);
	const autoRows = useGetResponsiveValue<Undefinable<GridAutoClass>>(autoRowsProp);
	const columnSpacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(columnSpacingProp);
	const justifyContent = useGetResponsiveValue<JustifyContentClass>(justifyContentProp);
	const justifyItems = useGetResponsiveValue<JustifyItemsClass>(justifyItemsProp);
	const rowSpacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(rowSpacingProp);
	const templateColumns = useGetResponsiveValue<GridTemplateColumns>(templateColumnsProp);
	const templateRows = useGetResponsiveValue<GridTemplateRows>(templateRowsProp);
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
