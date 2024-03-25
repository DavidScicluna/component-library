import { useGetResponsiveValue } from '@common/hooks';

import type { ContainerNonResponsiveValueProps, ContainerResponsiveValueProps } from '../types';

type UseContainerResponsiveValuesProps = Partial<ContainerResponsiveValueProps>;
type UseContainerResponsiveValuesReturn = ContainerNonResponsiveValueProps;

const useContainerResponsiveValues = (props: UseContainerResponsiveValuesProps): UseContainerResponsiveValuesReturn => {
	const { breakpoint: breakpointProp, isContentCentered: isContentCenteredProp, isFluid: isFluidProp } = props;

	const breakpoint = useGetResponsiveValue<ContainerNonResponsiveValueProps['breakpoint']>(breakpointProp);

	const isContentCentered =
		useGetResponsiveValue<ContainerNonResponsiveValueProps['isContentCentered']>(isContentCenteredProp);
	const isFluid = useGetResponsiveValue<ContainerNonResponsiveValueProps['isFluid']>(isFluidProp);

	return { breakpoint, isContentCentered, isFluid };
};

export default useContainerResponsiveValues;
