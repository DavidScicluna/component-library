import type { ElementType } from 'react';

import type { CarouselLinearGradientProps, CarouselLinearGradientRef } from '@components/DataDisplay';

export type CarouselLeftLinearGradientProps<Element extends ElementType> = Omit<
	CarouselLinearGradientProps<Element>,
	'direction' | 'isVisible'
>;

export type CarouselLeftLinearGradientRef<Element extends ElementType> = CarouselLinearGradientRef<Element>;
