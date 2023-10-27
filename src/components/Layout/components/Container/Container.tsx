import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from './common/constants';
import { useContainerClasses } from './common/hooks';
import { __KEYS_CONTAINER_CLASS__ } from './common/keys';
import type { ContainerProps, ContainerRef } from './common/types';

const Container = forwardRef(function Container<Element extends ElementType = PolymorphicDefaultElement>(
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

	const isContentCentered = useGetResponsiveValue<boolean>(centered);
	const isFluid = useGetResponsiveValue<boolean>(fluid);

	const classes = useContainerClasses<Element>({ breakpoint, isContentCentered, isFluid });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CONTAINER_CLASS__, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

Container.displayName = 'Container';

export default Container;
