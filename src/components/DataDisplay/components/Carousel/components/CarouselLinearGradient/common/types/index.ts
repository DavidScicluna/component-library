import type { PolymorphicDefaultElement, PolymorphicElementType, ResponsiveValue } from '@common/types';

import type { CarouselArrowDirection } from '@components/DataDisplay';
import type { LinearGradientProps, LinearGradientRef } from '@components/Overlay';

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

export type CarouselLinearGradientProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	LinearGradientProps<Element>,
	'direction' | 'from' | 'middle' | 'to'
> &
	CarouselLinearGradientOtherProps;

export type CarouselLinearGradientRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	LinearGradientRef<Element>;
