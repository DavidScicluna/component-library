import type {
	AlignSelfClass,
	GridColumnSpanClass,
	GridColumnStartEndClass,
	GridRowSpanClass,
	GridRowStartEndClass,
	JustifySelfClass,
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValue,
	ZIndexClass
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

type GridItemOtherProps = {
	alignSelf?: ResponsiveValue<AlignSelfClass>;
	// area?: ResponsiveValue<>;
	columnSpan?: ResponsiveValue<GridColumnSpanClass>;
	columnStart?: ResponsiveValue<GridColumnStartEndClass>;
	columnEnd?: ResponsiveValue<GridColumnStartEndClass>;
	justifySelf?: ResponsiveValue<JustifySelfClass>;
	rowSpan?: ResponsiveValue<GridRowSpanClass>;
	rowStart?: ResponsiveValue<GridRowStartEndClass>;
	rowEnd?: ResponsiveValue<GridRowStartEndClass>;
	zIndex?: ResponsiveValue<ZIndexClass>;
};

export type GridItemProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	GridItemOtherProps
>;

export type GridItemRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
