import type { ElementType } from 'react';

import type { HorizontalScrollArrowDirection } from '@components/DataDisplay/HorizontalScroll';
import type { LinearGradientProps, LinearGradientRef } from '@components/Overlay/components/LinearGradient';

type HorizontalScrollLinearGradientOtherProps = {
	/**
	 * The direction the gradient
	 */
	direction: HorizontalScrollArrowDirection;
	/**
	 * If true, the gradient will be visible
	 *
	 * @default true
	 */
	isVisible?: boolean;
};

export type HorizontalScrollLinearGradientProps<Element extends ElementType> = Omit<
	LinearGradientProps<Element>,
	'direction' | 'from' | 'middle' | 'to'
> &
	HorizontalScrollLinearGradientOtherProps;

export type HorizontalScrollLinearGradientRef<Element extends ElementType> = LinearGradientRef<Element>;
