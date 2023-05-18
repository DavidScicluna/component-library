import { FC } from 'react';

import { TabPanel, TabPanels as CUITabPanels } from '@chakra-ui/react';

import AnimatePresence from '../../../../../Transitions/AnimatePresence';
import TabPanelFade from '../../../components/TabPanelFade';
import { useDummyTabsContext } from '../../common/hooks';

import { DummyTabPanelsProps } from './common/types';

const DummyTabPanels: FC<DummyTabPanelsProps> = ({ children, ...rest }) => {
	const { activeTab } = useDummyTabsContext();

	return (
		<CUITabPanels {...rest} width='100%'>
			{children.map((panel, index) => (
				<TabPanel key={`ds-cl-dummy-tab-panels-${index}-panel`} width='100%' height='100%' p={0}>
					<AnimatePresence>
						<TabPanelFade in={activeTab === index}>{panel}</TabPanelFade>
					</AnimatePresence>
				</TabPanel>
			))}
		</CUITabPanels>
	);
};

export default DummyTabPanels;
