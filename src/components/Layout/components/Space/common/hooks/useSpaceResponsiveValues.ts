import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing, Undefinable } from '@common/types';

import type { SpaceNonResponsiveValueProps, SpaceResponsiveValueProps } from '../types';

type UseSpaceResponsiveValuesProps = Partial<SpaceResponsiveValueProps>;
type UseSpaceResponsiveValuesReturn = SpaceNonResponsiveValueProps;

const useSpaceResponsiveValues = (props: UseSpaceResponsiveValuesProps): UseSpaceResponsiveValuesReturn => {
	const { width: widthProp, height: heightProp } = props;

	const width = useGetResponsiveValue<Undefinable<ThemeSpacing>>(widthProp);
	const height = useGetResponsiveValue<Undefinable<ThemeSpacing>>(heightProp);

	return { width, height };
};

export default useSpaceResponsiveValues;
