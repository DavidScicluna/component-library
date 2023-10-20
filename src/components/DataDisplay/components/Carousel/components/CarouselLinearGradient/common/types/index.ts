import type { ElementType } from 'react';

import type { ResponsiveValue } from '@common/types';

import type { CarouselArrowDirection } from '@components/DataDisplay';
import type { LinearGradientProps, LinearGradientRef } from '@components/Overlay/components/LinearGradient';

type CarouselLinearGradientOtherProps = {
	/**
	 * The direction the gradient
	 */
	direction: ResponsiveValue<CarouselArrowDirection>;
	/**
	 * If true, the gradient will be visible
	 *
	 * @default true
	 */
	isVisible?: ResponsiveValue<boolean>;
};

export type CarouselLinearGradientProps<Element extends ElementType> = Omit<
	LinearGradientProps<Element>,
	'direction' | 'from' | 'middle' | 'to'
> &
	CarouselLinearGradientOtherProps;

export type CarouselLinearGradientRef<Element extends ElementType> = LinearGradientRef<Element>;
