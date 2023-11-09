import type { ElementType } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import type { CarouselLinearGradientProps, CarouselLinearGradientRef } from '@components/DataDisplay';

export type CarouselLeftLinearGradientProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<
	CarouselLinearGradientProps<Element>,
	'direction' | 'isVisible'
>;

export type CarouselLeftLinearGradientRef<Element extends ElementType = PolymorphicDefaultElement> =
	CarouselLinearGradientRef<Element>;
