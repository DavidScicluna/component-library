import { useGetResponsiveValue } from '@common/hooks';
import type { Undefinable } from '@common/types';

import type { CarouselArrowDirection } from '@components/DataDisplay/components/Carousel/common/types';

import { __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_HAS_TOOLTIP__ } from '../constants';
import type { CarouselArrowIconButtonElement, CarouselArrowIconButtonProps } from '../types';

type UseCarouselArrowIconButtonResponsiveValuesProps<Element extends CarouselArrowIconButtonElement> = Partial<
	Pick<CarouselArrowIconButtonProps<Element>, 'direction' | 'hasTooltip' | 'label'>
>;

const useCarouselArrowIconButtonResponsiveValues = <Element extends CarouselArrowIconButtonElement>(
	props: UseCarouselArrowIconButtonResponsiveValuesProps<Element>
) => {
	const {
		direction: directionProp,
		hasTooltip: hasTooltipProp = __DEFAULT_CAROUSEL_ARROW_ICON_BUTTON_HAS_TOOLTIP__,
		label: labelProp
	} = props;

	const direction = useGetResponsiveValue<Undefinable<CarouselArrowDirection>>(directionProp);
	const hasTooltip = useGetResponsiveValue<boolean>(hasTooltipProp);
	const label = useGetResponsiveValue<Undefinable<string>>(labelProp);

	return { direction, hasTooltip, label };
};

export default useCarouselArrowIconButtonResponsiveValues;
