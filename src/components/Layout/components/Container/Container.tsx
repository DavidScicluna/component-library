import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

import { useContainerClasses, useContainerResponsiveValues } from './common/hooks';
import { KEYS_CONTAINER_CLASS } from './common/keys';
import type { ContainerProps, ContainerRef } from './common/types';

const Container = forwardRef(function Container<Element extends PolymorphicElementType>(
	props: ContainerProps<Element>,
	ref: ContainerRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		breakpoint: breakpointProp,
		isContentCentered: isContentCenteredProp,
		isFluid: isFluidProp,
		...rest
	} = props;

	const { breakpoint, isContentCentered, isFluid } = useContainerResponsiveValues({
		breakpoint: breakpointProp,
		isContentCentered: isContentCenteredProp,
		isFluid: isFluidProp
	});

	const classes = useContainerClasses({ breakpoint, isContentCentered, isFluid });

	return (
		<Box {...rest} ref={ref} className={classNames(KEYS_CONTAINER_CLASS, classes, { [className]: !!className })}>
			{children}
		</Box>
	);
});

// Container.displayName = 'Container';

export default Container;
