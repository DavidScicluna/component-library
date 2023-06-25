import { forwardRef, ReactElement } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import Fade from '../../Transitions/Fade';
import Glass from '../Glass';

import { StateOverlayProps, StateOverlayRef } from './common/types';

const StateOverlay = forwardRef<StateOverlayRef, StateOverlayProps>(function StateOverlay(props, ref): ReactElement {
	const {
		renderSuccess,
		renderEmpty,
		renderError,
		renderSpinner,
		renderContent,
		hasGlass = false,
		hasContentAlwaysVisible = false,
		state = 'default',
		...rest
	} = props;

	return (
		<Grid
			{...rest}
			ref={ref}
			templateColumns='1fr'
			templateRows='1fr'
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			gap={0}
		>
			{renderSuccess ? (
				<GridItem as={Fade} zIndex={1} rowStart={1} colStart={1} in={state === 'success'}>
					{hasGlass ? (
						<Glass width='100%' height='100%'>
							{renderSuccess({ state })}
						</Glass>
					) : (
						renderSuccess({ state })
					)}
				</GridItem>
			) : null}

			{renderEmpty ? (
				<GridItem as={Fade} zIndex={1} rowStart={1} colStart={1} in={state === 'empty'}>
					{hasGlass ? (
						<Glass width='100%' height='100%'>
							{renderEmpty({ state })}
						</Glass>
					) : (
						renderEmpty({ state })
					)}
				</GridItem>
			) : null}

			{renderError ? (
				<GridItem as={Fade} zIndex={1} rowStart={1} colStart={1} in={state === 'error'}>
					{hasGlass ? (
						<Glass width='100%' height='100%'>
							{renderError({ state })}
						</Glass>
					) : (
						renderError({ state })
					)}
				</GridItem>
			) : null}

			{renderSpinner ? (
				<GridItem as={Fade} zIndex={1} rowStart={1} colStart={1} in={state === 'loading'}>
					{hasGlass ? (
						<Glass width='100%' height='100%'>
							{renderSpinner({ state })}
						</Glass>
					) : (
						renderSpinner({ state })
					)}
				</GridItem>
			) : null}

			<GridItem as={Fade} rowStart={1} colStart={1} in={hasContentAlwaysVisible || state === 'default'}>
				{renderContent({ state })}
			</GridItem>
		</Grid>
	);
});

export default StateOverlay;
