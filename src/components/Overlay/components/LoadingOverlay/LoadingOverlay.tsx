import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { GridProps } from '@components/Layout';
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
import { useLoadingOverlayClasses, useLoadingOverlayResponsiveValues, useLoadingOverlayStyles } from './common/hooks';
import { __KEYS_LOADING_OVERLAY_CLASS__ } from './common/keys';
import type { LoadingOverlayProps, LoadingOverlayRef } from './common/types';

const LoadingOverlay = forwardRef(function LoadingOverlay<Element extends PolymorphicElementType>(
	props: LoadingOverlayProps<Element>,
	ref: LoadingOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderSpinner,
		color,
		colorMode,
		backdropAmount: backdropAmountProp = __DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
		blur: blurProp = __DEFAULT_LOADING_OVERLAY_BLUR__,
		blurType: blurTypeProp = __DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
		radius: radiusProp = __DEFAULT_LOADING_OVERLAY_RADIUS__,
		isLoading: isLoadingProp = __DEFAULT_LOADING_OVERLAY_IS_LOADING__,
		hasGlass: hasGlassProp = __DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
		hasBackground: hasBackgroundProp = __DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__,
		...rest
	} = props;

	const { backdropAmount, blur, blurType, radius, isLoading, hasGlass, hasBackground } =
		useLoadingOverlayResponsiveValues<Element>({
			backdropAmount: backdropAmountProp,
			blur: blurProp,
			blurType: blurTypeProp,
			radius: radiusProp,
			isLoading: isLoadingProp,
			hasGlass: hasGlassProp,
			hasBackground: hasBackgroundProp
		});

	const classes = useLoadingOverlayClasses<Element>({ blur, blurType, radius, hasGlass });
	const styles = useLoadingOverlayStyles<Element>({ color, colorMode, backdropAmount, hasBackground });

	return (
		<Grid
			{...(rest as GridProps<Element>)}
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
				<Transition w='100%' h='100%' transition='fade' in={isLoading} unmountOnExit={false}>
					<Center className={classes.overlay} w='100%' h='100%' sx={styles}>
						{renderSpinner()}
					</Center>
				</Transition>
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

// LoadingOverlay.displayName = 'LoadingOverlay';

export default LoadingOverlay;
