import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
	__DEFAULT_BACKDROP_OVERLAY_RADIUS__
} from './common/constants';
import { useBackdropOverlayClasses, useBackdropOverlayStyles } from './common/hooks';
import type { BackdropOverlayProps, BackdropOverlayRef } from './common/types';

const BackdropOverlay = forwardRef(function BackdropOverlay<Element extends ElementType>(
	props: BackdropOverlayProps<Element>,
	ref: BackdropOverlayRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		amount = __DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
		blur = __DEFAULT_BACKDROP_OVERLAY_BLUR__,
		blurType = __DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
		radius = __DEFAULT_BACKDROP_OVERLAY_RADIUS__,
		...rest
	} = props;

	const classes = useBackdropOverlayClasses<Element>({ blur, blurType, radius });
	const styles = useBackdropOverlayStyles<Element>({ color, colorMode, amount });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-backdrop-overlay`, classes.container, {
				[className]: !!className
			})}
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

export default BackdropOverlay;
