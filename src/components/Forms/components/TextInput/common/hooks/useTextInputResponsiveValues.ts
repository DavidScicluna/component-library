import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_TEXT_INPUT_IS_COMPACT,
	DEFAULT_TEXT_INPUT_IS_DISABLED,
	DEFAULT_TEXT_INPUT_IS_ERROR,
	DEFAULT_TEXT_INPUT_IS_FOCUSED,
	DEFAULT_TEXT_INPUT_IS_FULLWIDTH,
	DEFAULT_TEXT_INPUT_IS_OUTLINED,
	DEFAULT_TEXT_INPUT_IS_READONLY,
	DEFAULT_TEXT_INPUT_IS_REQUIRED,
	DEFAULT_TEXT_INPUT_IS_SUCCESS,
	DEFAULT_TEXT_INPUT_IS_WARNING,
	DEFAULT_TEXT_INPUT_SIZE,
	DEFAULT_TEXT_INPUT_VARIANT
} from '../constants';
import type { TextInputElement, TextInputProps, TextInputSize, TextInputVariant } from '../types';

type PickedTextInputProps =
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
type UseTextInputResponsiveValuesProps<Element extends TextInputElement> = Partial<
	Pick<TextInputProps<Element>, PickedTextInputProps>
>;

const useTextInputResponsiveValues = <Element extends TextInputElement>(
	props: UseTextInputResponsiveValuesProps<Element>
) => {
	const {
		isCompact: isCompactProp = DEFAULT_TEXT_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_TEXT_INPUT_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_TEXT_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_TEXT_INPUT_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_TEXT_INPUT_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_TEXT_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_TEXT_INPUT_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_TEXT_INPUT_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_TEXT_INPUT_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_TEXT_INPUT_IS_WARNING,
		size: sizeProp = DEFAULT_TEXT_INPUT_SIZE,
		variant: variantProp = DEFAULT_TEXT_INPUT_VARIANT
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

	const size = useGetResponsiveValue<TextInputSize>(sizeProp);
	const variant = useGetResponsiveValue<TextInputVariant>(variantProp);

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

export default useTextInputResponsiveValues;
