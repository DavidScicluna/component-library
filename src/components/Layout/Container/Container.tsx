import { ElementType, forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import { getResponsiveValue } from '../../../common/utils';
import Box from '../Box';

import {
	__DEFAULT_CONTAINER_CENTER_CONTENT__,
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
		className = '',
		centerContent = __DEFAULT_CONTAINER_CENTER_CONTENT__,
		isFluid = __DEFAULT_CONTAINER_IS_FLUID__,
		size = __DEFAULT_CONTAINER_SIZE__,
		...rest
	} = props;

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
				'mx-auto': centerContent,
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
