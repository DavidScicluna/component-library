import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__, __DEFAULT_RADIUS__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__
} from './common/constants';
import {
	usePushableOverlayClasses,
	usePushableOverlayResponsiveValues,
	usePushableOverlayStyles
} from './common/hooks';
import { __KEYS_PUSHABLE_OVERLAY_CLASS__ } from './common/keys';
import type { PushableOverlayProps, PushableOverlayRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

// TODO: Add gradient prop that will replaced colors with gradient from, middle & to colors
const PushableOverlay: PolymorphicComponentWithRef = forwardRef(function PushableOverlay<
	Element extends ElementType = PolymorphicDefaultElement
>(props: PushableOverlayProps<Element>, ref: PushableOverlayRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isActive: isActiveProp = __DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
		isDisabled: isDisabledProp = __DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
		isFixed: isFixedProp = __DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
		isFocused: isFocusedProp = __DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
		isPushable: isPushableProp = __DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		variant: variantProp = __DEFAULT_PUSHABLE_OVERLAY_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const { isActive, isDisabled, isFixed, isFocused, isOutlined, isPushable, radius, variant } =
		usePushableOverlayResponsiveValues({
			isActive: isActiveProp,
			isDisabled: isDisabledProp,
			isFixed: isFixedProp,
			isFocused: isFocusedProp,
			isOutlined: isOutlinedProp,
			isPushable: isPushableProp,
			radius: radiusProp,
			variant: variantProp
		});

	const classes = usePushableOverlayClasses({
		color,
		colorMode,
		isActive,
		isDisabled,
		isFixed,
		isOutlined,
		isPushable,
		radius,
		variant
	});
	const styles = usePushableOverlayStyles({
		color,
		colorMode,
		isActive,
		isDisabled,
		isFixed,
		isPushable,
		variant
	});

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_PUSHABLE_OVERLAY_CLASS__, classes, { [className]: !!className })}
			aria-disabled={isDisabled ? 'true' : 'false'}
			aria-pressed={isFocused || isActive ? 'true' : 'false'}
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

PushableOverlay.displayName = 'PushableOverlay';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <PushableOverlay<Element> {...props} />;
