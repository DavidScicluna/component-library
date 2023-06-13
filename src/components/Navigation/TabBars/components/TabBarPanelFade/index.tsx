import { FC } from 'react';

import { useConst, useTheme } from '../../../../../common/hooks';
import {
	getConfig as getTransitionConfig,
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings
} from '../../../../Transitions/common/utils';
import Fade from '../../../../Transitions/Fade';
import { FadeProps as TabBarPanelFadeProps } from '../../../../Transitions/Fade/common/types';

const TabBarPanelFade: FC<TabBarPanelFadeProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const duration = useConst(getTransitionDuration({ theme }));
	const easing = useConst(getTransitionEasings({ theme }));
	const config = useConst({ ...getTransitionConfig({ theme }), duration, easing });

	return (
		<Fade {...rest} transition={{ enter: { ...config }, exit: { ...config } }}>
			{children}
		</Fade>
	);
};

export default TabBarPanelFade;
