import { useGetResponsiveValue } from '@common/hooks';

import type { TextareaNonResponsiveValueProps, TextareaResponsiveValueProps } from '../types';

type UseTextareaResponsiveValuesProps = Partial<TextareaResponsiveValueProps>;
type UseTextareaResponsiveValuesReturn = TextareaNonResponsiveValueProps;

const useTextareaResponsiveValues = (props: UseTextareaResponsiveValuesProps): UseTextareaResponsiveValuesReturn => {
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
		resize: resizeProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const isCompact = useGetResponsiveValue<TextareaNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<TextareaNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<TextareaNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isError = useGetResponsiveValue<TextareaNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<TextareaNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<TextareaNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<TextareaNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<TextareaNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<TextareaNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<TextareaNonResponsiveValueProps['isWarning']>(isWarningProp);

	const resize = useGetResponsiveValue<TextareaNonResponsiveValueProps['resize']>(resizeProp);

	const size = useGetResponsiveValue<TextareaNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<TextareaNonResponsiveValueProps['variant']>(variantProp);

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
		resize,
		size,
		variant
	};
};

export default useTextareaResponsiveValues;
