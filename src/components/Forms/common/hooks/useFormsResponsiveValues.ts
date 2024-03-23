import { useGetResponsiveValue } from '@common/hooks';

import type { FormsNonResponsiveValueProps, FormsResponsiveValueProps } from '../types';

type UseFormsResponsiveValuesProps = Partial<FormsResponsiveValueProps>;
type UseFormsResponsiveValuesReturn = FormsNonResponsiveValueProps;

const useFormsResponsiveValues = (props: UseFormsResponsiveValuesProps): UseFormsResponsiveValuesReturn => {
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

	const isCompact = useGetResponsiveValue<FormsNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<FormsNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<FormsNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isError = useGetResponsiveValue<FormsNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<FormsNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<FormsNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<FormsNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<FormsNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<FormsNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<FormsNonResponsiveValueProps['isWarning']>(isWarningProp);

	const size = useGetResponsiveValue<FormsNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<FormsNonResponsiveValueProps['variant']>(variantProp);

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

export default useFormsResponsiveValues;
