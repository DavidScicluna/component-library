import { ReactElement } from 'react';

import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import Divider from '../../../../DataDisplay/Divider';
import { useAccordionsContext } from '../../common/hooks';

import { size as defaultSize } from './common/default/props';
import { QuickTogglesProps } from './common/types';
import AccordionButton from './components/AccordionButton';
import ToggleAllButton from './components/ToggleAllButton';
import ToggleButtons from './components/ToggleButtons';

const QuickToggles = <D,>(props: QuickTogglesProps<D>): ReactElement => {
	const theme = useTheme();

	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const {
		accordions,
		color: defaultColor,
		colorMode,
		isDisabled: defaultIsDisabled,
		spacing: defaultSpacing
	} = useAccordionsContext<D>();

	const {
		color = defaultColor,
		isDisabled = defaultIsDisabled,
		spacing = defaultSpacing,
		size = defaultSize
	} = props;

	return (
		<Grid
			width='100%'
			templateColumns={isMd ? '100%' : 'minmax(0, 1fr) min-content min-content'}
			templateRows={isMd ? 'repeat(3, max-content)' : 'minmax(0, 1fr)'}
			alignItems='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			gap={spacing}
		>
			<GridItem>
				<ToggleButtons size={size} spacing={spacing}>
					{accordions.map((accordion) => (
						<AccordionButton
							{...accordion}
							key={accordion.id}
							color={color}
							isDisabled={isDisabled}
							size={size}
							spacing={spacing}
						/>
					))}
				</ToggleButtons>
			</GridItem>

			<GridItem>
				<Divider color='gray' colorMode={colorMode} orientation={isMd ? 'horizontal' : 'vertical'} />
			</GridItem>

			<GridItem>
				<ToggleAllButton color={color} isDisabled={isDisabled} isFullWidth={isMd} size={size} />
			</GridItem>
		</Grid>
	);
};

export default QuickToggles;
