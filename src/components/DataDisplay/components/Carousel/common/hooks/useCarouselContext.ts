import type { ElementType } from 'react';
import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { CarouselContext } from '../../Carousel';
import {
	__DEFAULT_CAROUSEL_ID__,
	__DEFAULT_CAROUSEL_ITEMS__,
	__DEFAULT_CAROUSEL_ORIENTTATION__,
	__DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
	__DEFAULT_CAROUSEL_VARIANT__
} from '../constants';
import type {
	CarouselContext as CarouselContextType,
	CarouselOrientation,
	CarouselScrollAmount,
	CarouselVariant
} from '../types';

const useCarouselContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		id = __DEFAULT_CAROUSEL_ID__,
		items = __DEFAULT_CAROUSEL_ITEMS__,
		scrollAmount: sa = __DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
		spacing: s = __DEFAULT_SPACING__,
		orientation: o = __DEFAULT_CAROUSEL_ORIENTTATION__,
		variant: v = __DEFAULT_CAROUSEL_VARIANT__
	} = useContext<CarouselContextType<Element>>(CarouselContext);

	const scrollAmount = useGetResponsiveValue<CarouselScrollAmount>(sa);
	const spacing = useGetResponsiveValue<ThemeSpacing>(s);
	const orientation = useGetResponsiveValue<CarouselOrientation>(o);
	const variant = useGetResponsiveValue<CarouselVariant>(v);

	return { color, colorMode, id, items, scrollAmount, spacing, orientation, variant };
};

export default useCarouselContext;
