import { createContext, forwardRef, ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultOnChange
} from '../../../../common/default/props';
import { useProviderContext } from '../../../Provider/common/hooks';
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
} from '../common/default/props';

import { StepperContext as StepperContextType, StepperProps, StepperRef } from './common/types';

export const StepperContext = createContext<StepperContextType>({
	activeStep: defaultActiveStep,
	totalSteps: defaultTotalSteps,
	color: defaultColor,
	colorMode: defaultColorMode,
	isConsecutively: defaultIsConsecutively,
	isDisabled: defaultIsDisabled,
	isDivisible: defaultIsDivisible,
	isFitted: defaultIsFitted,
	// orientation: defaultOrientation,
	onChange: defaultOnChange,
	size: defaultSize,
	variant: defaultVariant
});

// TODO: Add orientation
const Stepper = forwardRef<StepperRef, StepperProps>(function Stepper(props, ref): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
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
		variant = defaultVariant,
		...rest
	} = props;

	return (
		<StepperContext.Provider
			value={{
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
			}}
		>
			<Box {...rest} ref={ref}>
				{children}
			</Box>
		</StepperContext.Provider>
	);
});

export default Stepper;
