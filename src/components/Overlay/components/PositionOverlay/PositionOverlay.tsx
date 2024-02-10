import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
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
import {
	usePositionOverlayClasses,
	usePositionOverlayResponsiveValues,
	usePositionOverlayStyles
} from './common/hooks';
import { __KEYS_POSITION_OVERLAY_CLASS__ } from './common/keys';
import type { PositionOverlayProps, PositionOverlayRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const PositionOverlay = forwardRef(function PositionOverlay<Element extends PolymorphicElementType>(
	props: PositionOverlayProps<Element>,
	ref: PositionOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderOverlay,
		color,
		colorMode,
		backdropAmount: backdropAmountProp = __DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
		blur: blurProp = __DEFAULT_POSITION_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
		placement: placementProp = __DEFAULT_POSITION_OVERLAY_PLACEMENT__,
		radius: radiusProp = __DEFAULT_POSITION_OVERLAY_RADIUS__,
		isVisible: isVisibleProp = __DEFAULT_POSITION_OVERLAY_IS_VISIBLE__,
		hasGlass: hasGlassProp = __DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
		hasBackground: hasBackgroundProp = __DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
		...rest
	} = props;

	const { backdropAmount, blur, blurType, placement, radius, isVisible, hasGlass, hasBackground } =
		usePositionOverlayResponsiveValues<Element>({
			backdropAmount: backdropAmountProp,
			blur: blurProp,
			blurType: blurTypeProp,
			placement: placementProp,
			radius: radiusProp,
			isVisible: isVisibleProp,
			hasGlass: hasGlassProp,
			hasBackground: hasBackgroundProp
		});

	const classes = usePositionOverlayClasses<Element>({ blur, blurType, radius, hasGlass });
	const styles = usePositionOverlayStyles<Element>({ color, colorMode, backdropAmount, placement, hasBackground });

	return (
		<Grid
			{...(rest as PositionOverlayProps<Element>)}
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
				<Transition w='100%' h='100%' transition='fade' in={isVisible}>
					<Box className={classes.overlay} w='100%' h='100%' sx={styles.overlay}>
						<Box sx={styles.position}>{renderOverlay()}</Box>
					</Box>
				</Transition>
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

// PositionOverlay.displayName = 'PositionOverlay';

export default PositionOverlay;
