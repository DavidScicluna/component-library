import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from '../constants';
import type { ContainerBreakpoint, ContainerProps } from '../types';

import useContainerResponsiveValues from './useContainerResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseContainerClassesProps = Pick<ContainerProps, 'breakpoint' | 'isContentCentered' | 'isFluid'>;
type UseContainerClassesReturn = ClassName;

const useContainerClasses = (props: UseContainerClassesProps): UseContainerClassesReturn => {
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

	const breakpointClassName = useGetClass<ContainerBreakpoint>(breakpoint, ['layout', 'container']);

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
