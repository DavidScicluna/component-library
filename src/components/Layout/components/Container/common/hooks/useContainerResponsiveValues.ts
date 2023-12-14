import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from '../constants';
import type { ContainerBreakpoint, ContainerProps } from '../types';

type UseContainerResponsiveValuesProps = Partial<Pick<ContainerProps, 'breakpoint' | 'isContentCentered' | 'isFluid'>>;

const useContainerResponsiveValues = (props: UseContainerResponsiveValuesProps) => {
	const {
		breakpoint: breakpointProp = __DEFAULT_CONTAINER_BREAKPOINT__,
		isContentCentered: isContentCenteredProp = __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
		isFluid: isFluidProp = __DEFAULT_CONTAINER_IS_FLUID__
	} = props;

	const breakpoint = useGetResponsiveValue<ContainerBreakpoint>(breakpointProp);

	const isContentCentered = useGetResponsiveValue<boolean>(isContentCenteredProp);
	const isFluid = useGetResponsiveValue<boolean>(isFluidProp);

	return { breakpoint, isContentCentered, isFluid };
};

export default useContainerResponsiveValues;
