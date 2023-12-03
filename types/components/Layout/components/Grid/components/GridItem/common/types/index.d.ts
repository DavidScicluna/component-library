import type { ElementType } from 'react';
import type { AlignSelfClass, GridColumnSpanClass, GridColumnStartEndClass, GridRowSpanClass, GridRowStartEndClass, JustifySelfClass, PolymorphicDefaultElement, ResponsiveValue, ZIndexClass } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
type GridItemOtherProps = {
    alignSelf?: ResponsiveValue<AlignSelfClass>;
    columnSpan?: ResponsiveValue<GridColumnSpanClass>;
    columnStart?: ResponsiveValue<GridColumnStartEndClass>;
    columnEnd?: ResponsiveValue<GridColumnStartEndClass>;
    justifySelf?: ResponsiveValue<JustifySelfClass>;
    rowSpan?: ResponsiveValue<GridRowSpanClass>;
    rowStart?: ResponsiveValue<GridRowStartEndClass>;
    rowEnd?: ResponsiveValue<GridRowStartEndClass>;
    zIndex?: ResponsiveValue<ZIndexClass>;
};
export type GridItemProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<Element, GridItemOtherProps>;
export type GridItemRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map