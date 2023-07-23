import { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';
import type {
	AlignSelf,
	GridColumnSpan,
	GridColumnStartEnd,
	GridRowSpan,
	GridRowStartEnd,
	JustifySelf,
	ZIndex
} from '@common/types/classes';

import type { BoxProps, BoxRef } from '@components/Layout/Box/common/types';

type GridItemOtherProps = {
	alignSelf?: ResponsiveValue<AlignSelf>;
	// area?: ResponsiveValue<>;
	columnSpan?: ResponsiveValue<GridColumnSpan>;
	columnStart?: ResponsiveValue<GridColumnStartEnd>;
	columnEnd?: ResponsiveValue<GridColumnStartEnd>;
	justifySelf?: ResponsiveValue<JustifySelf>;
	rowSpan?: ResponsiveValue<GridRowSpan>;
	rowStart?: ResponsiveValue<GridRowStartEnd>;
	rowEnd?: ResponsiveValue<GridRowStartEnd>;
	zIndex?: ResponsiveValue<ZIndex>;
};

export type GridItemProps<Element extends ElementType> = BoxProps<Element, GridItemOtherProps>;

export type GridItemRef<Element extends ElementType> = BoxRef<Element>;
