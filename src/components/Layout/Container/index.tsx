import { forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import { checkResponsiveValue, getResponsiveValue } from '../../../common/utils';
import Box from '../Box';

import { ContainerProps, ContainerRef, ContainerSize } from './common/types';

const Container = forwardRef<ContainerRef, ContainerProps>(function Container(props, ref): ReactElement {
	const { children, className = '', centerContent = true, isFluid = false, size = '2xl', ...rest } = props;

	const sizeClassName = useMemo(() => {
		const s =
			checkResponsiveValue<ContainerSize>(size) !== 'default'
				? getResponsiveValue<ContainerSize>(size)
				: (size as ContainerSize);
		return `max-w-screen-${s}`;
	}, [size]);

	return (
		<Box
			{...rest}
			ref={ref}
			className={classNames('container', {
				'w-full': isFluid,
				[sizeClassName]: !isFluid,
				'mx-auto': centerContent,
				[className]: !!className
			})}
		>
			{children}
		</Box>
	);
});

export default Container;
