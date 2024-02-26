import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT,
	DEFAULT_POSITION_OVERLAY_BLUR,
	DEFAULT_POSITION_OVERLAY_BLUR_TYPE,
	DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND,
	DEFAULT_POSITION_OVERLAY_HAS_GLASS,
	DEFAULT_POSITION_OVERLAY_IS_VISIBLE,
	DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT,
	DEFAULT_POSITION_OVERLAY_ITEMS,
	DEFAULT_POSITION_OVERLAY_RADIUS
} from './common/constants';
import {
	usePositionOverlayClasses,
	usePositionOverlayItemResponsiveValues,
	usePositionOverlayItemStyles,
	usePositionOverlayResponsiveValues,
	usePositionOverlayStyles
} from './common/hooks';
import { KEYS_POSITION_OVERLAY_CLASS } from './common/keys';
import type {
	PositionOverlayItem as PositionOverlayItemProps,
	PositionOverlayProps,
	PositionOverlayRef
} from './common/types';

const PositionOverlayItem = (props: PositionOverlayItemProps): JSX.Element => {
	const { renderOverlay, placement: placementProp = DEFAULT_POSITION_OVERLAY_ITEM_PLACEMENT } = props;

	const { placement } = usePositionOverlayItemResponsiveValues({ placement: placementProp });

	const styles = usePositionOverlayItemStyles({ placement });

	return <Box sx={styles}>{renderOverlay()}</Box>;
};

const PositionOverlay = forwardRef(function PositionOverlay<Element extends PolymorphicElementType>(
	props: PositionOverlayProps<Element>,
	ref: PositionOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		overlays = DEFAULT_POSITION_OVERLAY_ITEMS,
		backdropAmount: backdropAmountProp = DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT,
		blur: blurProp = DEFAULT_POSITION_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_POSITION_OVERLAY_BLUR_TYPE,
		// placement: placementProp = DEFAULT_POSITION_OVERLAY_PLACEMENT,
		radius: radiusProp = DEFAULT_POSITION_OVERLAY_RADIUS,
		isVisible: isVisibleProp = DEFAULT_POSITION_OVERLAY_IS_VISIBLE,
		hasGlass: hasGlassProp = DEFAULT_POSITION_OVERLAY_HAS_GLASS,
		hasBackground: hasBackgroundProp = DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND,
		...rest
	} = props;

	const { backdropAmount, blur, blurType, radius, isVisible, hasGlass, hasBackground } =
		usePositionOverlayResponsiveValues<Element>({
			backdropAmount: backdropAmountProp,
			blur: blurProp,
			blurType: blurTypeProp,
			radius: radiusProp,
			isVisible: isVisibleProp,
			hasGlass: hasGlassProp,
			hasBackground: hasBackgroundProp
		});

	const classes = usePositionOverlayClasses<Element>({ blur, blurType, radius, hasGlass });
	const styles = usePositionOverlayStyles<Element>({ color, colorMode, backdropAmount, hasBackground });

	return (
		<Grid
			{...(rest as PositionOverlayProps<Element>)}
			ref={ref}
			className={classNames(KEYS_POSITION_OVERLAY_CLASS, classes.container, { [className]: !!className })}
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
						{overlays.map((overlay, index) => (
							<PositionOverlayItem {...overlay} key={index} />
						))}
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
