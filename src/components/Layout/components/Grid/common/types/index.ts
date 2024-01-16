import type {
	AlignContentClass,
	AlignItemsClass,
	GridAutoClass,
	GridAutoFlowClass,
	GridTemplateColumnsClass,
	GridTemplateRowsClass,
	JustifyContentClass,
	JustifyItemsClass,
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ThemeSpacing
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type GridTemplateColumns = GridTemplateColumnsClass | string;
export type GridTemplateRows = GridTemplateRowsClass | string;

export type GridOtherProps = {
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
export type GridResponsiveValueProps = ResponsiveValueProps<
	GridOtherProps,
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
>;

export type GridProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	GridResponsiveValueProps
>;

export type GridRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
