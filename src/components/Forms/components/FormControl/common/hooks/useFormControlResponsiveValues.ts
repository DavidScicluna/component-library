import { useGetResponsiveValue } from '@common/hooks';
import type { AlignItemsClass, JustifyContentClass, ThemeSpacing, Undefinable } from '@common/types';

import {
	DEFAULT_STACK_ALIGN_ITEMS,
	DEFAULT_STACK_JUSTIFY_CONTENT
} from '@components/Layout/components/Stacks/Stack/common/constants';

import {
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
import type { FormControlElement, FormControlProps, FormControlSize } from '../types';

type PickedFormControlProps =
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
	| 'spacing';
type UseFormControlResponsiveValuesProps<Element extends FormControlElement> = Partial<
	Pick<FormControlProps<Element>, PickedFormControlProps>
>;

const useFormControlResponsiveValues = <Element extends FormControlElement>(
	props: UseFormControlResponsiveValuesProps<Element>
) => {
	const {
		alignItems: alignItemsProp = DEFAULT_STACK_ALIGN_ITEMS,
		justifyContent: justifyContentProp = DEFAULT_STACK_JUSTIFY_CONTENT,
		isDisabled: isDisabledProp = DEFAULT_FORM_CONTROL_IS_DISABLED,
		isError: isErrorProp = DEFAULT_FORM_CONTROL_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORM_CONTROL_IS_FOCUSED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORM_CONTROL_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORM_CONTROL_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORM_CONTROL_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORM_CONTROL_IS_WARNING,
		size: sizeProp = DEFAULT_FORM_CONTROL_SIZE,
		spacing: spacingProp = DEFAULT_FORM_CONTROL_SPACING
	} = props;

	const alignItems = useGetResponsiveValue<Undefinable<AlignItemsClass>>(alignItemsProp);
	const justifyContent = useGetResponsiveValue<Undefinable<JustifyContentClass>>(justifyContentProp);

	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isError = useGetResponsiveValue<boolean>(isErrorProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isReadOnly = useGetResponsiveValue<boolean>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<boolean>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<boolean>(isSuccessProp);
	const isWarning = useGetResponsiveValue<boolean>(isWarningProp);

	const size = useGetResponsiveValue<FormControlSize>(sizeProp);
	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);

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
