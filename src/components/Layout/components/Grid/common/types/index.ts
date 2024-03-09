import type {
	AlignContentClass,
	AlignItemsClass,
	GridAutoClass,
	GridAutoFlowClass,
	GridTemplateColumnsClass,
	GridTemplateRowsClass,
	JustifyContentClass,
	JustifyItemsClass,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeSpacing
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type GridTemplateColumns = GridTemplateColumnsClass | string;
export type GridTemplateRows = GridTemplateRowsClass | string;

export type GridNonResponsiveValueProps = {
	alignContent?: AlignContentClass;
	alignItems?: AlignItemsClass;
	autoColumns?: GridAutoClass;
	autoFlow?: GridAutoFlowClass;
	autoRows?: GridAutoClass;
	columnSpacing?: ThemeSpacing;
	justifyContent?: JustifyContentClass;
	justifyItems?: JustifyItemsClass;
	rowSpacing?: ThemeSpacing;
	templateColumns?: GridTemplateColumns;
	templateRows?: GridTemplateRows;
	spacing?: ThemeSpacing;
};
export type GridResponsiveValueProps = ResponsiveValueProps<GridNonResponsiveValueProps>;

export type GridUniqueProps = BoxOtherProps & GridResponsiveValueProps;

export type GridProps<Element extends PolymorphicElementType> = BoxProps<Element, GridUniqueProps>;

export type GridRef<Element extends PolymorphicElementType> = BoxRef<Element>;
