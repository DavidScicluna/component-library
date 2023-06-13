import { useContext } from 'react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnChange
} from '../../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../../common/types';
import {
	activeStep as defaultActiveStep,
	isConsecutively as defaultIsConsecutively,
	isDisabled as defaultIsDisabled,
	isDivisible as defaultIsDivisible,
	isFitted as defaultIsFitted,
	// orientation as defaultOrientation,
	size as defaultSize,
	totalSteps as defaultTotalSteps,
	variant as defaultVariant
} from '../../../common/default/props';
import { StepperContext } from '../..';
import { StepperContext as StepperContextType } from '../types';

const useStepperContext = (): NoUndefinedField<StepperContextType> => {
	const {
		activeStep = defaultActiveStep,
		totalSteps = defaultTotalSteps,
		color = defaultColor,
		colorMode = defaultColorMode,
		isConsecutively = defaultIsConsecutively,
		isDisabled = defaultIsDisabled,
		isDivisible = defaultIsDivisible,
		isFitted = defaultIsFitted,
		// orientation = defaultOrientation,
		onChange = defaultOnChange,
		size = defaultSize,
		variant = defaultVariant
	} = useContext<StepperContextType>(StepperContext);

	return {
		activeStep,
		totalSteps,
		color,
		colorMode,
		isConsecutively,
		isDisabled,
		isDivisible,
		isFitted,
		// orientation,
		onChange,
		size,
		variant
	};
};

export default useStepperContext;
