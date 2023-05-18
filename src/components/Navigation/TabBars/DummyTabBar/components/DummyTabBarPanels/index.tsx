import { FC } from 'react';

import { TabPanel, TabPanels as CUITabPanels } from '@chakra-ui/react';

import AnimatePresence from '../../../../../Transitions/AnimatePresence';
import TabBarPanelFade from '../../../components/TabBarPanelFade';
import { useDummyTabBarContext } from '../../common/hooks';

import { DummyTabBarPanelsProps } from './common/types';

const DummyTabBarPanels: FC<DummyTabBarPanelsProps> = ({ children, ...rest }) => {
	const { activeTab } = useDummyTabBarContext();

	return (
		<CUITabPanels {...rest} width='100%'>
			{children.map((panel, index) => (
				<TabPanel key={`ds-cl-dummy-tab-bar-panels-${index}-panel`} width='100%' height='100%' p={0}>
					<AnimatePresence>
						<TabBarPanelFade in={activeTab === index}>{panel}</TabBarPanelFade>
					</AnimatePresence>
				</TabPanel>
			))}
		</CUITabPanels>
	);
};

export default DummyTabBarPanels;
