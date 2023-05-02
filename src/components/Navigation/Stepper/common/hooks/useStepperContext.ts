import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { StepperContext } from '../..';
import { activeStep as defaultActiveStep } from '../default/props';
import { StepperContext as StepperContextType } from '../types';

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
