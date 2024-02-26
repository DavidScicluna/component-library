import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_FORMS_IS_COMPACT__,
	__DEFAULT_FORMS_IS_DISABLED__,
	__DEFAULT_FORMS_IS_ERROR__,
	__DEFAULT_FORMS_IS_FOCUSED__,
	__DEFAULT_FORMS_IS_FULLWIDTH__,
	__DEFAULT_FORMS_IS_OUTLINED__,
	__DEFAULT_FORMS_IS_READONLY__,
	__DEFAULT_FORMS_IS_REQUIRED__,
	__DEFAULT_FORMS_IS_SUCCESS__,
	__DEFAULT_FORMS_IS_WARNING__,
	__DEFAULT_FORMS_SIZE__,
	__DEFAULT_FORMS_VARIANT__
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
		isCompact: isCompactProp = __DEFAULT_FORMS_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_FORMS_IS_DISABLED__,
		isFullWidth: isFullWidthProp = __DEFAULT_FORMS_IS_FULLWIDTH__,
		isError: isErrorProp = __DEFAULT_FORMS_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_FORMS_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_FORMS_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_FORMS_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_FORMS_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_FORMS_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_FORMS_IS_WARNING__,
		size: sizeProp = __DEFAULT_FORMS_SIZE__,
		variant: variantProp = __DEFAULT_FORMS_VARIANT__
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
