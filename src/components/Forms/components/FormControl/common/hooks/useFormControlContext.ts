import { useContext } from 'react';

import { FormControlContext } from '../../FormControl';
import {
	__DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL__,
	__DEFAULT_FORM_CONTROL_ID__,
	__DEFAULT_FORM_CONTROL_IS_DISABLED__,
	__DEFAULT_FORM_CONTROL_IS_ERROR__,
	__DEFAULT_FORM_CONTROL_IS_FOCUSED__,
	__DEFAULT_FORM_CONTROL_IS_READONLY__,
	__DEFAULT_FORM_CONTROL_IS_REQUIRED__,
	__DEFAULT_FORM_CONTROL_IS_SUCCESS__,
	__DEFAULT_FORM_CONTROL_IS_WARNING__,
	__DEFAULT_FORM_CONTROL_SIZE__,
	__DEFAULT_FORM_CONTROL_SPACING__
} from '../constants';
import type { FormControlContext as FormControlContextType, FormControlElement } from '../types';

import useFormControlResponsiveValues from './useFormControlResponsiveValues';

const useFormControlContext = <Element extends FormControlElement>() => {
	const {
		color,
		colorMode,
		id = __DEFAULT_FORM_CONTROL_ID__,
		hasFormControl = __DEFAULT_FORM_CONTROL_HAS_FORM_CONTROL__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		spacing: spacingProp = __DEFAULT_FORM_CONTROL_SPACING__
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
