import { FC } from 'react';

import { useConst, Box } from '@chakra-ui/react';

import {
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings,
	getConfig as getTransitionConfig
} from '../../../../Transitions/common/utils';
import { useStepperContext } from '../../common/hooks';
import { useTheme } from '../../../../../common/hooks';
import AnimatePresence from '../../../../Transitions/AnimatePresence';
import { FadeProps } from '../../../../Transitions/Fade/types';
import Fade from '../../../../Transitions/Fade';

import { StepPanelsProps } from './types';

const StepPanelFade: FC<FadeProps> = ({ children, ...rest }) => {
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

const StepPanels: FC<StepPanelsProps> = ({ children, ...rest }) => {
	const { activeStep } = useStepperContext();

	return (
		<Box {...rest} width='100%' display='grid' gridTemplateColumns='minmax(0, 1fr)'>
			<AnimatePresence>
				{children.map((step, index) => (
					<Box
						as={StepPanelFade}
						key={`ds-cl-stepper-panels-${index}-panel`}
						width='100%'
						height='100%'
						display='block !important'
						gridRowStart={1}
						gridColumnStart={1}
						layout
						in={activeStep === index}
						p={0}
					>
						{step}
					</Box>
				))}
			</AnimatePresence>
		</Box>
	);
};

export default StepPanels;
