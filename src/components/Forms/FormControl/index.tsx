import { createContext, forwardRef, ReactElement } from 'react';

import { FormControl as CUIFormControl, VStack } from '@chakra-ui/react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../common/default/props';
import { useProviderContext } from '../../Provider/common/hooks';

import {
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isFocused as defaultIsFocused,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize,
	spacing as defaultSpacing
} from './common/default/props';
import { FormControlContext as FormControlContextType, FormControlProps, FormControlRef } from './common/types';

export const FormControlContext = createContext<FormControlContextType>({
	color: defaultColor,
	colorMode: defaultColorMode,
	isDisabled: defaultIsDisabled,
	isError: defaultIsError,
	isFocused: defaultIsFocused,
	isReadOnly: defaultIsReadOnly,
	isRequired: defaultIsRequired,
	isSuccess: defaultIsSuccess,
	isWarning: defaultIsWarning,
	size: defaultSize
});

const FormControl = forwardRef<FormControlRef, FormControlProps>(function FormControl(props, ref): ReactElement {
	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isFocused = defaultIsFocused,
		isReadOnly = defaultIsReadOnly,
		isRequired = defaultIsRequired,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		size = defaultSize,
		spacing = defaultSpacing,
		...rest
	} = props;

	return (
		<FormControlContext.Provider
			value={{
				color,
				colorMode,
				isDisabled,
				isError,
				isFocused,
				isReadOnly,
				isRequired,
				isSuccess,
				isWarning,
				size
			}}
		>
			<VStack
				{...rest}
				as={CUIFormControl}
				ref={ref}
				tabIndex={0}
				alignItems='stretch'
				justifyContent='stretch'
				spacing={spacing}
			>
				{children}
			</VStack>
		</FormControlContext.Provider>
	);
});

export default FormControl;
