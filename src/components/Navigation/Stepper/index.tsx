import { createContext, forwardRef, ReactElement } from 'react';

import { VStack } from '@chakra-ui/react';

import {
	color as defaultColor,
	colorMode as defaultColorMode,
	method as defaultMethod
} from '../../../common/default/props';
import { useProviderContext } from '../../Provider/common/hooks';

import { activeStep as defaultActiveStep } from './common/default/props';
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
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		activeStep = defaultActiveStep,
		color = defaultColor,
		colorMode = defaultColorMode,
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
