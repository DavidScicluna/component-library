import type { ElementType } from 'react';

import type { CarouselLinearGradientProps, CarouselLinearGradientRef } from '@components/DataDisplay';

export type CarouselRightLinearGradientProps<Element extends ElementType> = Omit<
	CarouselLinearGradientProps<Element>,
	'direction' | 'isVisible'
>;

export type CarouselRightLinearGradientRef<Element extends ElementType> = CarouselLinearGradientRef<Element>;
