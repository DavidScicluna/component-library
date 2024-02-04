import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeSpacing } from '@common/types';

import { __DEFAULT_CAROUSEL_DOTS_SIZE__ } from '../constants';
import type { CarouselDotsProps } from '../types';

type UseCarouselDotsResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<CarouselDotsProps<Element>, 'size' | 'spacing'>
>;

const useCarouselDotsResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseCarouselDotsResponsiveValuesProps<Element>
) => {
	const { size: sizeProp = __DEFAULT_CAROUSEL_DOTS_SIZE__, spacing: spacingProp = __DEFAULT_SPACING__ } = props;

	const size = useGetResponsiveValue<ThemeSpacing>(sizeProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { size, spacing };
};

export default useCarouselDotsResponsiveValues;
