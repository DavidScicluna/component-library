import type { ElementType } from 'react';
import { useContext } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { FormControlContext } from '../../FormControl';
import {
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
import type { FormControlContext as FormControlContextType, FormControlSize } from '../types';

const useFormControlContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		isDisabled: disabled = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: error = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: focused = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isReadOnly: readOnly = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: required = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: success = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: warning = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		size: si = __DEFAULT_FORM_CONTROL_SIZE__,
		spacing: sp = __DEFAULT_FORM_CONTROL_SPACING__
	} = useContext<FormControlContextType<Element>>(FormControlContext);

	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isError = useGetResponsiveValue<boolean>(error);
	const isFocused = useGetResponsiveValue<boolean>(focused);
	const isReadOnly = useGetResponsiveValue<boolean>(readOnly);
	const isRequired = useGetResponsiveValue<boolean>(required);
	const isSuccess = useGetResponsiveValue<boolean>(success);
	const isWarning = useGetResponsiveValue<boolean>(warning);

	const size = useGetResponsiveValue<FormControlSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

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
		size,
		spacing
	};
};

export default useFormControlContext;
