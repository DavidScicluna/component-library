import { useGetResponsiveValue } from '@common/hooks';
import type { AlignItemsClass, JustifyContentClass, ThemeSpacing } from '@common/types';

import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__
} from '@components/Layout/components/Stacks/Stack/common/constants';

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
import type { FormControlProps, FormControlSize } from '../types';

type UseFormControlResponsiveValuesProps = Pick<
	FormControlProps,
	| 'alignItems'
	| 'justifyContent'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'spacing'
>;

const useFormControlResponsiveValues = (props: UseFormControlResponsiveValuesProps) => {
	const {
		alignItems: alignItemsProp = __DEFAULT_STACK_ALIGN_ITEMS__,
		justifyContent: justifyContentProp = __DEFAULT_STACK_JUSTIFY_CONTENT__,
		isDisabled: isDisabledProp = __DEFAULT_FORM_CONTROL_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_FORM_CONTROL_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORM_CONTROL_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORM_CONTROL_IS_WARNING__,
		size: sizeProp = __DEFAULT_FORM_CONTROL_SIZE__,
		spacing: spacingProp = __DEFAULT_FORM_CONTROL_SPACING__
	} = props;

	const alignItems = useGetResponsiveValue<AlignItemsClass>(alignItemsProp);
	const justifyContent = useGetResponsiveValue<JustifyContentClass>(justifyContentProp);

	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isError = useGetResponsiveValue<boolean>(isErrorProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isReadOnly = useGetResponsiveValue<boolean>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<boolean>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<boolean>(isSuccessProp);
	const isWarning = useGetResponsiveValue<boolean>(isWarningProp);

	const size = useGetResponsiveValue<FormControlSize>(sizeProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	return {
		alignItems,
		justifyContent,
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

export default useFormControlResponsiveValues;
