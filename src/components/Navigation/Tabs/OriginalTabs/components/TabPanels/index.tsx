import { FC } from 'react';

import { TabPanel, TabPanels as CUITabPanels } from '@chakra-ui/react';

import AnimatePresence from '../../../../../Transitions/AnimatePresence';
import TabPanelFade from '../../../components/TabPanelFade';
import { useTabsContext } from '../../common/hooks';

import { TabPanelsProps } from './common/types';

const TabPanels: FC<TabPanelsProps> = ({ children, ...rest }) => {
	const { activeTab } = useTabsContext();

	return (
		<CUITabPanels {...rest} width='100%'>
			{children.map((panel, index) => (
				<TabPanel key={`ds-cl-tabs-panels-${index}-panel`} width='100%' height='100%' p={0}>
					<AnimatePresence>
						<TabPanelFade in={activeTab === index}>{panel}</TabPanelFade>
					</AnimatePresence>
				</TabPanel>
			))}
		</CUITabPanels>
	);
};

export default TabPanels;
