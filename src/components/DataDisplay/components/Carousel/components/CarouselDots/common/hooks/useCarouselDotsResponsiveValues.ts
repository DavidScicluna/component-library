import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeSpacing } from '@common/types';

import { DEFAULT_CAROUSEL_DOTS_SIZE } from '../constants';
import type { CarouselDotsProps } from '../types';

type UseCarouselDotsResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<CarouselDotsProps<Element>, 'size' | 'spacing'>
>;

const useCarouselDotsResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseCarouselDotsResponsiveValuesProps<Element>
) => {
	const { size: sizeProp = DEFAULT_CAROUSEL_DOTS_SIZE, spacing: spacingProp = DEFAULT_SPACING } = props;

	const size = useGetResponsiveValue<ThemeSpacing>(sizeProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { size, spacing };
};

export default useCarouselDotsResponsiveValues;
