import type {
	AlignSelfClass,
	GridColumnSpanClass,
	GridColumnStartEndClass,
	GridRowSpanClass,
	GridRowStartEndClass,
	JustifySelfClass,
	PolymorphicElementType,
	ResponsiveValueProps,
	ZIndexClass
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type GridItemNonResponsiveValueProps = {
	alignSelf?: AlignSelfClass;
	columnSpan?: GridColumnSpanClass;
	columnStart?: GridColumnStartEndClass;
	columnEnd?: GridColumnStartEndClass;
	justifySelf?: JustifySelfClass;
	rowSpan?: GridRowSpanClass;
	rowStart?: GridRowStartEndClass;
	rowEnd?: GridRowStartEndClass;
	zIndex?: ZIndexClass;
};
export type GridItemResponsiveValueProps = ResponsiveValueProps<GridItemNonResponsiveValueProps>;

export type GridItemUniqueProps = BoxOtherProps & GridItemResponsiveValueProps;

export type GridItemProps<Element extends PolymorphicElementType> = BoxProps<Element, GridItemUniqueProps>;

export type GridItemRef<Element extends PolymorphicElementType> = BoxRef<Element>;
