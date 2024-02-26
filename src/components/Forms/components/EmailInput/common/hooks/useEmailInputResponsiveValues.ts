import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_EMAIL_INPUT_IS_COMPACT,
	DEFAULT_EMAIL_INPUT_IS_DISABLED,
	DEFAULT_EMAIL_INPUT_IS_ERROR,
	DEFAULT_EMAIL_INPUT_IS_FOCUSED,
	DEFAULT_EMAIL_INPUT_IS_FULLWIDTH,
	DEFAULT_EMAIL_INPUT_IS_OUTLINED,
	DEFAULT_EMAIL_INPUT_IS_READONLY,
	DEFAULT_EMAIL_INPUT_IS_REQUIRED,
	DEFAULT_EMAIL_INPUT_IS_SUCCESS,
	DEFAULT_EMAIL_INPUT_IS_WARNING,
	DEFAULT_EMAIL_INPUT_SIZE,
	DEFAULT_EMAIL_INPUT_VARIANT
} from '../constants';
import type { EmailInputElement, EmailInputProps, EmailInputSize, EmailInputVariant } from '../types';

type PickedEmailInputProps =
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant';
type UseEmailInputResponsiveValuesProps<Element extends EmailInputElement> = Partial<
	Pick<EmailInputProps<Element>, PickedEmailInputProps>
>;

const useEmailInputResponsiveValues = <Element extends EmailInputElement>(
	props: UseEmailInputResponsiveValuesProps<Element>
) => {
	const {
		isCompact: isCompactProp = DEFAULT_EMAIL_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_EMAIL_INPUT_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_EMAIL_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_EMAIL_INPUT_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_EMAIL_INPUT_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_EMAIL_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_EMAIL_INPUT_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_EMAIL_INPUT_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_EMAIL_INPUT_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_EMAIL_INPUT_IS_WARNING,
		size: sizeProp = DEFAULT_EMAIL_INPUT_SIZE,
		variant: variantProp = DEFAULT_EMAIL_INPUT_VARIANT
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<boolean>(isFullWidthProp);
	const isError = useGetResponsiveValue<boolean>(isErrorProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<boolean>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<boolean>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<boolean>(isSuccessProp);
	const isWarning = useGetResponsiveValue<boolean>(isWarningProp);

	const size = useGetResponsiveValue<EmailInputSize>(sizeProp);
	const variant = useGetResponsiveValue<EmailInputVariant>(variantProp);

	return {
		isCompact,
		isDisabled,
		isFullWidth,
		isError,
		isFocused,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		size,
		variant
	};
};

export default useEmailInputResponsiveValues;
