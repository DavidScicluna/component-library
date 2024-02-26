import { useContext } from 'react';

import { FormControlContext } from '../../FormControl';
import {
	DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL,
	DEFAULT_FORM_CONTROL_ID,
	DEFAULT_FORM_CONTROL_IS_DISABLED,
	DEFAULT_FORM_CONTROL_IS_ERROR,
	DEFAULT_FORM_CONTROL_IS_FOCUSED,
	DEFAULT_FORM_CONTROL_IS_READONLY,
	DEFAULT_FORM_CONTROL_IS_REQUIRED,
	DEFAULT_FORM_CONTROL_IS_SUCCESS,
	DEFAULT_FORM_CONTROL_IS_WARNING,
	DEFAULT_FORM_CONTROL_SIZE,
	DEFAULT_FORM_CONTROL_SPACING
} from '../constants';
import type { FormControlContext as FormControlContextType, FormControlElement } from '../types';

import useFormControlResponsiveValues from './useFormControlResponsiveValues';

const useFormControlContext = <Element extends FormControlElement>() => {
	const {
		color,
		colorMode,
		id = DEFAULT_FORM_CONTROL_ID,
		hasFormControl = DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL,
		isDisabled: isDisabledProp = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isError: isErrorProp = DEFAULT_FORM_CONTROL_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORM_CONTROL_IS_FOCUSED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORM_CONTROL_IS_WARNING,
		size: sizeProp = DEFAULT_FORM_CONTROL_SIZE,
		spacing: spacingProp = DEFAULT_FORM_CONTROL_SPACING
	} = useContext<FormControlContextType<Element>>(FormControlContext);

	const { isDisabled, isError, isFocused, isReadOnly, isRequired, isSuccess, isWarning, size, spacing } =
		useFormControlResponsiveValues<Element>({
			isDisabled: isDisabledProp,
			isError: isErrorProp,
			isFocused: isFocusedProp,
			isReadOnly: isReadOnlyProp,
			isRequired: isRequiredProp,
			isSuccess: isSuccessProp,
			isWarning: isWarningProp,
			size: sizeProp,
			spacing: spacingProp
		});

	return {
		color,
		colorMode,
		id,
		hasFormControl,
		isDisabled,
		isError,
		isFocused,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		size,
		spacing
	};
};

export default useFormControlContext;
