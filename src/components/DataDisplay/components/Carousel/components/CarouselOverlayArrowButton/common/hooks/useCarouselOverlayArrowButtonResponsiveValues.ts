import { useGetResponsiveValue } from '@common/hooks';
import type { Undefinable } from '@common/types';

import type { CarouselArrowDirection } from '@components/DataDisplay/components/Carousel/common/types';

import { __DEFAULT_CAROUSEL_OVERLAY_ARROW_BUTTON_IS_VISIBLE__ } from '../constants';
import type { CarouselOverlayArrowButtonElement, CarouselOverlayArrowButtonProps } from '../types';

type UseCarouselOverlayArrowButtonResponsiveValuesProps<Element extends CarouselOverlayArrowButtonElement> = Partial<
	Pick<CarouselOverlayArrowButtonProps<Element>, 'direction' | 'isVisible'>
>;

const useCarouselOverlayArrowButtonResponsiveValues = <Element extends CarouselOverlayArrowButtonElement>(
	props: UseCarouselOverlayArrowButtonResponsiveValuesProps<Element>
) => {
	const {
		direction: directionProp,
		isVisible: isVisibleProp = __DEFAULT_CAROUSEL_OVERLAY_ARROW_BUTTON_IS_VISIBLE__
	} = props;

	const direction = useGetResponsiveValue<Undefinable<CarouselArrowDirection>>(directionProp);
	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	return { direction, isVisible };
};

export default useCarouselOverlayArrowButtonResponsiveValues;
