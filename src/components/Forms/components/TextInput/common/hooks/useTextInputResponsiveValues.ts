import { useGetResponsiveValue } from '@common/hooks';

import type { TextInputNonResponsiveValueProps, TextInputResponsiveValueProps } from '../types';

type UseTextInputResponsiveValuesProps = Partial<TextInputResponsiveValueProps>;
type UseTextInputResponsiveValuesReturn = TextInputNonResponsiveValueProps;

const useTextInputResponsiveValues = (props: UseTextInputResponsiveValuesProps): UseTextInputResponsiveValuesReturn => {
	const {
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const isCompact = useGetResponsiveValue<TextInputNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<TextInputNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<TextInputNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isError = useGetResponsiveValue<TextInputNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<TextInputNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<TextInputNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<TextInputNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<TextInputNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<TextInputNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<TextInputNonResponsiveValueProps['isWarning']>(isWarningProp);

	const size = useGetResponsiveValue<TextInputNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<TextInputNonResponsiveValueProps['variant']>(variantProp);

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
