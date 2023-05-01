import { FC } from 'react';

import { TabPanel, TabPanels as CUITabPanels, useConst } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import AnimatePresence from '../../../../Transitions/AnimatePresence';
import {
	getConfig as getTransitionConfig,
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings
} from '../../../../Transitions/common/utils';
import Fade from '../../../../Transitions/Fade';
import { FadeProps } from '../../../../Transitions/Fade/types';
import { useTabsContext } from '../../OriginalTabs/common/hooks';

import { TabPanelsProps } from './common/types';

const TabPanelFade: FC<FadeProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const duration = useConst(getTransitionDuration({ theme, duration: 'slow' }));
	const easing = useConst(getTransitionEasings({ theme }));
	const config = useConst({ ...getTransitionConfig({ theme }), duration, easing });

	return (
		<Fade {...rest} transition={{ enter: { ...config }, exit: { ...config } }}>
			{children}
		</Fade>
	);
};

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
