import type { Required } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing, Undefinable } from '@common/types';

import { __DEFAULT_CENTER_SPACING__ } from '../constants';
import type { CenterNonResponsiveValueProps, CenterResponsiveValueProps } from '../types';

type UseCenterResponsiveValuesProps = Partial<CenterResponsiveValueProps>;
type UseCenterResponsiveValuesReturn = Required<CenterNonResponsiveValueProps, 'spacing'>;

const useCenterResponsiveValues = (props: UseCenterResponsiveValuesProps): UseCenterResponsiveValuesReturn => {
	const { spacing: spacingProp } = props;

	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);

	return { spacing: spacing || __DEFAULT_CENTER_SPACING__ };
};

export default useCenterResponsiveValues;
