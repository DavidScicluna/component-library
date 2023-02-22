import { useContext } from 'react';

import { StepperContext } from '../..';
import { NoUndefinedField } from '../../../../../common/types';
import { StepperContext as StepperContextType } from '../../types';
import {
	activeStep as defaultActiveStep,
	color as defaultColor,
	colorMode as defaultColorMode
} from '../data/defaultPropValues';

const useStepperContext = (): NoUndefinedField<StepperContextType> => {
	const {
		activeStep = defaultActiveStep,
		color = defaultColor,
		colorMode = defaultColorMode,
		onCancel,
		onChange,
		onSubmit
	} = useContext<StepperContextType>(StepperContext);

	return { activeStep, color, colorMode, onCancel, onChange, onSubmit };
};

export default useStepperContext;