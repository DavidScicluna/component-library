import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { useGetResponsiveValue } from '../../../common/hooks';
import Box from '../Box';

import { ContainerProps, ContainerRef, ContainerSize } from './common/types';

const Container = forwardRef(function Container<Element extends ElementType>(
	props: ContainerProps<Element>,
	ref: ContainerRef<Element>
): ReactElement {
	const { children, className = '', centerContent = true, isFluid = false, size: s = '2xl', ...rest } = props;

	const size = useGetResponsiveValue<ContainerSize>(s);

	return (
		<Box
			{...(rest as ContainerProps<Element>)}
			ref={ref}
			className={classNames('container', {
				'w-full': isFluid,
				[`max-w-screen-${size}`]: !isFluid,
				'mx-auto': centerContent,
				[className]: !!className
			})}
		>
			{children}
		</Box>
	);
});

export default Container;
