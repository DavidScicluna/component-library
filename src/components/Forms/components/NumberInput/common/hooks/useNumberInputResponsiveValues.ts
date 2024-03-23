import { useGetResponsiveValue } from '@common/hooks';

import type { NumberInputNonResponsiveValueProps, NumberInputResponsiveValueProps } from '../types';

type UseNumberInputResponsiveValuesProps = Partial<NumberInputResponsiveValueProps>;
type UseNumberInputResponsiveValuesReturn = NumberInputNonResponsiveValueProps;

const useNumberInputResponsiveValues = (
	props: UseNumberInputResponsiveValuesProps
): UseNumberInputResponsiveValuesReturn => {
	const {
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isNegativeAllowed: isNegativeAllowedProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		startValue: startValueProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const isCompact = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isError = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isNegativeAllowed =
		useGetResponsiveValue<NumberInputNonResponsiveValueProps['isNegativeAllowed']>(isNegativeAllowedProp);
	const isSuccess = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<NumberInputNonResponsiveValueProps['isWarning']>(isWarningProp);

	const startValue = useGetResponsiveValue<NumberInputNonResponsiveValueProps['startValue']>(startValueProp);

	const size = useGetResponsiveValue<NumberInputNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<NumberInputNonResponsiveValueProps['variant']>(variantProp);

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
