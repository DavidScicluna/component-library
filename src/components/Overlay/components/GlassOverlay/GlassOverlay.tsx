import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';
import type { GridProps } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT,
	DEFAULT_GLASS_OVERLAY_BLUR,
	DEFAULT_GLASS_OVERLAY_BLUR_TYPE,
	DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND,
	DEFAULT_GLASS_OVERLAY_RADIUS
} from './common/constants';
import { useGlassOverlayClasses, useGlassOverlayResponsiveValues, useGlassOverlayStyles } from './common/hooks';
import { KEYS_GLASS_OVERLAY_CLASS } from './common/keys';
import type { GlassOverlayProps, GlassOverlayRef } from './common/types';

const GlassOverlay = forwardRef(function GlassOverlay<Element extends PolymorphicElementType>(
	props: GlassOverlayProps<Element>,
	ref: GlassOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		backdropAmount: backdropAmountProp = DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT,
		blur: blurProp = DEFAULT_GLASS_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_GLASS_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_GLASS_OVERLAY_RADIUS,
		hasBackground: hasBackgroundProp = DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND,
		...rest
	} = props;

	const { backdropAmount, blur, blurType, radius, hasBackground } = useGlassOverlayResponsiveValues<Element>({
		backdropAmount: backdropAmountProp,
		blur: blurProp,
		blurType: blurTypeProp,
		radius: radiusProp,
		hasBackground: hasBackgroundProp
	});

	const classes = useGlassOverlayClasses<Element>({ blur, blurType, radius });
	const styles = useGlassOverlayStyles<Element>({ color, colorMode, backdropAmount, hasBackground });

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(KEYS_GLASS_OVERLAY_CLASS, classes.container, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				<Box className={classes.overlay} w='100%' h='100%' sx={styles} />
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

// GlassOverlay.displayName = 'GlassOverlay';

export default GlassOverlay;
