import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_BACKDROP_OVERLAY_AMOUNT,
	DEFAULT_BACKDROP_OVERLAY_BLUR,
	DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE,
	DEFAULT_BACKDROP_OVERLAY_RADIUS
} from './common/constants';
import {
	useBackdropOverlayClasses,
	useBackdropOverlayResponsiveValues,
	useBackdropOverlayStyles
} from './common/hooks';
import { KEYS_BACKDROP_OVERLAY_CLASS } from './common/keys';
import type { BackdropOverlayProps, BackdropOverlayRef } from './common/types';

const BackdropOverlay = forwardRef(function BackdropOverlay<Element extends PolymorphicElementType>(
	props: BackdropOverlayProps<Element>,
	ref: BackdropOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		amount: amountProp = DEFAULT_BACKDROP_OVERLAY_AMOUNT,
		blur: blurProp = DEFAULT_BACKDROP_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_BACKDROP_OVERLAY_RADIUS,
		...rest
	} = props;

	const { amount, blur, blurType, radius } = useBackdropOverlayResponsiveValues<Element>({
		amount: amountProp,
		blur: blurProp,
		blurType: blurTypeProp,
		radius: radiusProp
	});

	const classes = useBackdropOverlayClasses<Element>({ blur, blurType, radius });
	const styles = useBackdropOverlayStyles<Element>({ color, colorMode, amount });

	return (
		<Grid
			{...rest}
			ref={ref}
			className={classNames(KEYS_BACKDROP_OVERLAY_CLASS, classes.container, { [className]: !!className })}
			data-aria-hidden='true'
			aria-hidden='true'
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem columnStart={1} rowStart={1}>
				<Box className={classes.overlay} w='100%' h='100%' sx={styles} />
			</GridItem>

			{children ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					{children}
				</GridItem>
			) : null}
		</Grid>
	);
});

// BackdropOverlay.displayName = 'BackdropOverlay';

export default BackdropOverlay;
