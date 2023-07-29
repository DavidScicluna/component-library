import type { ElementType, ReactElement} from 'react';
import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import { getResponsiveValue } from '@common/utils';

import Box from '@components/Box';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from './common/constants';
import type { ContainerBreakpoint, ContainerProps, ContainerRef } from './common/types';

const Container = forwardRef(function Container<Element extends ElementType>(
	props: ContainerProps<Element>,
	ref: ContainerRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		breakpoint = __DEFAULT_CONTAINER_BREAKPOINT__,
		isContentCentered: centered = __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
		isFluid: fluid = __DEFAULT_CONTAINER_IS_FLUID__,
		...rest
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

	const isContentCentered = useGetResponsiveValue<boolean>(centered);
	const isFluid = useGetResponsiveValue<boolean>(fluid);

	return (
		<Box<Element>
			{...(rest as ContainerProps<Element>)}
			ref={ref}
			className={classNames('container', {
				'mx-auto': isContentCentered,
				'w-full': isFluid,
				[breakpointClassName]: !isFluid,
				[className]: !!className
			})}
		>
			{children}
		</Box>
	);
});

export default Container;
