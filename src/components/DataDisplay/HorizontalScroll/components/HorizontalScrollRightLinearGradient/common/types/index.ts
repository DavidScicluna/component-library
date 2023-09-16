import type { ElementType } from 'react';

import type {
	HorizontalScrollAPIContext,
	HorizontalScrollLinearGradientProps,
	HorizontalScrollLinearGradientRef
} from '@components/DataDisplay/HorizontalScroll';

type HorizontalScrollRightLinearGradientOtherProps = {
	scroll?: HorizontalScrollAPIContext;
};

export type HorizontalScrollRightLinearGradientProps<Element extends ElementType> = Omit<
	HorizontalScrollLinearGradientProps<Element>,
	'direction' | 'isVisible'
> &
	HorizontalScrollRightLinearGradientOtherProps;

export type HorizontalScrollRightLinearGradientRef<Element extends ElementType> =
	HorizontalScrollLinearGradientRef<Element>;
