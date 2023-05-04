import { forwardRef, ReactElement, useMemo } from 'react';

import { Center, Grid, GridItem } from '@chakra-ui/react';

import { transparentize } from 'color2k';

import { useProviderContext, useTheme } from '../../../common/hooks';
import { getColor } from '../../../common/utils/color';
import Fade from '../../Transitions/Fade';
import Glass from '../Glass';

import { LoadingOverlayProps, LoadingOverlayRef } from './common/types';

const LoadingOverlay = forwardRef<LoadingOverlayRef, LoadingOverlayProps>(function LoadingOverlay(
	props,
	ref
): ReactElement {
	const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		renderSpinner,
		isLoading = false,
		hasGlass = false,
		hasBackdrop = false,
		...rest
	} = props;

	const background = useMemo((): string => {
		return hasBackdrop
			? transparentize(
					getColor({
						theme,
						colorMode,
						color,
						type: colorMode === 'light' ? 'darkest' : 'lightest'
					}),
					0.5
			  )
			: (theme.colors.transparent as string);
	}, [hasBackdrop, color, colorMode]);

	return (
		<Grid
			{...rest}
			ref={ref}
			templateColumns='1fr'
			templateRows='1fr'
			alignItems='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			gap={0}
		>
			<GridItem as={Fade} zIndex={1} rowStart={1} colStart={1} in={isLoading}>
				{hasGlass ? (
					<Glass width='100%' height='100%' sx={{ background }}>
						{renderSpinner()}
					</Glass>
				) : (
					<Center width='100%' height='100%' sx={{ background }}>
						{renderSpinner()}
					</Center>
				)}
			</GridItem>
			<GridItem rowStart={1} colStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

export default LoadingOverlay;
