import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_NUMBER_INPUT_IS_COMPACT,
	DEFAULT_NUMBER_INPUT_IS_DISABLED,
	DEFAULT_NUMBER_INPUT_IS_ERROR,
	DEFAULT_NUMBER_INPUT_IS_FOCUSED,
	DEFAULT_NUMBER_INPUT_IS_FULLWIDTH,
	DEFAULT_NUMBER_INPUT_IS_NEGATIVE_ALLOWED,
	DEFAULT_NUMBER_INPUT_IS_OUTLINED,
	DEFAULT_NUMBER_INPUT_IS_READONLY,
	DEFAULT_NUMBER_INPUT_IS_REQUIRED,
	DEFAULT_NUMBER_INPUT_IS_SUCCESS,
	DEFAULT_NUMBER_INPUT_IS_WARNING,
	DEFAULT_NUMBER_INPUT_SIZE,
	DEFAULT_NUMBER_INPUT_START_VALUE,
	DEFAULT_NUMBER_INPUT_VARIANT
} from '../constants';
import type { NumberInputElement, NumberInputProps, NumberInputSize, NumberInputVariant } from '../types';

type PickedNumberInputProps =
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isNegativeAllowed'
	| 'isSuccess'
	| 'isWarning'
	| 'startValue'
	| 'size'
	| 'variant';
type UseNumberInputResponsiveValuesProps<Element extends NumberInputElement> = Partial<
	Pick<NumberInputProps<Element>, PickedNumberInputProps>
>;

const useNumberInputResponsiveValues = <Element extends NumberInputElement>(
	props: UseNumberInputResponsiveValuesProps<Element>
) => {
	const {
		isCompact: isCompactProp = DEFAULT_NUMBER_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_NUMBER_INPUT_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_NUMBER_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_NUMBER_INPUT_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_NUMBER_INPUT_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_NUMBER_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_NUMBER_INPUT_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_NUMBER_INPUT_IS_REQUIRED,
		isNegativeAllowed: isNegativeAllowedProp = DEFAULT_NUMBER_INPUT_IS_NEGATIVE_ALLOWED,
		isSuccess: isSuccessProp = DEFAULT_NUMBER_INPUT_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_NUMBER_INPUT_IS_WARNING,
		startValue: startValueProp = DEFAULT_NUMBER_INPUT_START_VALUE,
		size: sizeProp = DEFAULT_NUMBER_INPUT_SIZE,
		variant: variantProp = DEFAULT_NUMBER_INPUT_VARIANT
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<boolean>(isFullWidthProp);
	const isError = useGetResponsiveValue<boolean>(isErrorProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<boolean>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<boolean>(isRequiredProp);
	const isNegativeAllowed = useGetResponsiveValue<boolean>(isNegativeAllowedProp);
	const isSuccess = useGetResponsiveValue<boolean>(isSuccessProp);
	const isWarning = useGetResponsiveValue<boolean>(isWarningProp);

	const startValue = useGetResponsiveValue<number>(startValueProp);

	const size = useGetResponsiveValue<NumberInputSize>(sizeProp);
	const variant = useGetResponsiveValue<NumberInputVariant>(variantProp);

	return {
		isCompact,
		isDisabled,
		isFullWidth,
		isError,
		isFocused,
		isOutlined,
		isReadOnly,
		isRequired,
		isNegativeAllowed,
		isSuccess,
		isWarning,
		startValue,
		size,
		variant
	};
};

export default useNumberInputResponsiveValues;
