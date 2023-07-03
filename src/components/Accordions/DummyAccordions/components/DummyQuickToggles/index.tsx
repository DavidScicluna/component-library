import { FC } from 'react';

import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import Divider from '../../../../DataDisplay/Divider';
import { useDummyAccordionsContext } from '../../common/hooks';

import { size as defaultSize } from './common/default/props';
import { DummyQuickTogglesProps } from './common/types';
import DummyAccordionButton from './components/DummyAccordionButton';
import DummyToggleAllButton from './components/DummyToggleAllButton';
import DummyToggleButtons from './components/DummyToggleButtons';

const DummyQuickToggles: FC<DummyQuickTogglesProps> = (props) => {
	const theme = useTheme();

	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const { accordions, color: defaultColor, colorMode, spacing: defaultSpacing } = useDummyAccordionsContext();

	const { color = defaultColor, spacing = defaultSpacing, size = defaultSize } = props;

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
				<DummyToggleButtons size={size} spacing={spacing}>
					{accordions.map((accordion) => (
						<DummyAccordionButton {...accordion} key={accordion.id} color={color} size={size} />
					))}
				</DummyToggleButtons>
			</GridItem>

			<GridItem>
				<Divider color='gray' colorMode={colorMode} orientation={isMd ? 'horizontal' : 'vertical'} />
			</GridItem>

			<GridItem>
				<DummyToggleAllButton color={color} isFullWidth={isMd} size={size} />
			</GridItem>
		</Grid>
	);
};

export default DummyQuickToggles;
