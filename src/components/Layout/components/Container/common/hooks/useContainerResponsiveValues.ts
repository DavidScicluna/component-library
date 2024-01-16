import type { DeepRequired } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from '../constants';
import type { ContainerBreakpoint, ContainerOtherProps, ContainerProps } from '../types';

type PickedContainerProps = 'breakpoint' | 'isContentCentered' | 'isFluid';

type UseContainerResponsiveValuesProps<Element extends PolymorphicElementType = PolymorphicDefaultElement> = Partial<
	Pick<ContainerProps<Element>, PickedContainerProps>
>;
type UseContainerResponsiveValuesReturn = DeepRequired<Pick<ContainerOtherProps, PickedContainerProps>>;

const useContainerResponsiveValues = <Element extends PolymorphicElementType = PolymorphicDefaultElement>(
	props: UseContainerResponsiveValuesProps<Element>
): UseContainerResponsiveValuesReturn => {
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
