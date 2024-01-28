import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_SWITCH_HAS_IO_LABEL__,
	__DEFAULT_SWITCH_IS_ACTIVE__,
	__DEFAULT_SWITCH_IS_CHECKED__,
	__DEFAULT_SWITCH_IS_CLICKABLE__,
	__DEFAULT_SWITCH_IS_COMPACT__,
	__DEFAULT_SWITCH_IS_DISABLED__,
	__DEFAULT_SWITCH_IS_ERROR__,
	__DEFAULT_SWITCH_IS_FOCUSED__,
	__DEFAULT_SWITCH_IS_OUTLINED__,
	__DEFAULT_SWITCH_IS_READONLY__,
	__DEFAULT_SWITCH_IS_REQUIRED__,
	__DEFAULT_SWITCH_IS_SUCCESS__,
	__DEFAULT_SWITCH_IS_WARNING__,
	__DEFAULT_SWITCH_LABEL_POSITION__,
	__DEFAULT_SWITCH_SIZE__
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
		hasIOLabel: hasIOLabelProp = __DEFAULT_SWITCH_HAS_IO_LABEL__,
		isActive: isActiveProp = __DEFAULT_SWITCH_IS_ACTIVE__,
		isChecked: isCheckedProp = __DEFAULT_SWITCH_IS_CHECKED__,
		isClickable: isClickableProp = __DEFAULT_SWITCH_IS_CLICKABLE__,
		isCompact: isCompactProp = __DEFAULT_SWITCH_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_SWITCH_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_SWITCH_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_SWITCH_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_SWITCH_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_SWITCH_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_SWITCH_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_SWITCH_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_SWITCH_IS_WARNING__,
		labelPosition: labelPositionProp = __DEFAULT_SWITCH_LABEL_POSITION__,
		size: sizeProp = __DEFAULT_SWITCH_SIZE__
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
