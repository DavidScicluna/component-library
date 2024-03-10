import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeAspectRatio, Undefinable } from '@common/types';

import type { AspectRatioNonResponsiveValueProps, AspectRatioResponsiveValueProps } from '../types';

type UseAspectRatioResponsiveValuesProps = Partial<AspectRatioResponsiveValueProps>;
type UseCenterResponsiveValuesReturn = AspectRatioNonResponsiveValueProps;

const useAspectRatioResponsiveValues = (
	props: UseAspectRatioResponsiveValuesProps
): UseCenterResponsiveValuesReturn => {
	const { ratio: ratioProp } = props;

	const ratio = useGetResponsiveValue<Undefinable<ThemeAspectRatio>>(ratioProp);

	return { ratio };
};

export default useAspectRatioResponsiveValues;
