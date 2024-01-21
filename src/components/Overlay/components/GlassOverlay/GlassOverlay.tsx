import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';
import type { GridProps } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
	__DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_GLASS_OVERLAY_RADIUS__
} from './common/constants';
import { useGlassOverlayClasses, useGlassOverlayResponsiveValues, useGlassOverlayStyles } from './common/hooks';
import { __KEYS_GLASS_OVERLAY_CLASS__ } from './common/keys';
import type { GlassOverlayProps, GlassOverlayRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const GlassOverlay = forwardRef(function GlassOverlay<Element extends PolymorphicElementType>(
	props: GlassOverlayProps<Element>,
	ref: GlassOverlayRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		backdropAmount: backdropAmountProp = __DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
		blur: blurProp = __DEFAULT_GLASS_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_GLASS_OVERLAY_RADIUS__,
		hasBackground: hasBackgroundProp = __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
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
			className={classNames(__KEYS_GLASS_OVERLAY_CLASS__, classes.container, { [className]: !!className })}
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
