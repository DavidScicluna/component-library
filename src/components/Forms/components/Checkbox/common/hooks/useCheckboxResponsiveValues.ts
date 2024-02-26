import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import {
	DEFAULT_CHECKBOX_IS_ACTIVE,
	DEFAULT_CHECKBOX_IS_CHECKED,
	DEFAULT_CHECKBOX_IS_CLICKABLE,
	DEFAULT_CHECKBOX_IS_COMPACT,
	DEFAULT_CHECKBOX_IS_DISABLED,
	DEFAULT_CHECKBOX_IS_ERROR,
	DEFAULT_CHECKBOX_IS_FOCUSED,
	DEFAULT_CHECKBOX_IS_INDETERMINATE,
	DEFAULT_CHECKBOX_IS_OUTLINED,
	DEFAULT_CHECKBOX_IS_READONLY,
	DEFAULT_CHECKBOX_IS_REQUIRED,
	DEFAULT_CHECKBOX_IS_SUCCESS,
	DEFAULT_CHECKBOX_IS_WARNING,
	DEFAULT_CHECKBOX_LABEL_POSITION,
	DEFAULT_CHECKBOX_SIZE
} from '../constants';
import type { CheckboxLabelPosition, CheckboxProps, CheckboxSize } from '../types';

type PickedCheckboxProps =
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
	| 'size';
type UseCheckboxResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<CheckboxProps<Element>, PickedCheckboxProps>
>;

const useCheckboxResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseCheckboxResponsiveValuesProps<Element>
) => {
	const {
		isActive: isActiveProp = DEFAULT_CHECKBOX_IS_ACTIVE,
		isChecked: isCheckedProp = DEFAULT_CHECKBOX_IS_CHECKED,
		isClickable: isClickableProp = DEFAULT_CHECKBOX_IS_CLICKABLE,
		isCompact: isCompactProp = DEFAULT_CHECKBOX_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_CHECKBOX_IS_DISABLED,
		isError: isErrorProp = DEFAULT_CHECKBOX_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_CHECKBOX_IS_FOCUSED,
		isIndeterminate: isIndeterminateProp = DEFAULT_CHECKBOX_IS_INDETERMINATE,
		isOutlined: isOutlinedProp = DEFAULT_CHECKBOX_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_CHECKBOX_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_CHECKBOX_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_CHECKBOX_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_CHECKBOX_IS_WARNING,
		labelPosition: labelPositionProp = DEFAULT_CHECKBOX_LABEL_POSITION,
		size: sizeProp = DEFAULT_CHECKBOX_SIZE
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
