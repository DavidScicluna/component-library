import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__, __DEFAULT_RADIUS__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED__,
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
} from './common/constants';
import {
	useDummyPushableOverlayClasses,
	useDummyPushableOverlayResponsiveValues,
	useDummyPushableOverlayStyles
} from './common/hooks';
import { __KEY_DUMMY_PUSHABLE_OVERLAY_CLASS__ } from './common/keys';
import type { DummyPushableOverlayProps, DummyPushableOverlayRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyPushableOverlay: PolymorphicComponentWithRef = forwardRef(function DummyPushableOverlay<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: DummyPushableOverlayProps<Element>, ref: DummyPushableOverlayRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
		isOutlined: isOutlinedProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		variant: variantProp = __DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const { isAnimated, isOutlined, radius, variant } = useDummyPushableOverlayResponsiveValues({
		isAnimated: isAnimatedProp,
		isOutlined: isOutlinedProp,
		radius: radiusProp,
		variant: variantProp
	});

	const classes = useDummyPushableOverlayClasses({ colorMode, isAnimated, isOutlined, radius });
	const styles = useDummyPushableOverlayStyles({ color, colorMode, variant });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEY_DUMMY_PUSHABLE_OVERLAY_CLASS__, classes, { [className]: !!className })}
			aria-disabled='true'
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
			sx={merge(styles, sx)}
		>
			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

DummyPushableOverlay.displayName = 'DummyPushableOverlay';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <DummyPushableOverlay<Element> {...props} />;
