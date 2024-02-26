import type { ReactNode } from 'react';

import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { DEFAULT_CAROUSEL_ORIENTTATION, DEFAULT_CAROUSEL_SCROLL_AMOUNT, DEFAULT_CAROUSEL_VARIANT } from '../constants';
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
		scrollAmount: scrollAmountProp = DEFAULT_CAROUSEL_SCROLL_AMOUNT,
		spacing: spacingProp = DEFAULT_SPACING,
		orientation: orientationProp = DEFAULT_CAROUSEL_ORIENTTATION,
		variant: variantProp = DEFAULT_CAROUSEL_VARIANT
	} = props;

	const divider = useGetResponsiveValue<ReactNode>(dividerProp);
	const scrollAmount = useGetResponsiveValue<CarouselScrollAmount>(scrollAmountProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const orientation = useGetResponsiveValue<CarouselOrientation>(orientationProp);
	const variant = useGetResponsiveValue<CarouselVariant>(variantProp);

	return { divider, scrollAmount, spacing, orientation, variant };
};

export default useCarouselResponsiveValues;
