import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Fade } from '@components/Animation';
import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_POSITION_OVERLAY_BLUR__,
	__DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
	__DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
	__DEFAULT_POSITION_OVERLAY_IS_VISIBLE__,
	__DEFAULT_POSITION_OVERLAY_PLACEMENT__,
	__DEFAULT_POSITION_OVERLAY_RADIUS__
} from './common/constants';
import { usePositionOverlayClasses, usePositionOverlayStyles } from './common/hooks';
import { __KEYS_POSITION_OVERLAY_CLASS__ } from './common/keys';
import type { PositionOverlayProps, PositionOverlayRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const PositionOverlay = forwardRef(function PositionOverlay<Element extends ElementType = PolymorphicDefaultElement>(
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
		isVisible = __DEFAULT_POSITION_OVERLAY_IS_VISIBLE__,
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
				<Fade w='100%' h='100%' in={isVisible}>
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
