import { useGetResponsiveValue } from '@common/hooks';

import type { FileInputNonResponsiveValueProps, FileInputResponsiveValueProps } from '../types';

type UseFileInputResponsiveValuesProps = Partial<FileInputResponsiveValueProps>;
type UseFileInputResponsiveValuesReturn = FileInputNonResponsiveValueProps;

const useFileInputResponsiveValues = (props: UseFileInputResponsiveValuesProps): UseFileInputResponsiveValuesReturn => {
	const {
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isMultiple: isMultipleProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const isCompact = useGetResponsiveValue<FileInputNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<FileInputNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<FileInputNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isError = useGetResponsiveValue<FileInputNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<FileInputNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isMultiple = useGetResponsiveValue<FileInputNonResponsiveValueProps['isMultiple']>(isMultipleProp);
	const isOutlined = useGetResponsiveValue<FileInputNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<FileInputNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<FileInputNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<FileInputNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<FileInputNonResponsiveValueProps['isWarning']>(isWarningProp);

	const size = useGetResponsiveValue<FileInputNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<FileInputNonResponsiveValueProps['variant']>(variantProp);

	return {
		isCompact,
		isDisabled,
		isFullWidth,
		isError,
		isFocused,
		isMultiple,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		size,
		variant
	};
};

export default useFileInputResponsiveValues;
