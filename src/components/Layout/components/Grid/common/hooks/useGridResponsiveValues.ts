import type { Required } from 'utility-types';

import { DEFAULT_SPACING } from '@common/constants';
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
	DEFAULT_GRID_ALIGN_CONTENT,
	DEFAULT_GRID_ALIGN_ITEMS,
	DEFAULT_GRID_JUSTIFY_CONTENT,
	DEFAULT_GRID_JUSTIFY_ITEMS,
	DEFAULT_GRID_TEMPLATE_COLUMNS,
	DEFAULT_GRID_TEMPLATE_ROWS
} from '../constants';
import type {
	GridNonResponsiveValueProps,
	GridResponsiveValueProps,
	GridTemplateColumns,
	GridTemplateRows
} from '../types';

type UseGridResponsiveValuesProps = Partial<GridResponsiveValueProps>;
type RequiredGridNonResponsiveValueProps =
	| 'alignContent'
	| 'alignItems'
	| 'justifyContent'
	| 'justifyItems'
	| 'templateColumns'
	| 'templateRows'
	| 'spacing';
type UseGridResponsiveValuesReturn = Required<GridNonResponsiveValueProps, RequiredGridNonResponsiveValueProps>;

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
		alignContent: alignContent || DEFAULT_GRID_ALIGN_CONTENT,
		alignItems: alignItems || DEFAULT_GRID_ALIGN_ITEMS,
		autoColumns,
		autoFlow,
		autoRows,
		columnSpacing,
		justifyContent: justifyContent || DEFAULT_GRID_JUSTIFY_CONTENT,
		justifyItems: justifyItems || DEFAULT_GRID_JUSTIFY_ITEMS,
		rowSpacing,
		templateColumns: templateColumns || DEFAULT_GRID_TEMPLATE_COLUMNS,
		templateRows: templateRows || DEFAULT_GRID_TEMPLATE_ROWS,
		spacing: spacing || DEFAULT_SPACING
	};
};

export default useGridResponsiveValues;
