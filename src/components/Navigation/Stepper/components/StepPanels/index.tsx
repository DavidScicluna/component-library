import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { AnimatePresence } from 'framer-motion';

import Fade from '../../../../Transitions/Fade';
import { useStepperContext } from '../../common/hooks';

import { StepPanelsProps } from './types';

const StepPanels: FC<StepPanelsProps> = ({ children, ...rest }) => {
	const { activeStep } = useStepperContext();

	return (
		<Center {...rest} as={AnimatePresence} width='100%' mode='wait' initial={false}>
			{children.map(
				(step, index) =>
					activeStep === index && (
						<Center key={`ds-edb-step-panel-${index}`} as={Fade} width='100%' in>
							{step}
						</Center>
					)
			)}
		</Center>
	);
};

export default StepPanels;
