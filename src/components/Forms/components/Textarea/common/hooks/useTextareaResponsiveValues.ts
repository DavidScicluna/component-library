import { useGetResponsiveValue } from '@common/hooks';
import type { ResizeClass } from '@common/types';

import {
	__DEFAULT_TEXTAREA_IS_COMPACT__,
	__DEFAULT_TEXTAREA_IS_DISABLED__,
	__DEFAULT_TEXTAREA_IS_ERROR__,
	__DEFAULT_TEXTAREA_IS_FOCUSED__,
	__DEFAULT_TEXTAREA_IS_FULLWIDTH__,
	__DEFAULT_TEXTAREA_IS_OUTLINED__,
	__DEFAULT_TEXTAREA_IS_READONLY__,
	__DEFAULT_TEXTAREA_IS_REQUIRED__,
	__DEFAULT_TEXTAREA_IS_SUCCESS__,
	__DEFAULT_TEXTAREA_IS_WARNING__,
	__DEFAULT_TEXTAREA_RESIZE__,
	__DEFAULT_TEXTAREA_SIZE__,
	__DEFAULT_TEXTAREA_VARIANT__
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
		isCompact: isCompactProp = __DEFAULT_TEXTAREA_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_TEXTAREA_IS_DISABLED__,
		isFullWidth: isFullWidthProp = __DEFAULT_TEXTAREA_IS_FULLWIDTH__,
		isError: isErrorProp = __DEFAULT_TEXTAREA_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_TEXTAREA_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_TEXTAREA_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_TEXTAREA_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_TEXTAREA_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_TEXTAREA_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_TEXTAREA_IS_WARNING__,
		resize: resizeProp = __DEFAULT_TEXTAREA_RESIZE__,
		size: sizeProp = __DEFAULT_TEXTAREA_SIZE__,
		variant: variantProp = __DEFAULT_TEXTAREA_VARIANT__
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
