import type { ElementType } from 'react';
import type { AlignContentClass, AlignItemsClass, GridAutoClass, GridAutoFlowClass, GridTemplateColumnsClass, GridTemplateRowsClass, JustifyContentClass, JustifyItemsClass, PolymorphicDefaultElement, ResponsiveValue, ThemeSpacing } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
export type GridTemplateColumns = GridTemplateColumnsClass | string;
export type GridTemplateRows = GridTemplateRowsClass | string;
type GridOtherProps = {
    alignContent?: ResponsiveValue<AlignContentClass>;
    alignItems?: ResponsiveValue<AlignItemsClass>;
    autoColumns?: ResponsiveValue<GridAutoClass>;
    autoFlow?: ResponsiveValue<GridAutoFlowClass>;
    autoRows?: ResponsiveValue<GridAutoClass>;
    columnSpacing?: ResponsiveValue<ThemeSpacing>;
    justifyContent?: ResponsiveValue<JustifyContentClass>;
    justifyItems?: ResponsiveValue<JustifyItemsClass>;
    rowSpacing?: ResponsiveValue<ThemeSpacing>;
    templateColumns?: ResponsiveValue<GridTemplateColumns>;
    templateRows?: ResponsiveValue<GridTemplateRows>;
    spacing?: ResponsiveValue<ThemeSpacing>;
};
export type GridProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element, GridOtherProps>;
export type GridRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map