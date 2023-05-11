import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { FormControlContext } from '../..';
import {
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isFocused as defaultIsFocused,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../default/props';
import { FormControlContext as FormControlContextType } from '../types';

const useFormControlContext = (): NoUndefinedField<FormControlContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isDisabled = defaultIsDisabled,
		isError = defaultIsError,
		isFocused = defaultIsFocused,
		isReadOnly = defaultIsReadOnly,
		isRequired = defaultIsRequired,
		isSuccess = defaultIsSuccess,
		isWarning = defaultIsWarning,
		size = defaultSize
	} = useContext<FormControlContextType>(FormControlContext);

	return {
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
	};
};

export default useFormControlContext;
