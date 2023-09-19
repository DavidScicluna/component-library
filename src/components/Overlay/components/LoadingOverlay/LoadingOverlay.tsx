import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Fade } from '@components/Animation';
import { Center, Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_LOADING_OVERLAY_BLUR__,
	__DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
	__DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_IS_LOADING__,
	__DEFAULT_LOADING_OVERLAY_RADIUS__
} from './common/constants';
import { useLoadingOverlayClasses, useLoadingOverlayStyles } from './common/hooks';
import { __KEYS_LOADING_OVERLAY_CLASS__ } from './common/keys';
import type { LoadingOverlayProps, LoadingOverlayRef } from './common/types';

const LoadingOverlay = forwardRef(function LoadingOverlay<Element extends ElementType>(
	props: LoadingOverlayProps<Element>,
	ref: LoadingOverlayRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderSpinner,
		color,
		colorMode,
		backdropAmount = __DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
		blur = __DEFAULT_LOADING_OVERLAY_BLUR__,
		blurType = __DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
		radius = __DEFAULT_LOADING_OVERLAY_RADIUS__,
		isLoading = __DEFAULT_LOADING_OVERLAY_IS_LOADING__,
		hasGlass = __DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
		hasBackground = __DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__,
		...rest
	} = props;

	const classes = useLoadingOverlayClasses<Element>({ blur, blurType, radius, hasGlass });
	const styles = useLoadingOverlayStyles<Element>({ color, colorMode, backdropAmount, hasBackground });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_LOADING_OVERLAY_CLASS__, classes.container, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				<Fade w='100%' h='100%' in={isLoading} unmountOnExit={false}>
					<Center className={classes.overlay} w='100%' h='100%' sx={styles}>
						{renderSpinner()}
					</Center>
				</Fade>
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

LoadingOverlay.displayName = 'LoadingOverlay';

export default LoadingOverlay;
