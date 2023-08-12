import type { ElementType } from 'react';

import classNames from 'classnames';

import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from '../constants';
import type { ContainerBreakpoint, ContainerProps } from '../types';

type UseGetContainerClassesProps<Element extends ElementType> = Pick<
	ContainerProps<Element>,
	'breakpoint' | 'isContentCentered' | 'isFluid'
>;
type UseGetContainerClassesReturn = ClassName;

const useGetContainerClasses = <Element extends ElementType>(
	props: UseGetContainerClassesProps<Element>
): UseGetContainerClassesReturn => {
	const {
		breakpoint = __DEFAULT_CONTAINER_BREAKPOINT__,
		isContentCentered = __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
		isFluid = __DEFAULT_CONTAINER_IS_FLUID__
	} = props;

	const breakpointClassName = useGetClass<ContainerBreakpoint>(breakpoint, ['layout', 'maxWidthContainer']);

	return classNames('container', {
		'mx-auto': isContentCentered,
		'w-full': isFluid,
		[breakpointClassName]: !isFluid
	});
};

export default useGetContainerClasses;
