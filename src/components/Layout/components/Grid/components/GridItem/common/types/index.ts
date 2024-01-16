import type {
	AlignSelfClass,
	GridColumnSpanClass,
	GridColumnStartEndClass,
	GridRowSpanClass,
	GridRowStartEndClass,
	JustifySelfClass,
	PolymorphicDefaultElement,
	PolymorphicElementType,
	ResponsiveValueProps,
	ZIndexClass
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type GridItemOtherProps = {
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
export type GridItemResponsiveValueProps = ResponsiveValueProps<
	GridItemOtherProps,
	| 'alignSelf'
	| 'columnSpan'
	| 'columnStart'
	| 'columnEnd'
	| 'justifySelf'
	| 'rowSpan'
	| 'rowStart'
	| 'rowEnd'
	| 'zIndex'
>;

export type GridItemProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	GridItemResponsiveValueProps
>;

export type GridItemRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> = BoxRef<Element>;
