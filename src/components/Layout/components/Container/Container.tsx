import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from './common/constants';
import { useContainerClasses, useContainerResponsiveValues } from './common/hooks';
import { __KEYS_CONTAINER_CLASS__ } from './common/keys';
import type { ContainerProps, ContainerRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Container = forwardRef(function Container<Element extends PolymorphicElementType>(
	props: ContainerProps<Element>,
	ref: ContainerRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		breakpoint: breakpointProp = __DEFAULT_CONTAINER_BREAKPOINT__,
		isContentCentered: isContentCenteredProp = __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
		isFluid: isFluidProp = __DEFAULT_CONTAINER_IS_FLUID__,
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
			className={classNames(__KEYS_CONTAINER_CLASS__, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

// Container.displayName = 'Container';

export default Container;
