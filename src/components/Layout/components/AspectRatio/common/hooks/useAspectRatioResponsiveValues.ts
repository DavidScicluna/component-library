import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeAspectRatio } from '@common/types';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from '../constants';
import type { AspectRatioProps } from '../types';

type UseAspectRatioResponsiveValuesProps = Partial<Pick<AspectRatioProps, 'ratio'>>;

const useAspectRatioResponsiveValues = (props: UseAspectRatioResponsiveValuesProps) => {
	const { ratio: ratioProp = __DEFAULT_ASPECT_RATIO_RATIO__ } = props;

	const ratio = useGetResponsiveValue<ThemeAspectRatio>(ratioProp);

	return { ratio };
};

export default useAspectRatioResponsiveValues;
