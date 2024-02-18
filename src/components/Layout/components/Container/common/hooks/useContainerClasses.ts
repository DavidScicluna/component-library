import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
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
		breakpoint: breakpointProp = __DEFAULT_CONTAINER_BREAKPOINT__,
		isContentCentered: isContentCenteredProp = __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
		isFluid: isFluidProp = __DEFAULT_CONTAINER_IS_FLUID__
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
