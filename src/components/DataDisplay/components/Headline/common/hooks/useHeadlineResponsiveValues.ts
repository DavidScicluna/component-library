import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { __DEFAULT_HEADLINE_SPACING__ } from '../constants';
import type { HeadlineProps } from '../types';

type UseHeadlineResponsiveValuesProps = Partial<Pick<HeadlineProps, 'spacing'>>;

const useHeadlineResponsiveValues = (props: UseHeadlineResponsiveValuesProps) => {
	const { spacing: spacingProp = __DEFAULT_HEADLINE_SPACING__ } = props;

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { spacing };
};

export default useHeadlineResponsiveValues;
