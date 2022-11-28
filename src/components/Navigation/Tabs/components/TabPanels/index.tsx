import { FC } from 'react';

import { useConst, TabPanels as CUITabPanels, TabPanel } from '@chakra-ui/react';

import { AnimatePresence } from 'framer-motion';

import {
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings,
	getConfig as getTransitionConfig
} from '../../../../Transitions/common/utils';
import { useTheme } from '../../../../../common/hooks';
import Fade from '../../../../Transitions/Fade';
import { useTabsContext } from '../../common/hooks';

import { TabPanelsProps } from './types';

const TabPanels: FC<TabPanelsProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const { activeTab } = useTabsContext();

	const duration = useConst(getTransitionDuration({ theme, duration: 'slow' }));
	const easing = useConst(getTransitionEasings({ theme }));
	const config = useConst({ ...getTransitionConfig({ theme }), duration, easing });

	return (
		<CUITabPanels {...rest} as={AnimatePresence} width='100%' mode='wait' initial={false}>
			{children.map((panel, index) => (
				<Fade
					key={`ds-cl-tabs-tab-panel-${index}`}
					in={activeTab === index}
					transition={{ enter: { ...config }, exit: { ...config } }}
					style={{ width: '100%' }}
				>
					<TabPanel width='100%' p={0}>
						{panel}
					</TabPanel>
				</Fade>
			))}
		</CUITabPanels>
	);
};

export default TabPanels;
