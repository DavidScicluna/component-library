import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { GridProps } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT,
	DEFAULT_LOADING_OVERLAY_BLUR,
	DEFAULT_LOADING_OVERLAY_BLUR_TYPE,
	DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND,
	DEFAULT_LOADING_OVERLAY_HAS_GLASS,
	DEFAULT_LOADING_OVERLAY_IS_LOADING,
	DEFAULT_LOADING_OVERLAY_RADIUS
} from './common/constants';
import { useLoadingOverlayClasses, useLoadingOverlayResponsiveValues, useLoadingOverlayStyles } from './common/hooks';
import { KEYS_LOADING_OVERLAY_CLASS } from './common/keys';
import type { LoadingOverlayProps, LoadingOverlayRef } from './common/types';

const LoadingOverlay = forwardRef(function LoadingOverlay<Element extends PolymorphicElementType>(
	props: LoadingOverlayProps<Element>,
	ref: LoadingOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		renderSpinner,
		color,
		colorMode,
		backdropAmount: backdropAmountProp = DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT,
		blur: blurProp = DEFAULT_LOADING_OVERLAY_BLUR,
		blurType: blurTypeProp = DEFAULT_LOADING_OVERLAY_BLUR_TYPE,
		radius: radiusProp = DEFAULT_LOADING_OVERLAY_RADIUS,
		isLoading: isLoadingProp = DEFAULT_LOADING_OVERLAY_IS_LOADING,
		hasGlass: hasGlassProp = DEFAULT_LOADING_OVERLAY_HAS_GLASS,
		hasBackground: hasBackgroundProp = DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND,
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
			className={classNames(KEYS_LOADING_OVERLAY_CLASS, classes.container, { [className]: !!className })}
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
