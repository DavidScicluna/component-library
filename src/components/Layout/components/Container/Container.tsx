import { ElementType, forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { getResponsiveValue } from '@common/utils';

import Box from '@components/Box';

import {
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__,
	__DEFAULT_CONTAINER_SIZE__
} from './common/constants';
import type { ContainerProps, ContainerRef, ContainerSize } from './common/types';

const Container = forwardRef(function Container<Element extends ElementType>(
	props: ContainerProps<Element>,
	ref: ContainerRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		isContentCentered = __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
		isFluid = __DEFAULT_CONTAINER_IS_FLUID__,
		size = __DEFAULT_CONTAINER_SIZE__,
		...rest
	} = props;

	// TODO: Move to classes & replace with useGetClass
	const sizeClassName = useMemo<string>(() => {
		const s = getResponsiveValue<ContainerSize>(size);
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
	}, [size]);

	return (
		<Box
			{...(rest as ContainerProps<Element>)}
			ref={ref}
			className={classNames('container', {
				'mx-auto': isContentCentered,
				'w-full': isFluid,
				[sizeClassName]: !isFluid,
				[className]: !!className
			})}
		>
			{children}
		</Box>
	);
});

export default Container;
