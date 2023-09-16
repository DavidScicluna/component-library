import type { ElementType } from 'react';

import type {
	HorizontalScrollLinearGradientProps,
	HorizontalScrollLinearGradientRef
} from '@components/DataDisplay/HorizontalScroll';

export type HorizontalScrollRightLinearGradientProps<Element extends ElementType> = Omit<
	HorizontalScrollLinearGradientProps<Element>,
	'direction' | 'isVisible'
>;

export type HorizontalScrollRightLinearGradientRef<Element extends ElementType> =
	HorizontalScrollLinearGradientRef<Element>;
