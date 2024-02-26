import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX, DEFAULT_RADIUS } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { GridProps } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
	DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
	DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
	DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED,
	DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED,
	DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
	DEFAULT_PUSHABLE_OVERLAY_VARIANT
} from './common/constants';
import {
	usePushableOverlayClasses,
	usePushableOverlayResponsiveValues,
	usePushableOverlayStyles
} from './common/hooks';
import { KEYS_PUSHABLE_OVERLAY_CLASS } from './common/keys';
import type { PushableOverlayProps, PushableOverlayRef } from './common/types';

// TODO: Add gradient prop that will replaced colors with gradient from, middle & to colors
const PushableOverlay = forwardRef(function PushableOverlay<Element extends PolymorphicElementType>(
	props: PushableOverlayProps<Element>,
	ref: PushableOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		isActive: isActiveProp = DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
		isDisabled: isDisabledProp = DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
		isFixed: isFixedProp = DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
		isFocused: isFocusedProp = DEFAULT_PUSHABLE_OVERLAY_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED,
		isPushable: isPushableProp = DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
		radius: radiusProp = DEFAULT_RADIUS,
		variant: variantProp = DEFAULT_PUSHABLE_OVERLAY_VARIANT,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const { isActive, isDisabled, isFixed, isFocused, isOutlined, isPushable, radius, variant } =
		usePushableOverlayResponsiveValues<Element>({
			isActive: isActiveProp,
			isDisabled: isDisabledProp,
			isFixed: isFixedProp,
			isFocused: isFocusedProp,
			isOutlined: isOutlinedProp,
			isPushable: isPushableProp,
			radius: radiusProp,
			variant: variantProp
		});

	const classes = usePushableOverlayClasses<Element>({
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
	const styles = usePushableOverlayStyles<Element>({
		color,
		colorMode,
		isActive,
		isDisabled,
		isFixed,
		isPushable,
		variant
	});

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(KEYS_PUSHABLE_OVERLAY_CLASS, classes, { [className]: !!className })}
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

// PushableOverlay.displayName = 'PushableOverlay';

export default PushableOverlay;
