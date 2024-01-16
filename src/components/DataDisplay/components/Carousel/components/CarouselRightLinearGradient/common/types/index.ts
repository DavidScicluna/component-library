import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import type { CarouselLinearGradientProps, CarouselLinearGradientRef } from '@components/DataDisplay';

export type CarouselRightLinearGradientProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Omit<
	CarouselLinearGradientProps<Element>,
	'direction' | 'isVisible'
>;

export type CarouselRightLinearGradientRef<Element extends PolymorphicElementType = PolymorphicDefaultElement> =
	CarouselLinearGradientRef<Element>;
