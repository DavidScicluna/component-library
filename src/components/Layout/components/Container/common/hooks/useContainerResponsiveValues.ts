import type { Required } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { Undefinable } from '@common/types';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from '../constants';
import type { ContainerBreakpoint, ContainerNonResponsiveValueProps, ContainerResponsiveValueProps } from '../types';

type UseContainerResponsiveValuesProps = Partial<ContainerResponsiveValueProps>;
type UseContainerResponsiveValuesReturn = Required<
	ContainerNonResponsiveValueProps,
	'breakpoint' | 'isContentCentered' | 'isFluid'
>;

const useContainerResponsiveValues = (props: UseContainerResponsiveValuesProps): UseContainerResponsiveValuesReturn => {
	const { breakpoint: breakpointProp, isContentCentered: isContentCenteredProp, isFluid: isFluidProp } = props;

	const breakpoint = useGetResponsiveValue<Undefinable<ContainerBreakpoint>>(breakpointProp);

	const isContentCentered = useGetResponsiveValue<Undefinable<boolean>>(isContentCenteredProp);
	const isFluid = useGetResponsiveValue<Undefinable<boolean>>(isFluidProp);

	return {
		breakpoint: breakpoint || __DEFAULT_CONTAINER_BREAKPOINT__,
		isContentCentered: isContentCentered || __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
		isFluid: isFluid || __DEFAULT_CONTAINER_IS_FLUID__
	};
};

export default useContainerResponsiveValues;
