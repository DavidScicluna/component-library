import type { Required } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeAspectRatio, Undefinable } from '@common/types';

import { DEFAULT_ASPECT_RATIO_RATIO } from '../constants';
import type { AspectRatioNonResponsiveValueProps, AspectRatioResponsiveValueProps } from '../types';

type UseAspectRatioResponsiveValuesProps = Partial<AspectRatioResponsiveValueProps>;
type UseCenterResponsiveValuesReturn = Required<AspectRatioNonResponsiveValueProps, 'ratio'>;

const useAspectRatioResponsiveValues = (
	props: UseAspectRatioResponsiveValuesProps
): UseCenterResponsiveValuesReturn => {
	const { ratio: ratioProp } = props;

	const ratio = useGetResponsiveValue<Undefinable<ThemeAspectRatio>>(ratioProp);

	return { ratio: ratio || DEFAULT_ASPECT_RATIO_RATIO };
};

export default useAspectRatioResponsiveValues;
