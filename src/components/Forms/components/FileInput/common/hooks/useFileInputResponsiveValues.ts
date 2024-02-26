import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_FILE_INPUT_IS_COMPACT,
	DEFAULT_FILE_INPUT_IS_DISABLED,
	DEFAULT_FILE_INPUT_IS_ERROR,
	DEFAULT_FILE_INPUT_IS_FOCUSED,
	DEFAULT_FILE_INPUT_IS_FULLWIDTH,
	DEFAULT_FILE_INPUT_IS_OUTLINED,
	DEFAULT_FILE_INPUT_IS_READONLY,
	DEFAULT_FILE_INPUT_IS_REQUIRED,
	DEFAULT_FILE_INPUT_IS_SUCCESS,
	DEFAULT_FILE_INPUT_IS_WARNING,
	DEFAULT_FILE_INPUT_SIZE,
	DEFAULT_FILE_INPUT_VARIANT
} from '../constants';
import type { FileInputElement, FileInputProps, FileInputSize, FileInputVariant } from '../types';

type PickedFileInputProps =
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isError'
	| 'isFocused'
	| 'isMultiple'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant';
type UseFileInputResponsiveValuesProps<Element extends FileInputElement> = Partial<
	Pick<FileInputProps<Element>, PickedFileInputProps>
>;

const useFileInputResponsiveValues = <Element extends FileInputElement>(
	props: UseFileInputResponsiveValuesProps<Element>
) => {
	const {
		isCompact: isCompactProp = DEFAULT_FILE_INPUT_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_FILE_INPUT_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_FILE_INPUT_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_FILE_INPUT_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FILE_INPUT_IS_FOCUSED,
		isMultiple: isMultipleProp = DEFAULT_FILE_INPUT_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_FILE_INPUT_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_FILE_INPUT_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FILE_INPUT_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FILE_INPUT_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FILE_INPUT_IS_WARNING,
		size: sizeProp = DEFAULT_FILE_INPUT_SIZE,
		variant: variantProp = DEFAULT_FILE_INPUT_VARIANT
	} = props;

	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<boolean>(isFullWidthProp);
	const isError = useGetResponsiveValue<boolean>(isErrorProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isMultiple = useGetResponsiveValue<boolean>(isMultipleProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<boolean>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<boolean>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<boolean>(isSuccessProp);
	const isWarning = useGetResponsiveValue<boolean>(isWarningProp);

	const size = useGetResponsiveValue<FileInputSize>(sizeProp);
	const variant = useGetResponsiveValue<FileInputVariant>(variantProp);

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
