import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_FORMS_IS_COMPACT,
	DEFAULT_FORMS_IS_DISABLED,
	DEFAULT_FORMS_IS_ERROR,
	DEFAULT_FORMS_IS_FOCUSED,
	DEFAULT_FORMS_IS_FULLWIDTH,
	DEFAULT_FORMS_IS_OUTLINED,
	DEFAULT_FORMS_IS_READONLY,
	DEFAULT_FORMS_IS_REQUIRED,
	DEFAULT_FORMS_IS_SUCCESS,
	DEFAULT_FORMS_IS_WARNING,
	DEFAULT_FORMS_SIZE,
	DEFAULT_FORMS_VARIANT
} from '../constants';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '../types';

type PickedFormsCommonProps =
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
	| 'size'
	| 'variant';
type UseFormsResponsiveValuesProps = Partial<Pick<FormsCommonProps, PickedFormsCommonProps>>;

const useFormsResponsiveValues = (props: UseFormsResponsiveValuesProps) => {
	const {
		isCompact: isCompactProp = DEFAULT_FORMS_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_FORMS_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_FORMS_IS_FULLWIDTH,
		isError: isErrorProp = DEFAULT_FORMS_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_FORMS_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_FORMS_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_FORMS_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_FORMS_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_FORMS_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_FORMS_IS_WARNING,
		size: sizeProp = DEFAULT_FORMS_SIZE,
		variant: variantProp = DEFAULT_FORMS_VARIANT
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

	const size = useGetResponsiveValue<FormsCommonSize>(sizeProp);
	const variant = useGetResponsiveValue<FormsCommonVariant>(variantProp);

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
