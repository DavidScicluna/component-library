import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
	__DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__
} from './common/constants';
import { useGlassOverlayClasses, useGlassOverlayStyles } from './common/hooks';
import type { GlassOverlayProps, GlassOverlayRef } from './common/types';

const GlassOverlay = forwardRef(function GlassOverlay<Element extends ElementType>(
	props: GlassOverlayProps<Element>,
	ref: GlassOverlayRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		backdropAmount = __DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
		blur = __DEFAULT_GLASS_OVERLAY_BLUR__,
		blurType = __DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
		hasBackground = __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
		...rest
	} = props;

	const classes = useGlassOverlayClasses<Element>({ blur, blurType });
	const styles = useGlassOverlayStyles<Element>({ color, colorMode, backdropAmount, hasBackground });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-glassoverlay`, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				<Box className={classes} w='100%' h='100%' sx={styles} />
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

export default GlassOverlay;
