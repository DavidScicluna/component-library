import { DEFAULT_RADIUS } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import { DEFAULT_SKELETON_IS_ANIMATED, DEFAULT_SKELETON_IS_LOADED } from '../constants';
import type { SkeletonProps } from '../types';

type UseSkeletonResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<SkeletonProps<Element>, 'isAnimated' | 'isLoaded' | 'radius'>
>;

const useSkeletonResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseSkeletonResponsiveValuesProps<Element>
) => {
	const {
		isAnimated: isAnimatedProp = DEFAULT_SKELETON_IS_ANIMATED,
		isLoaded: isLoadedProp = DEFAULT_SKELETON_IS_LOADED,
		radius: radiusProp = DEFAULT_RADIUS
	} = props;

	const isAnimated = useGetResponsiveValue<boolean>(isAnimatedProp);
	const isLoaded = useGetResponsiveValue<boolean>(isLoadedProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	return { isAnimated, isLoaded, radius };
};

export default useSkeletonResponsiveValues;
