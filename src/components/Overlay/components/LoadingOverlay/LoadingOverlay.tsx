import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Fade } from '@components/Animation';
import { Center, Grid, GridItem } from '@components/Layout';

import { BackdropOverlay } from '../BackdropOverlay';
import { Glass } from '../Glass';

import {
	__DEFAULT_LOADING_OVERLAY_HAS_BACKDROP__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_IS_LOADING__
} from './common/constants';
import type { LoadingOverlayProps, LoadingOverlayRef } from './common/types';

const LoadingOverlay = forwardRef(function LoadingOverlay<Element extends ElementType>(
	props: LoadingOverlayProps<Element>,
	ref: LoadingOverlayRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		blur,
		renderSpinner,
		isLoading = __DEFAULT_LOADING_OVERLAY_IS_LOADING__,
		hasGlass = __DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
		hasBackdrop = __DEFAULT_LOADING_OVERLAY_HAS_BACKDROP__,
		...rest
	} = props;

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-glass`, { [className]: !!className })}
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
					{hasGlass || !hasBackdrop ? (
						<Center w='100%' h='100%'>
							{renderSpinner()}
						</Center>
					) : (
						<BackdropOverlay color={color} colorMode={colorMode} w='100%' h='100%'>
							<Center w='100%' h='100%'>
								{renderSpinner()}
							</Center>
						</BackdropOverlay>
					)}
				</Fade>
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				<Glass
					color={color}
					colorMode={colorMode}
					w='100%'
					h='100%'
					blur={isLoading && hasGlass ? blur : 'none'}
					hasBackground={hasBackdrop}
				>
					<Center w='100%' h='100%'>
						{children}
					</Center>
				</Glass>
			</GridItem>
		</Grid>
	);
});

export default LoadingOverlay;
