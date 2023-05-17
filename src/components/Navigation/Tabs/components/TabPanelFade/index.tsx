import { FC } from 'react';

import { useConst, useTheme } from '../../../../../common/hooks';
import {
	getConfig as getTransitionConfig,
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings
} from '../../../../Transitions/common/utils';
import Fade from '../../../../Transitions/Fade';
import { FadeProps as TabPanelFadeProps } from '../../../../Transitions/Fade/common/types';

const TabPanelFade: FC<TabPanelFadeProps> = ({ children, ...rest }) => {
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

export default TabPanelFade;
