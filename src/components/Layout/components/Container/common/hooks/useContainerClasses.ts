import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import {
	DEFAULT_CONTAINER_BREAKPOINT,
	DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
	DEFAULT_CONTAINER_IS_FLUID
} from '../constants';
import type { ContainerUniqueProps } from '../types';

import useContainerResponsiveValues from './useContainerResponsiveValues';

type UseContainerClassesProps = Pick<ContainerUniqueProps, 'breakpoint' | 'isContentCentered' | 'isFluid'>;
type UseContainerClassesReturn = ClassName;

const useContainerClasses = (props: UseContainerClassesProps): UseContainerClassesReturn => {
	const { breakpoint: breakpointProp, isContentCentered: isContentCenteredProp, isFluid: isFluidProp } = props;

	const {
		breakpoint = DEFAULT_CONTAINER_BREAKPOINT,
		isContentCentered = DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
		isFluid = DEFAULT_CONTAINER_IS_FLUID
	} = useContainerResponsiveValues({
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
