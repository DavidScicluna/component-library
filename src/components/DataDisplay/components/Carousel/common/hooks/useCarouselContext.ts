import { useContext } from 'react';

import { DEFAULT_SPACING } from '@common/constants';

import { CarouselContext } from '../../Carousel';
import {
	DEFAULT_CAROUSEL_ID,
	DEFAULT_CAROUSEL_ITEMS,
	DEFAULT_CAROUSEL_ORIENTTATION,
	DEFAULT_CAROUSEL_SCROLL_AMOUNT,
	DEFAULT_CAROUSEL_VARIANT,
	DEFAULT_CAROUSEL_VISIBLE_ITEMS
} from '../constants';
import type { CarouselContext as CarouselContextType, CarouselElement } from '../types';

import useCarouselResponsiveValues from './useCarouselResponsiveValues';

const useCarouselContext = <Element extends CarouselElement>() => {
	const {
		color,
		colorMode,
		id = DEFAULT_CAROUSEL_ID,
		items = DEFAULT_CAROUSEL_ITEMS,
		visibleItems = DEFAULT_CAROUSEL_VISIBLE_ITEMS,
		scrollAmount: scrollAmountProp = DEFAULT_CAROUSEL_SCROLL_AMOUNT,
		spacing: spacingProp = DEFAULT_SPACING,
		orientation: orientationProp = DEFAULT_CAROUSEL_ORIENTTATION,
		variant: variantProp = DEFAULT_CAROUSEL_VARIANT
	} = useContext<CarouselContextType<Element>>(CarouselContext);

	const { scrollAmount, spacing, orientation, variant } = useCarouselResponsiveValues<Element>({
		scrollAmount: scrollAmountProp,
		spacing: spacingProp,
		orientation: orientationProp,
		variant: variantProp
	});

	return { color, colorMode, id, items, visibleItems, scrollAmount, spacing, orientation, variant };
};

export default useCarouselContext;
