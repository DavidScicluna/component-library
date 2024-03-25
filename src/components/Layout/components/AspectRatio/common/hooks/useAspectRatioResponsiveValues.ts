import { useGetResponsiveValue } from '@common/hooks';

import type { AspectRatioNonResponsiveValueProps, AspectRatioResponsiveValueProps } from '../types';

type UseAspectRatioResponsiveValuesProps = Partial<AspectRatioResponsiveValueProps>;
type UseAspectRatioResponsiveValuesReturn = AspectRatioNonResponsiveValueProps;

const useAspectRatioResponsiveValues = (
	props: UseAspectRatioResponsiveValuesProps
): UseAspectRatioResponsiveValuesReturn => {
	const { ratio: ratioProp } = props;

	const ratio = useGetResponsiveValue<AspectRatioNonResponsiveValueProps['ratio']>(ratioProp);

	return { ratio };
};

export default useAspectRatioResponsiveValues;
