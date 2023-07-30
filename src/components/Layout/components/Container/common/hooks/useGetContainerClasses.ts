import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import type { ClassName } from '@common/types';
import { getResponsiveValue } from '@common/utils';

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

	// TODO: Move to classes & replace with useGetClass
	const breakpointClassName = useMemo<string>(() => {
		const s = getResponsiveValue<ContainerBreakpoint>(breakpoint);
		switch (s) {
			case 'sm':
				return 'max-w-screen-sm';
			case 'md':
				return 'max-w-screen-md';
			case 'lg':
				return 'max-w-screen-lg';
			case 'xl':
				return 'max-w-screen-xl';
			default:
				return 'max-w-screen-2xl';
		}
	}, [breakpoint]);

	return classNames('container', {
		'mx-auto': isContentCentered,
		'w-full': isFluid,
		[breakpointClassName]: !isFluid
	});
};

export default useGetContainerClasses;
