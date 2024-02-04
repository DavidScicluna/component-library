import type { ReactNode } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	__DEFAULT_CAROUSEL_ORIENTTATION__,
	__DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
	__DEFAULT_CAROUSEL_VARIANT__
} from '../constants';
import type {
	CarouselElement,
	CarouselOrientation,
	CarouselProps,
	CarouselScrollAmount,
	CarouselVariant
} from '../types';

type UseCarouselResponsiveValuesProps<Element extends CarouselElement> = Partial<
	Pick<CarouselProps<Element>, 'divider' | 'scrollAmount' | 'spacing' | 'orientation' | 'variant'>
>;

const useCarouselResponsiveValues = <Element extends CarouselElement>(
	props: UseCarouselResponsiveValuesProps<Element>
) => {
	const {
		divider: dividerProp,
		scrollAmount: scrollAmountProp = __DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		orientation: orientationProp = __DEFAULT_CAROUSEL_ORIENTTATION__,
		variant: variantProp = __DEFAULT_CAROUSEL_VARIANT__
	} = props;

	const divider = useGetResponsiveValue<ReactNode>(dividerProp);
	const scrollAmount = useGetResponsiveValue<CarouselScrollAmount>(scrollAmountProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const orientation = useGetResponsiveValue<CarouselOrientation>(orientationProp);
	const variant = useGetResponsiveValue<CarouselVariant>(variantProp);

	return { divider, scrollAmount, spacing, orientation, variant };
};

export default useCarouselResponsiveValues;
