import { FC } from 'react';

import { TabPanel, TabPanels } from '@chakra-ui/react';

import AnimatePresence from '../../../../../Transitions/AnimatePresence';
import TabBarPanelFade from '../../../components/TabBarPanelFade';
import { useTabBarContext } from '../../common/hooks';

import { TabBarPanelsProps } from './common/types';

const TabBarPanels: FC<TabBarPanelsProps> = ({ children, ...rest }) => {
	const { activeTab } = useTabBarContext();

	return (
		<TabPanels {...rest} width='100%'>
			{children.map((panel, index) => (
				<TabPanel key={`ds-cl-tab-bar-panels-${index}-panel`} width='100%' height='100%' p={0}>
					<AnimatePresence>
						<TabBarPanelFade in={activeTab === index}>{panel}</TabBarPanelFade>
					</AnimatePresence>
				</TabPanel>
			))}
		</TabPanels>
	);
};

export default TabBarPanels;
