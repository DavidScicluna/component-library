import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import { __DEFAULT_SKELETON_IS_ANIMATED__, __DEFAULT_SKELETON_IS_LOADED__ } from '../constants';
import type { SkeletonProps } from '../types';

type UseSkeletonResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<SkeletonProps<Element>, 'isAnimated' | 'isLoaded' | 'radius'>
>;

const useSkeletonResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseSkeletonResponsiveValuesProps<Element>
) => {
	const {
		isAnimated: isAnimatedProp = __DEFAULT_SKELETON_IS_ANIMATED__,
		isLoaded: isLoadedProp = __DEFAULT_SKELETON_IS_LOADED__,
		radius: radiusProp = __DEFAULT_RADIUS__
	} = props;

	const isAnimated = useGetResponsiveValue<boolean>(isAnimatedProp);
	const isLoaded = useGetResponsiveValue<boolean>(isLoadedProp);

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	return { isAnimated, isLoaded, radius };
};

export default useSkeletonResponsiveValues;
