import type { Required } from 'utility-types';

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
		alignContent: alignContent || __DEFAULT_GRID_ALIGN_CONTENT__,
		alignItems: alignItems || __DEFAULT_GRID_ALIGN_ITEMS__,
		autoColumns,
		autoFlow,
		autoRows,
		columnSpacing,
		justifyContent: justifyContent || __DEFAULT_GRID_JUSTIFY_CONTENT__,
		justifyItems: justifyItems || __DEFAULT_GRID_JUSTIFY_ITEMS__,
		rowSpacing,
		templateColumns: templateColumns || __DEFAULT_GRID_TEMPLATE_COLUMNS__,
		templateRows: templateRows || __DEFAULT_GRID_TEMPLATE_ROWS__,
		spacing: spacing || __DEFAULT_SPACING__
	};
};

export default useGridResponsiveValues;
