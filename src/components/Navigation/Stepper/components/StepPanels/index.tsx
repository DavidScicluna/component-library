import { FC, useContext } from 'react';

import { Center } from '@chakra-ui/react';

import { AnimatePresence } from 'framer-motion';

import { StepperContext } from '../..';
import Fade from '../../../../Transitions/Fade';
import { activeStep as defaultActiveStep } from '../../common/data/defaultPropValues';
import { StepperContext as StepperContextType } from '../../types';

import { StepPanelsProps } from './types';

const StepPanels: FC<StepPanelsProps> = ({ children, ...rest }) => {
	const { activeStep = defaultActiveStep } = useContext<StepperContextType>(StepperContext);

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
