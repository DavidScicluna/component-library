import { FC } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import Fade from '../../Transitions/Fade';
import Glass from '../Glass';

import { StateOverlayProps } from './common/types';

const StateOverlay: FC<StateOverlayProps> = (props) => {
	const {
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
		<Grid {...rest} templateColumns='1fr' alignItems='center' justifyContent='center' gap={0}>
			{renderEmpty && (
				<GridItem as={Fade} zIndex={1} rowStart={1} colStart={1} in={state === 'empty'}>
					{hasGlass ? (
						<Glass width='100%' height='100%'>
							{renderEmpty({ state })}
						</Glass>
					) : (
						renderEmpty({ state })
					)}
				</GridItem>
			)}

			{renderError && (
				<GridItem as={Fade} zIndex={1} rowStart={1} colStart={1} in={state === 'error'}>
					{hasGlass ? (
						<Glass width='100%' height='100%'>
							{renderError({ state })}
						</Glass>
					) : (
						renderError({ state })
					)}
				</GridItem>
			)}

			{renderSpinner && (
				<GridItem as={Fade} zIndex={1} rowStart={1} colStart={1} in={state === 'loading'}>
					{hasGlass ? (
						<Glass width='100%' height='100%'>
							{renderSpinner({ state })}
						</Glass>
					) : (
						renderSpinner({ state })
					)}
				</GridItem>
			)}

			<GridItem
				as={Fade}
				zIndex={0}
				gridRowStart={1}
				gridColumnStart={1}
				in={hasContentAlwaysVisible || state === 'default'}
			>
				{renderContent({ state })}
			</GridItem>
		</Grid>
	);
};

export default StateOverlay;
