import { FC } from 'react';

import { useConst, TabPanels as CUITabPanels, TabPanel } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import AnimatePresence from '../../../../Transitions/AnimatePresence';
import {
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings,
	getConfig as getTransitionConfig
} from '../../../../Transitions/common/utils';
import Fade from '../../../../Transitions/Fade';
import { FadeProps } from '../../../../Transitions/Fade/types';
import { useTabsContext } from '../../common/hooks';

import { TabPanelsProps } from './types';

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
		<CUITabPanels
			{...rest}
			width='100%'
			// display='grid' gridTemplateColumns='100%' gridTemplateRows='100%'
		>
			{children.map((panel, index) => (
				<TabPanel
					key={`ds-cl-tabs-panels-${index}-panel`}
					width='100%'
					height='100%'
					// display='block !important'
					// gridRowStart={1}
					// gridColumnStart={1}
					p={0}
				>
					<AnimatePresence>
						<TabPanelFade in={activeTab === index}>{panel}</TabPanelFade>
					</AnimatePresence>
				</TabPanel>
			))}
		</CUITabPanels>
	);
};

export default TabPanels;
