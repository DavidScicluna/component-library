import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing, Undefinable } from '@common/types';

import type { CenterNonResponsiveValueProps, CenterResponsiveValueProps } from '../types';

type UseCenterResponsiveValuesProps = Partial<CenterResponsiveValueProps>;
type UseCenterResponsiveValuesReturn = CenterNonResponsiveValueProps;

const useCenterResponsiveValues = (props: UseCenterResponsiveValuesProps): UseCenterResponsiveValuesReturn => {
	const { spacing: spacingProp } = props;

	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);

	return { spacing };
};

export default useCenterResponsiveValues;
