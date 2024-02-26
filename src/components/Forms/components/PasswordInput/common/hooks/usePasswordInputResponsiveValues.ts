import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_PASSWORD_INPUT_IS_COMPACT,
	DEFAULT_PASSWORD_INPUT_IS_DISABLED,
	DEFAULT_PASSWORD_INPUT_IS_ERROR,
	DEFAULT_PASSWORD_INPUT_IS_FOCUSED,
	DEFAULT_PASSWORD_INPUT_IS_FULLWIDTH,
	DEFAULT_PASSWORD_INPUT_IS_OUTLINED,
	DEFAULT_PASSWORD_INPUT_IS_READONLY,
	DEFAULT_PASSWORD_INPUT_IS_REQUIRED,
	DEFAULT_PASSWORD_INPUT_IS_SUCCESS,
	DEFAULT_PASSWORD_INPUT_IS_WARNING,
	DEFAULT_PASSWORD_INPUT_SIZE,
	DEFAULT_PASSWORD_INPUT_VARIANT
} from '../constants';
import type { PasswordInputElement, PasswordInputProps, PasswordInputSize, PasswordInputVariant } from '../types';

type PickedPasswordInputProps =
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
type UsePasswordInputResponsiveValuesProps<Element extends PasswordInputElement> = Partial<
	Pick<PasswordInputProps<Element>, PickedPasswordInputProps>
>;

const usePasswordInputResponsiveValues = <Element extends PasswordInputElement>(
	props: UsePasswordInputResponsiveValuesProps<Element>
) => {
	const {
		isCompact: isCompactProp = DEFAULT_PASSWORD_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_PASSWORD_INPUT_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_PASSWORD_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_PASSWORD_INPUT_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_PASSWORD_INPUT_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_PASSWORD_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_PASSWORD_INPUT_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_PASSWORD_INPUT_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_PASSWORD_INPUT_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_PASSWORD_INPUT_IS_WARNING,
		size: sizeProp = DEFAULT_PASSWORD_INPUT_SIZE,
		variant: variantProp = DEFAULT_PASSWORD_INPUT_VARIANT
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

	const size = useGetResponsiveValue<PasswordInputSize>(sizeProp);
	const variant = useGetResponsiveValue<PasswordInputVariant>(variantProp);

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

export default usePasswordInputResponsiveValues;
