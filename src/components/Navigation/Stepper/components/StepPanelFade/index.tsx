import { FC } from 'react';

import { useConst, useTheme } from '../../../../../common/hooks';
import {
	getConfig as getTransitionConfig,
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings
} from '../../../../Transitions/common/utils';
import Fade from '../../../../Transitions/Fade';
import { FadeProps as StepPanelFadeProps } from '../../../../Transitions/Fade/common/types';

const StepPanelFade: FC<StepPanelFadeProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const duration = useConst(getTransitionDuration({ theme, duration: 'ultra-fast' }));
	const easing = useConst(getTransitionEasings({ theme }));
	const config = useConst({ ...getTransitionConfig({ theme }), duration, easing });

	return (
		<Fade {...rest} transition={{ enter: { ...config }, exit: { ...config } }}>
			{children}
		</Fade>
	);
};

export default StepPanelFade;
