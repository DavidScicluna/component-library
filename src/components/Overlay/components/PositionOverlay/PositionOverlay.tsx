import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Fade } from '@components/Animation';
import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_POSITION_OVERLAY_BLUR__,
	__DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
	__DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
	__DEFAULT_POSITION_OVERLAY_IS_OVERLAY_VISIBLE__,
	__DEFAULT_POSITION_OVERLAY_PLACEMENT__,
	__DEFAULT_POSITION_OVERLAY_RADIUS__
} from './common/constants';
import { usePositionOverlayClasses, usePositionOverlayStyles } from './common/hooks';
import { __KEYS_POSITION_OVERLAY_CLASS__ } from './common/keys';
import type { PositionOverlayProps, PositionOverlayRef } from './common/types';

const PositionOverlay = forwardRef(function PositionOverlay<Element extends ElementType>(
	props: PositionOverlayProps<Element>,
	ref: PositionOverlayRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderOverlay,
		color,
		colorMode,
		backdropAmount = __DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
		blur = __DEFAULT_POSITION_OVERLAY_BLUR__,
		blurType = __DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
		placement = __DEFAULT_POSITION_OVERLAY_PLACEMENT__,
		radius = __DEFAULT_POSITION_OVERLAY_RADIUS__,
		isOverlayVisible = __DEFAULT_POSITION_OVERLAY_IS_OVERLAY_VISIBLE__,
		hasGlass = __DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
		hasBackground = __DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
		...rest
	} = props;

	const classes = usePositionOverlayClasses<Element>({ blur, blurType, radius, hasGlass });
	const styles = usePositionOverlayStyles<Element>({ color, colorMode, backdropAmount, placement, hasBackground });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_POSITION_OVERLAY_CLASS__, classes.container, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				<Fade w='100%' h='100%' in={isOverlayVisible}>
					<Box className={classes.overlay} w='100%' h='100%' sx={styles.overlay}>
						<Box sx={styles.position}>{renderOverlay()}</Box>
					</Box>
				</Fade>
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

PositionOverlay.displayName = 'PositionOverlay';

export default PositionOverlay;
