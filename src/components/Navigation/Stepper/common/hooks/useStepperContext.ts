import { useContext } from 'react';

import { StepperContext } from '../..';
import { StepperContext as StepperContextType } from '../../types';
import {
	activeStep as defaultActiveStep,
	color as defaultColor,
	colorMode as defaultColorMode
} from '../data/defaultPropValues';
import { NoUndefinedField } from '../../../../../common/types';

const useStepperContext = (): NoUndefinedField<StepperContextType> => {
	const {
		activeStep = defaultActiveStep,
		color = defaultColor,
		colorMode = defaultColorMode
	} = useContext<StepperContextType>(StepperContext);

	return { activeStep, color, colorMode };
};

export default useStepperContext;
