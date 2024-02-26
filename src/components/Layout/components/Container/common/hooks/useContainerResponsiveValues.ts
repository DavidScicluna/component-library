import type { Required } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { Undefinable } from '@common/types';

import {
	DEFAULT_CONTAINER_BREAKPOINT,
	DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
	DEFAULT_CONTAINER_IS_FLUID
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
		breakpoint: breakpoint || DEFAULT_CONTAINER_BREAKPOINT,
		isContentCentered: isContentCentered || DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
		isFluid: isFluid || DEFAULT_CONTAINER_IS_FLUID
	};
};

export default useContainerResponsiveValues;
