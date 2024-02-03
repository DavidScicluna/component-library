import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeSpacing } from '@common/types';

import { __DEFAULT_HEADLINE_SPACING__ } from '../constants';
import type { HeadlineProps } from '../types';

type UseHeadlineResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<HeadlineProps<Element>, 'spacing'>
>;

const useHeadlineResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseHeadlineResponsiveValuesProps<Element>
) => {
	const { spacing: spacingProp = __DEFAULT_HEADLINE_SPACING__ } = props;

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { spacing };
};

export default useHeadlineResponsiveValues;
