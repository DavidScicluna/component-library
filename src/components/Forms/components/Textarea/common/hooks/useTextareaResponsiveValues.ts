import { useGetResponsiveValue } from '@common/hooks';
import type { ResizeClass } from '@common/types';

import {
	DEFAULT_TEXTAREA_IS_COMPACT,
	DEFAULT_TEXTAREA_IS_DISABLED,
	DEFAULT_TEXTAREA_IS_ERROR,
	DEFAULT_TEXTAREA_IS_FOCUSED,
	DEFAULT_TEXTAREA_IS_FULLWIDTH,
	DEFAULT_TEXTAREA_IS_OUTLINED,
	DEFAULT_TEXTAREA_IS_READONLY,
	DEFAULT_TEXTAREA_IS_REQUIRED,
	DEFAULT_TEXTAREA_IS_SUCCESS,
	DEFAULT_TEXTAREA_IS_WARNING,
	DEFAULT_TEXTAREA_RESIZE,
	DEFAULT_TEXTAREA_SIZE,
	DEFAULT_TEXTAREA_VARIANT
} from '../constants';
import type { TextareaElement, TextareaProps, TextareaSize, TextareaVariant } from '../types';

type PickedTextareaProps =
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
	| 'resize'
	| 'size'
	| 'variant';
type UseTextareaResponsiveValuesProps<Element extends TextareaElement> = Partial<
	Pick<TextareaProps<Element>, PickedTextareaProps>
>;

const useTextareaResponsiveValues = <Element extends TextareaElement>(
	props: UseTextareaResponsiveValuesProps<Element>
) => {
	const {
		isCompact: isCompactProp = DEFAULT_TEXTAREA_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_TEXTAREA_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_TEXTAREA_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_TEXTAREA_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_TEXTAREA_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_TEXTAREA_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_TEXTAREA_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_TEXTAREA_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_TEXTAREA_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_TEXTAREA_IS_WARNING,
		resize: resizeProp = DEFAULT_TEXTAREA_RESIZE,
		size: sizeProp = DEFAULT_TEXTAREA_SIZE,
		variant: variantProp = DEFAULT_TEXTAREA_VARIANT
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

	const resize = useGetResponsiveValue<ResizeClass>(resizeProp);

	const size = useGetResponsiveValue<TextareaSize>(sizeProp);
	const variant = useGetResponsiveValue<TextareaVariant>(variantProp);

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
