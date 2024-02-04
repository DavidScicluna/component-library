import type { PolymorphicElementType } from '@common/types';

import type { CarouselLinearGradientProps, CarouselLinearGradientRef } from '@components/DataDisplay';

export type CarouselLeftLinearGradientProps<Element extends PolymorphicElementType> = Omit<
	CarouselLinearGradientProps<Element>,
	'direction' | 'isVisible'
>;

export type CarouselLeftLinearGradientRef<Element extends PolymorphicElementType> = CarouselLinearGradientRef<Element>;
