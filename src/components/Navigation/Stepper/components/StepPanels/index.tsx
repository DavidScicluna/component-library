import { FC } from 'react';

import { Box, useConst } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import AnimatePresence from '../../../../Transitions/AnimatePresence';
import {
	getConfig as getTransitionConfig,
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings
} from '../../../../Transitions/common/utils';
import Fade from '../../../../Transitions/Fade';
import { FadeProps } from '../../../../Transitions/Fade/common/types';
import { useStepperContext } from '../../common/hooks';

import { StepPanelsProps } from './common/types';

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
		<Box
			{...rest}
			as={AnimatePresence}
			width='100%'
			// display='grid' gridTemplateColumns='100%' gridTemplateRows='100%'
		>
			{children.map((step, index) => (
				<Box
					as={StepPanelFade}
					key={`ds-cl-stepper-panels-${index}-panel`}
					width='100%'
					height='100%'
					// display='block !important'
					// gridRowStart={1}
					// gridColumnStart={1}
					layout
					in={activeStep === index}
					p={0}
				>
					{step}
				</Box>
			))}
		</Box>
	);
};

export default StepPanels;
