import { ElementType, forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import { getResponsiveValue } from '../../../common/utils';
import Box from '../Box';

import type { ContainerProps, ContainerRef, ContainerSize } from './common/types';

const Container = forwardRef(function Container<Element extends ElementType>(
	props: ContainerProps<Element>,
	ref: ContainerRef<Element>
): ReactElement {
	const { children, className = '', centerContent = true, isFluid = false, size: s = '2xl', ...rest } = props;

	const size = useMemo<string>(() => {
		const size = getResponsiveValue<ContainerSize>(s);
		switch (size) {
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
	}, [s]);

	return (
		<Box
			{...(rest as ContainerProps<Element>)}
			ref={ref}
			className={classNames('container', {
				'w-full': isFluid,
				[size]: !isFluid,
				'mx-auto': centerContent,
				[className]: !!className
			})}
		>
			{children}
		</Box>
	);
});

export default Container;
