import { createContext, forwardRef, ReactElement } from 'react';

import { useColorMode, VStack } from '@chakra-ui/react';

import { method as defaultMethod } from '../../../common/default/props';

import {
	activeStep as defaultActiveStep,
	color as defaultColor,
	colorMode as defaultColorMode
} from './common/default/props';
import { StepperContext as StepperContextType, StepperProps, StepperRef } from './common/types';

export const StepperContext = createContext<StepperContextType>({
	activeStep: defaultActiveStep,
	color: defaultColor,
	colorMode: defaultColorMode,
	onChange: defaultMethod,
	onCancel: defaultMethod,
	onSubmit: defaultMethod
});

const Stepper = forwardRef<StepperRef, StepperProps>(function Stepper(props, ref): ReactElement {
	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const {
		children,
		activeStep = defaultActiveStep,
		color = defaultColor,
		colorMode = colorModeHook,
		onChange,
		onCancel,
		onSubmit,
		...rest
	} = props;

	return (
		<StepperContext.Provider value={{ activeStep, color, colorMode, onChange, onCancel, onSubmit }}>
			<VStack {...rest} ref={ref} width='100%' maxWidth='100%' spacing={0}>
				{children}
			</VStack>
		</StepperContext.Provider>
	);
});

export default Stepper;
