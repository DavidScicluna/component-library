import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	DEFAULT_CONTAINER_BREAKPOINT,
	DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
	DEFAULT_CONTAINER_IS_FLUID
} from './common/constants';
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
		breakpoint: breakpointProp = DEFAULT_CONTAINER_BREAKPOINT,
		isContentCentered: isContentCenteredProp = DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
		isFluid: isFluidProp = DEFAULT_CONTAINER_IS_FLUID,
		...rest
	} = props;

	const { breakpoint, isContentCentered, isFluid } = useContainerResponsiveValues({
		breakpoint: breakpointProp,
		isContentCentered: isContentCenteredProp,
		isFluid: isFluidProp
	});

	const classes = useContainerClasses<Element>({ breakpoint, isContentCentered, isFluid });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(KEYS_CONTAINER_CLASS, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

// Container.displayName = 'Container';

export default Container;
