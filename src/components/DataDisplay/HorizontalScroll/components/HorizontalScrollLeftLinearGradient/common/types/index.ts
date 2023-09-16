import type { ElementType } from 'react';

import type {
	HorizontalScrollLinearGradientProps,
	HorizontalScrollLinearGradientRef
} from '@components/DataDisplay/HorizontalScroll';

export type HorizontalScrollLeftLinearGradientProps<Element extends ElementType> = Omit<
	HorizontalScrollLinearGradientProps<Element>,
	'direction' | 'isVisible'
>;

export type HorizontalScrollLeftLinearGradientRef<Element extends ElementType> =
	HorizontalScrollLinearGradientRef<Element>;
