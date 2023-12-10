import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';

import { CarouselContext } from '../../Carousel';
import {
	__DEFAULT_CAROUSEL_ID__,
	__DEFAULT_CAROUSEL_ITEMS__,
	__DEFAULT_CAROUSEL_ORIENTTATION__,
	__DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
	__DEFAULT_CAROUSEL_VARIANT__,
	__DEFAULT_CAROUSEL_VISIBLE_ITEMS__
} from '../constants';
import type { CarouselContext as CarouselContextType } from '../types';

import useCarouselResponsiveValues from './useCarouselResponsiveValues';

const useCarouselContext = () => {
	const {
		color,
		colorMode,
		id = __DEFAULT_CAROUSEL_ID__,
		items = __DEFAULT_CAROUSEL_ITEMS__,
		visibleItems = __DEFAULT_CAROUSEL_VISIBLE_ITEMS__,
		scrollAmount: scrollAmountProp = __DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		orientation: orientationProp = __DEFAULT_CAROUSEL_ORIENTTATION__,
		variant: variantProp = __DEFAULT_CAROUSEL_VARIANT__
	} = useContext<CarouselContextType>(CarouselContext);

	const { scrollAmount, spacing, orientation, variant } = useCarouselResponsiveValues({
		scrollAmount: scrollAmountProp,
		spacing: spacingProp,
		orientation: orientationProp,
		variant: variantProp
	});

	return { color, colorMode, id, items, visibleItems, scrollAmount, spacing, orientation, variant };
};

export default useCarouselContext;
