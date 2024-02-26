import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeSpacing } from '@common/types';

// eslint-disable-next-line import-path/parent-depth
import { DEFAULT_CAROUSEL_DOTS_SIZE } from '@components/DataDisplay/components/Carousel';

import type { CarouselDotProps } from '../types';

type UseCarouselDotResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<CarouselDotProps<Element>, 'size'>
>;

const useCarouselDotResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseCarouselDotResponsiveValuesProps<Element>
) => {
	const { size: sizeProp = DEFAULT_CAROUSEL_DOTS_SIZE } = props;

	const size = useGetResponsiveValue<ThemeSpacing>(sizeProp);

	return { size };
};

export default useCarouselDotResponsiveValues;
