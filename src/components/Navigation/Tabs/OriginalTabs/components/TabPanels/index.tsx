import { FC } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import AnimatePresence from '../../../../../Transitions/AnimatePresence';
import TabPanelFade from '../../../components/TabPanelFade';
import { useTabsContext } from '../../common/hooks';

import { TabPanelsProps } from './common/types';

const TabPanels: FC<TabPanelsProps> = ({ children, ...rest }) => {
	const { activeTab } = useTabsContext();

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
								key={`ds-cl-tabs-panels-${index}-panel`}
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

export default TabPanels;
