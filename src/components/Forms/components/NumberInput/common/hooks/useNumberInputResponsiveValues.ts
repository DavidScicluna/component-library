import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_NUMBER_INPUT_IS_COMPACT__,
	__DEFAULT_NUMBER_INPUT_IS_DISABLED__,
	__DEFAULT_NUMBER_INPUT_IS_ERROR__,
	__DEFAULT_NUMBER_INPUT_IS_FOCUSED__,
	__DEFAULT_NUMBER_INPUT_IS_FULLWIDTH__,
	__DEFAULT_NUMBER_INPUT_IS_NEGATIVE_ALLOWED__,
	__DEFAULT_NUMBER_INPUT_IS_OUTLINED__,
	__DEFAULT_NUMBER_INPUT_IS_READONLY__,
	__DEFAULT_NUMBER_INPUT_IS_REQUIRED__,
	__DEFAULT_NUMBER_INPUT_IS_SUCCESS__,
	__DEFAULT_NUMBER_INPUT_IS_WARNING__,
	__DEFAULT_NUMBER_INPUT_SIZE__,
	__DEFAULT_NUMBER_INPUT_START_VALUE__,
	__DEFAULT_NUMBER_INPUT_VARIANT__
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
		isCompact: isCompactProp = __DEFAULT_NUMBER_INPUT_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_NUMBER_INPUT_IS_DISABLED__,
		isFullWidth: isFullWidthProp = __DEFAULT_NUMBER_INPUT_IS_FULLWIDTH__,
		isError: isErrorProp = __DEFAULT_NUMBER_INPUT_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_NUMBER_INPUT_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_NUMBER_INPUT_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_NUMBER_INPUT_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_NUMBER_INPUT_IS_REQUIRED__,
		isNegativeAllowed: isNegativeAllowedProp = __DEFAULT_NUMBER_INPUT_IS_NEGATIVE_ALLOWED__,
		isSuccess: isSuccessProp = __DEFAULT_NUMBER_INPUT_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_NUMBER_INPUT_IS_WARNING__,
		startValue: startValueProp = __DEFAULT_NUMBER_INPUT_START_VALUE__,
		size: sizeProp = __DEFAULT_NUMBER_INPUT_SIZE__,
		variant: variantProp = __DEFAULT_NUMBER_INPUT_VARIANT__
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
