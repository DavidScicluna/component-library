import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, Undefinable } from '@common/types';

import type { CarouselArrowDirection } from '@components/DataDisplay/components/Carousel/common/types';

import { DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE } from '../constants';
import type { CarouselLinearGradientProps } from '../types';

type UseCarouselLinearGradientResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<CarouselLinearGradientProps<Element>, 'direction' | 'isVisible'>
>;

const useCarouselLinearGradientResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseCarouselLinearGradientResponsiveValuesProps<Element>
) => {
	const { direction: directionProp, isVisible: isVisibleProp = DEFAULT_CAROUSEL_LINEAR_GRADIENT_IS_VISIBLE } = props;

	const direction = useGetResponsiveValue<Undefinable<CarouselArrowDirection>>(directionProp);
	const isVisible = useGetResponsiveValue<boolean>(isVisibleProp);

	return { direction, isVisible };
};

export default useCarouselLinearGradientResponsiveValues;
