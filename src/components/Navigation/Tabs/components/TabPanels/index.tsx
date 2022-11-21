import { FC, useContext } from 'react';

import { useConst, TabPanels as CUITabPanels, TabPanel } from '@chakra-ui/react';

import { Transition, AnimatePresence } from 'framer-motion';

import { TabsContext } from '../../.';
import { TabsContext as TabsContextType } from '../../types';
import { activeTab as defaultActiveTab } from '../../common/data/defaultPropValues';
import {
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings
} from '../../../../Transitions/common/utils';
import { useTheme } from '../../../../../common/hooks';
import Fade from '../../../../Transitions/Fade';

import { TabPanelsProps } from './types';

const TabPanels: FC<TabPanelsProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const { activeTab = defaultActiveTab } = useContext<TabsContextType>(TabsContext);

	const duration = useConst<number>(getTransitionDuration({ theme, duration: 'slow' }));
	const easing = useConst<number[]>(getTransitionEasings({ theme }));

	const config = useConst<Transition>({ duration, easing });

	return (
		<CUITabPanels {...rest} as={AnimatePresence} width='100%' mode='wait' initial={false}>
			{children.map((panel, index) => (
				<TabPanel key={`ds-cl-tabs-tab-panel-${index}`} width='100%' p={0}>
					<Fade in={activeTab === index} transition={{ enter: { ...config }, exit: { ...config } }}>
						{panel}
					</Fade>
				</TabPanel>
			))}
		</CUITabPanels>
	);
};

export default TabPanels;
