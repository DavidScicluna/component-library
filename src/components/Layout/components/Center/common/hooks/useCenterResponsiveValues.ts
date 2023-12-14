import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { __DEFAULT_CENTER_SPACING__ } from '../constants';
import type { CenterProps } from '../types';

type UseCenterResponsiveValuesProps = Partial<Pick<CenterProps, 'spacing'>>;

const useCenterResponsiveValues = (props: UseCenterResponsiveValuesProps) => {
	const { spacing: spacingProp = __DEFAULT_CENTER_SPACING__ } = props;

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return { spacing };
};

export default useCenterResponsiveValues;
