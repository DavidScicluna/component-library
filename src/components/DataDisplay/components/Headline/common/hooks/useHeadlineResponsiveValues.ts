import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeSpacing } from '@common/types';

import { DEFAULT_HEADLINE_SPACING } from '../constants';
import type { HeadlineProps } from '../types';

type UseHeadlineResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<HeadlineProps<Element>, 'spacing'>
>;

const useHeadlineResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseHeadlineResponsiveValuesProps<Element>
) => {
	const { spacing: spacingProp = DEFAULT_HEADLINE_SPACING } = props;

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { spacing };
};

export default useHeadlineResponsiveValues;
