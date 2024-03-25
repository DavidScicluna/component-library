import { useGetResponsiveValue } from '@common/hooks';

import type { SpaceNonResponsiveValueProps, SpaceResponsiveValueProps } from '../types';

type UseSpaceResponsiveValuesProps = Partial<SpaceResponsiveValueProps>;
type UseSpaceResponsiveValuesReturn = SpaceNonResponsiveValueProps;

const useSpaceResponsiveValues = (props: UseSpaceResponsiveValuesProps): UseSpaceResponsiveValuesReturn => {
	const { width: widthProp, height: heightProp } = props;

	const width = useGetResponsiveValue<SpaceNonResponsiveValueProps['width']>(widthProp);
	const height = useGetResponsiveValue<SpaceNonResponsiveValueProps['height']>(heightProp);

	return { width, height };
};

export default useSpaceResponsiveValues;
