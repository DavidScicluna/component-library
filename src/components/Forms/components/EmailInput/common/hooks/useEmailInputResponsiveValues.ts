import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_EMAIL_INPUT_IS_COMPACT__,
	__DEFAULT_EMAIL_INPUT_IS_DISABLED__,
	__DEFAULT_EMAIL_INPUT_IS_ERROR__,
	__DEFAULT_EMAIL_INPUT_IS_FOCUSED__,
	__DEFAULT_EMAIL_INPUT_IS_OUTLINED__,
	__DEFAULT_EMAIL_INPUT_IS_READONLY__,
	__DEFAULT_EMAIL_INPUT_IS_REQUIRED__,
	__DEFAULT_EMAIL_INPUT_IS_SUCCESS__,
	__DEFAULT_EMAIL_INPUT_IS_WARNING__,
	__DEFAULT_EMAIL_INPUT_SIZE__,
	__DEFAULT_EMAIL_INPUT_VARIANT__
} from '../constants';
import type { EmailInputProps, EmailInputSize, EmailInputVariant } from '../types';

type UseEmailInputResponsiveValuesProps = Partial<
	Pick<
		EmailInputProps,
		| 'isCompact'
		| 'isDisabled'
		| 'isError'
		| 'isFocused'
		| 'isOutlined'
		| 'isReadOnly'
		| 'isRequired'
		| 'isSuccess'
		| 'isWarning'
		| 'size'
		| 'variant'
	>
>;

const useEmailInputResponsiveValues = (props: UseEmailInputResponsiveValuesProps) => {
	const {
		isCompact: isCompactProp = __DEFAULT_EMAIL_INPUT_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_EMAIL_INPUT_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_EMAIL_INPUT_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_EMAIL_INPUT_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_EMAIL_INPUT_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_EMAIL_INPUT_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_EMAIL_INPUT_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_EMAIL_INPUT_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_EMAIL_INPUT_IS_WARNING__,
		size: sizeProp = __DEFAULT_EMAIL_INPUT_SIZE__,
		variant: variantProp = __DEFAULT_EMAIL_INPUT_VARIANT__
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
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