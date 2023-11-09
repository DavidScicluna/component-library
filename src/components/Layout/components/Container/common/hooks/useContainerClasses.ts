import type { ElementType } from 'react';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from '../constants';
import type { ContainerBreakpoint, ContainerProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseContainerClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	ContainerProps<Element>,
	'breakpoint' | 'isContentCentered' | 'isFluid'
>;
type UseContainerClassesReturn = ClassName;

const useContainerClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseContainerClassesProps<Element>
): UseContainerClassesReturn => {
	const {
		breakpoint = __DEFAULT_CONTAINER_BREAKPOINT__,
		isContentCentered = __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
		isFluid = __DEFAULT_CONTAINER_IS_FLUID__
	} = props;

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
