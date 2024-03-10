import { useGetResponsiveValue } from '@common/hooks';
import type { Undefinable } from '@common/types';

import type { ContainerBreakpoint, ContainerNonResponsiveValueProps, ContainerResponsiveValueProps } from '../types';

type UseContainerResponsiveValuesProps = Partial<ContainerResponsiveValueProps>;
type UseContainerResponsiveValuesReturn = ContainerNonResponsiveValueProps;

const useContainerResponsiveValues = (props: UseContainerResponsiveValuesProps): UseContainerResponsiveValuesReturn => {
	const { breakpoint: breakpointProp, isContentCentered: isContentCenteredProp, isFluid: isFluidProp } = props;

	const breakpoint = useGetResponsiveValue<Undefinable<ContainerBreakpoint>>(breakpointProp);

	const isContentCentered = useGetResponsiveValue<Undefinable<boolean>>(isContentCenteredProp);
	const isFluid = useGetResponsiveValue<Undefinable<boolean>>(isFluidProp);

	return { breakpoint, isContentCentered, isFluid };
};

export default useContainerResponsiveValues;
