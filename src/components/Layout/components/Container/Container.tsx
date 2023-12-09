import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from './common/constants';
import { useContainerClasses } from './common/hooks';
import { __KEYS_CONTAINER_CLASS__ } from './common/keys';
import type { ContainerProps, ContainerRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Container: PolymorphicComponentWithRef = forwardRef(function Container<
	Element extends ElementType = PolymorphicDefaultElement
>(props: ContainerProps<Element>, ref: ContainerRef<Element>): ReactElement {
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

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Container<Element> {...props} />;
