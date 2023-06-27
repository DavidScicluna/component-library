import { forwardRef, ReactElement } from 'react';

import { Center, Grid, GridItem } from '@chakra-ui/react';

import { useGetColor, useTheme } from '../../../common/hooks';
import { useProviderContext } from '../../Provider/common/hooks';
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

	const background = useGetColor({ color, colorMode, type: colorMode === 'light' ? 'darkest' : 'lightest' });

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
					<Glass
						width='100%'
						height='100%'
						sx={{ background: hasBackdrop ? background : theme.colors.transparent }}
					>
						{renderSpinner()}
					</Glass>
				) : (
					<Center
						width='100%'
						height='100%'
						sx={{ background: hasBackdrop ? background : theme.colors.transparent }}
					>
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
