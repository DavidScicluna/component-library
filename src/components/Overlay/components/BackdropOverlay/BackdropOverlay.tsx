import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';
import type { GridProps } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
	__DEFAULT_BACKDROP_OVERLAY_RADIUS__
} from './common/constants';
import {
	useBackdropOverlayClasses,
	useBackdropOverlayResponsiveValues,
	useBackdropOverlayStyles
} from './common/hooks';
import { __KEYS_BACKDROP_OVERLAY_CLASS__ } from './common/keys';
import type { BackdropOverlayProps, BackdropOverlayRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const BackdropOverlay = forwardRef(function BackdropOverlay<Element extends PolymorphicElementType>(
	props: BackdropOverlayProps<Element>,
	ref: BackdropOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		amount: amountProp = __DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
		blur: blurProp = __DEFAULT_BACKDROP_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_BACKDROP_OVERLAY_RADIUS__,
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
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_BACKDROP_OVERLAY_CLASS__, classes.container, { [className]: !!className })}
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
