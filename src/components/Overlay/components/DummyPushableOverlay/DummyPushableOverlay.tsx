import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX, DEFAULT_RADIUS } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { GridProps } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED,
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED,
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT
} from './common/constants';
import {
	useDummyPushableOverlayClasses,
	useDummyPushableOverlayResponsiveValues,
	useDummyPushableOverlayStyles
} from './common/hooks';
import { KEY_DUMMY_PUSHABLE_OVERLAY_CLASS } from './common/keys';
import type { DummyPushableOverlayProps, DummyPushableOverlayRef } from './common/types';

const DummyPushableOverlay = forwardRef(function DummyPushableOverlay<Element extends PolymorphicElementType>(
	props: DummyPushableOverlayProps<Element>,
	ref: DummyPushableOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED,
		isOutlined: isOutlinedProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED,
		radius: radiusProp = DEFAULT_RADIUS,
		variant: variantProp = DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT,
		sx = DEFAULT_POLYMORPHIC_SX,
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
			className={classNames(KEY_DUMMY_PUSHABLE_OVERLAY_CLASS, classes, { [className]: !!className })}
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
