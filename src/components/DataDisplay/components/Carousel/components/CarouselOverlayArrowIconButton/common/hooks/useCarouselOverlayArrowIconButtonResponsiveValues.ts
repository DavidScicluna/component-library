import { useGetResponsiveValue } from '@common/hooks';
import type { Undefinable } from '@common/types';

import type { CarouselArrowDirection } from '@components/DataDisplay/components/Carousel/common/types';

import { DEFAULT_CAROUSEL_OVERLAY_ARROW_ICON_BUTTON_IS_VISIBLE } from '../constants';
import type { CarouselOverlayArrowIconButtonElement, CarouselOverlayArrowIconButtonProps } from '../types';

type UseCarouselOverlayArrowIconButtonResponsiveValuesProps<Element extends CarouselOverlayArrowIconButtonElement> =
	Partial<Pick<CarouselOverlayArrowIconButtonProps<Element>, 'direction' | 'isVisible'>>;

const useCarouselOverlayArrowIconButtonResponsiveValues = <Element extends CarouselOverlayArrowIconButtonElement>(
	props: UseCarouselOverlayArrowIconButtonResponsiveValuesProps<Element>
) => {
	const {
		direction: directionProp,
		isVisible: isVisibleProp = DEFAULT_CAROUSEL_OVERLAY_ARROW_ICON_BUTTON_IS_VISIBLE
	} = props;

	const direction = useGetResponsiveValue<Undefinable<CarouselArrowDirection>>(directionProp);
	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	return { direction, isVisible };
};

export default useCarouselOverlayArrowIconButtonResponsiveValues;
