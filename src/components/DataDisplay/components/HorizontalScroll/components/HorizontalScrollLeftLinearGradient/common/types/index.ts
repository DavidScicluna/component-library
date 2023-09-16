import type { ElementType } from 'react';

import type {
	HorizontalScrollAPIContext,
	HorizontalScrollLinearGradientProps,
	HorizontalScrollLinearGradientRef
} from '@components/DataDisplay/components/HorizontalScroll';

type HorizontalScrollLeftLinearGradientOtherProps = {
	scroll?: HorizontalScrollAPIContext;
};

export type HorizontalScrollLeftLinearGradientProps<Element extends ElementType> = Omit<
	HorizontalScrollLinearGradientProps<Element>,
	'direction' | 'isVisible'
> &
	HorizontalScrollLeftLinearGradientOtherProps;

export type HorizontalScrollLeftLinearGradientRef<Element extends ElementType> =
	HorizontalScrollLinearGradientRef<Element>;
