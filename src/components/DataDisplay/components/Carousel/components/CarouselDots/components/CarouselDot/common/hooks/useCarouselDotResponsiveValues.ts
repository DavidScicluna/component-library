import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

// eslint-disable-next-line import-path/parent-depth
import { __DEFAULT_CAROUSEL_DOTS_SIZE__ } from '@components/DataDisplay/components/Carousel';

import type { CarouselDotProps } from '../types';

type UseCarouselDotResponsiveValuesProps = Partial<Pick<CarouselDotProps, 'size'>>;

const useCarouselDotResponsiveValues = (props: UseCarouselDotResponsiveValuesProps) => {
	const { size: sizeProp = __DEFAULT_CAROUSEL_DOTS_SIZE__ } = props;

	const size = useGetResponsiveValue<ThemeSpacing>(sizeProp);

	return { size };
};

export default useCarouselDotResponsiveValues;
