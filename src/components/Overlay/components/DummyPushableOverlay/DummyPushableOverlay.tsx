import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__, __DEFAULT_RADIUS__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { GridProps } from '@components/Layout';
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

const DummyPushableOverlay = forwardRef(function DummyPushableOverlay<Element extends PolymorphicElementType>(
	props: DummyPushableOverlayProps<Element>,
	ref: DummyPushableOverlayRef<Element>
): JSX.Element {
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

	const { isAnimated, isOutlined, radius, variant } = useDummyPushableOverlayResponsiveValues<Element>({
		isAnimated: isAnimatedProp,
		isOutlined: isOutlinedProp,
		radius: radiusProp,
		variant: variantProp
	});

	const classes = useDummyPushableOverlayClasses<Element>({ colorMode, isAnimated, isOutlined, radius, variant });
	const styles = useDummyPushableOverlayStyles<Element>({ color, colorMode, variant });

	return (
		<Grid
			{...(rest as GridProps<Element>)}
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

// DummyPushableOverlay.displayName = 'DummyPushableOverlay';

export default DummyPushableOverlay;
