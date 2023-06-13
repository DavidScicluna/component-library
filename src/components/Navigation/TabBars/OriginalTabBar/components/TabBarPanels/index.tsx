import { FC } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import AnimatePresence from '../../../../../Transitions/AnimatePresence';
import TabBarPanelFade from '../../../components/TabBarPanelFade';
import { useTabBarContext } from '../../common/hooks';

import { TabBarPanelsProps } from './common/types';

const TabBarPanels: FC<TabBarPanelsProps> = ({ children, ...rest }) => {
	const { activeTab } = useTabBarContext();

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
								as={TabBarPanelFade}
								key={`ds-cl-tab-bar-panels-${index}-panel`}
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

export default TabBarPanels;
