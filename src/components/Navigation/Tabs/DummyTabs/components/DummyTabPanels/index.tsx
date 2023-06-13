import { FC } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import AnimatePresence from '../../../../../Transitions/AnimatePresence';
import TabPanelFade from '../../../components/TabPanelFade';
import { useDummyTabsContext } from '../../common/hooks';

import { DummyTabPanelsProps } from './common/types';

const DummyTabPanels: FC<DummyTabPanelsProps> = ({ children, ...rest }) => {
	const { activeTab } = useDummyTabsContext();

	return (
		<AnimatePresence>
			<Grid
				{...rest}
				width='100%'
				height='100%'
				templateColumns='1fr'
				templateRows='1fr'
				alignItems='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				gap={0}
			>
				{children && Array.isArray(children)
					? children.map((panel, index) => (
							<GridItem
								as={TabPanelFade}
								key={`ds-cl-dummy-tab-panels-${index}-panel`}
								tabIndex={index}
								rowStart={1}
								colStart={1}
								in={activeTab === index}
								p={0}
							>
								{panel}
							</GridItem>
					  ))
					: null}
			</Grid>
		</AnimatePresence>
	);
};

export default DummyTabPanels;
