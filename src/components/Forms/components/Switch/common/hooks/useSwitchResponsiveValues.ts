import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import {
	DEFAULT_SWITCH_HAS_IO_LABEL,
	DEFAULT_SWITCH_IS_ACTIVE,
	DEFAULT_SWITCH_IS_CHECKED,
	DEFAULT_SWITCH_IS_CLICKABLE,
	DEFAULT_SWITCH_IS_COMPACT,
	DEFAULT_SWITCH_IS_DISABLED,
	DEFAULT_SWITCH_IS_ERROR,
	DEFAULT_SWITCH_IS_FOCUSED,
	DEFAULT_SWITCH_IS_OUTLINED,
	DEFAULT_SWITCH_IS_READONLY,
	DEFAULT_SWITCH_IS_REQUIRED,
	DEFAULT_SWITCH_IS_SUCCESS,
	DEFAULT_SWITCH_IS_WARNING,
	DEFAULT_SWITCH_LABEL_POSITION,
	DEFAULT_SWITCH_SIZE
} from '../constants';
import type { SwitchLabelPosition, SwitchProps, SwitchSize } from '../types';

type PickedSwitchProps =
	| 'hasIOLabel'
	| 'isActive'
	| 'isChecked'
	| 'isClickable'
	| 'isCompact'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'labelPosition'
	| 'size';
type UseSwitchResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<SwitchProps<Element>, PickedSwitchProps>
>;

const useSwitchResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseSwitchResponsiveValuesProps<Element>
) => {
	const {
		hasIOLabel: hasIOLabelProp = DEFAULT_SWITCH_HAS_IO_LABEL,
		isActive: isActiveProp = DEFAULT_SWITCH_IS_ACTIVE,
		isChecked: isCheckedProp = DEFAULT_SWITCH_IS_CHECKED,
		isClickable: isClickableProp = DEFAULT_SWITCH_IS_CLICKABLE,
		isCompact: isCompactProp = DEFAULT_SWITCH_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_SWITCH_IS_DISABLED,
		isError: isErrorProp = DEFAULT_SWITCH_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_SWITCH_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_SWITCH_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_SWITCH_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_SWITCH_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_SWITCH_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_SWITCH_IS_WARNING,
		labelPosition: labelPositionProp = DEFAULT_SWITCH_LABEL_POSITION,
		size: sizeProp = DEFAULT_SWITCH_SIZE
	} = props;

	const hasIOLabel = useGetResponsiveValue<boolean>(hasIOLabelProp);

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isChecked = useGetResponsiveValue<boolean>(isCheckedProp);
	const isClickable = useGetResponsiveValue<boolean>(isClickableProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isError = useGetResponsiveValue<boolean>(isErrorProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<boolean>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<boolean>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<boolean>(isSuccessProp);
	const isWarning = useGetResponsiveValue<boolean>(isWarningProp);

	const labelPosition = useGetResponsiveValue<SwitchLabelPosition>(labelPositionProp);

	const size = useGetResponsiveValue<SwitchSize>(sizeProp);

	return {
		hasIOLabel,
		isActive,
		isChecked,
		isClickable,
		isCompact,
		isDisabled,
		isError,
		isFocused,
		isOutlined,
		isReadOnly,
		isRequired,
		isSuccess,
		isWarning,
		labelPosition,
		size
	};
};

export default useSwitchResponsiveValues;
