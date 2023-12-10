import type { ElementType } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import {
	__DEFAULT_CHECKBOX_IS_ACTIVE__,
	__DEFAULT_CHECKBOX_IS_CHECKED__,
	__DEFAULT_CHECKBOX_IS_CLICKABLE__,
	__DEFAULT_CHECKBOX_IS_COMPACT__,
	__DEFAULT_CHECKBOX_IS_DISABLED__,
	__DEFAULT_CHECKBOX_IS_ERROR__,
	__DEFAULT_CHECKBOX_IS_FOCUSED__,
	__DEFAULT_CHECKBOX_IS_INDETERMINATE__,
	__DEFAULT_CHECKBOX_IS_OUTLINED__,
	__DEFAULT_CHECKBOX_IS_READONLY__,
	__DEFAULT_CHECKBOX_IS_REQUIRED__,
	__DEFAULT_CHECKBOX_IS_SUCCESS__,
	__DEFAULT_CHECKBOX_IS_WARNING__,
	__DEFAULT_CHECKBOX_LABEL_POSITION__,
	__DEFAULT_CHECKBOX_SIZE__
} from '../constants';
import type { CheckboxLabelPosition, CheckboxProps, CheckboxSize } from '../types';

type UseCheckboxResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Partial<
	Pick<
		CheckboxProps<Element>,
		| 'isActive'
		| 'isChecked'
		| 'isClickable'
		| 'isCompact'
		| 'isDisabled'
		| 'isError'
		| 'isFocused'
		| 'isIndeterminate'
		| 'isOutlined'
		| 'isReadOnly'
		| 'isRequired'
		| 'isSuccess'
		| 'isWarning'
		| 'labelPosition'
		// | 'size'
	>
>;

const useCheckboxResponsiveValues = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseCheckboxResponsiveValuesProps<Element>
) => {
	const {
		isActive: isActiveProp = __DEFAULT_CHECKBOX_IS_ACTIVE__,
		isChecked: isCheckedProp = __DEFAULT_CHECKBOX_IS_CHECKED__,
		isClickable: isClickableProp = __DEFAULT_CHECKBOX_IS_CLICKABLE__,
		isCompact: isCompactProp = __DEFAULT_CHECKBOX_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_CHECKBOX_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_CHECKBOX_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_CHECKBOX_IS_FOCUSED__,
		isIndeterminate: isIndeterminateProp = __DEFAULT_CHECKBOX_IS_INDETERMINATE__,
		isOutlined: isOutlinedProp = __DEFAULT_CHECKBOX_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_CHECKBOX_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_CHECKBOX_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_CHECKBOX_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_CHECKBOX_IS_WARNING__,
		labelPosition: labelPositionProp = __DEFAULT_CHECKBOX_LABEL_POSITION__,
		size: sizeProp = __DEFAULT_CHECKBOX_SIZE__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isChecked = useGetResponsiveValue<boolean>(isCheckedProp);
	const isClickable = useGetResponsiveValue<boolean>(isClickableProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isError = useGetResponsiveValue<boolean>(isErrorProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isIndeterminate = useGetResponsiveValue<boolean>(isIndeterminateProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<boolean>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<boolean>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<boolean>(isSuccessProp);
	const isWarning = useGetResponsiveValue<boolean>(isWarningProp);

	const labelPosition = useGetResponsiveValue<CheckboxLabelPosition>(labelPositionProp);

	const size = useGetResponsiveValue<CheckboxSize>(sizeProp);

	return {
		isActive,
		isChecked,
		isClickable,
		isCompact,
		isDisabled,
		isError,
		isFocused,
		isIndeterminate,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		labelPosition,
		size
	};
};

export default useCheckboxResponsiveValues;
