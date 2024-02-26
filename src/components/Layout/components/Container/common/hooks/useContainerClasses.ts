import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	DEFAULT_CONTAINER_BREAKPOINT,
	DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
	DEFAULT_CONTAINER_IS_FLUID
} from '../constants';
import type { ContainerProps } from '../types';

import useContainerResponsiveValues from './useContainerResponsiveValues';

type UseContainerClassesProps<Element extends PolymorphicElementType> = Pick<
	ContainerProps<Element>,
	'breakpoint' | 'isContentCentered' | 'isFluid'
>;
type UseContainerClassesReturn = ClassName;

const useContainerClasses = <Element extends PolymorphicElementType>(
	props: UseContainerClassesProps<Element>
): UseContainerClassesReturn => {
	const {
		breakpoint: breakpointProp = DEFAULT_CONTAINER_BREAKPOINT,
		isContentCentered: isContentCenteredProp = DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
		isFluid: isFluidProp = DEFAULT_CONTAINER_IS_FLUID
	} = props;

	const { breakpoint, isContentCentered, isFluid } = useContainerResponsiveValues({
		breakpoint: breakpointProp,
		isContentCentered: isContentCenteredProp,
		isFluid: isFluidProp
	});

	const breakpointClassName = useGetClass((classes) => classes.layout.container[breakpoint]);

	return classNames(classes.layout.display.container, classes.layout.display.flex, {
		[classes.flex.align_items.center]: isContentCentered,
		[classes.flex.align_items.stretch]: !isContentCentered,
		[classes.flex.justify_content.center]: isContentCentered,
		[classes.flex.justify_content.stretch]: !isContentCentered,
		[classes.sizing.height.auto]: isFluid,
		[breakpointClassName]: !isFluid
	});
};

export default useContainerClasses;
