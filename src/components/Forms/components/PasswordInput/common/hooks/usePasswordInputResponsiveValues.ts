import { useGetResponsiveValue } from '@common/hooks';

import type { PasswordInputNonResponsiveValueProps, PasswordInputResponsiveValueProps } from '../types';

type UsePasswordInputResponsiveValuesProps = Partial<PasswordInputResponsiveValueProps>;
type UsePasswordInputResponsiveValuesReturn = PasswordInputNonResponsiveValueProps;

const usePasswordInputResponsiveValues = (
	props: UsePasswordInputResponsiveValuesProps
): UsePasswordInputResponsiveValuesReturn => {
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

	const isCompact = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isError = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['isWarning']>(isWarningProp);

	const size = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<PasswordInputNonResponsiveValueProps['variant']>(variantProp);

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
