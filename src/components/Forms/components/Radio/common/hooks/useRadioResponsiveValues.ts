import type { ElementType } from 'react';

import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import {
	__DEFAULT_RADIO_IS_ACTIVE__,
	__DEFAULT_RADIO_IS_CHECKED__,
	__DEFAULT_RADIO_IS_CLICKABLE__,
	__DEFAULT_RADIO_IS_COMPACT__,
	__DEFAULT_RADIO_IS_DISABLED__,
	__DEFAULT_RADIO_IS_ERROR__,
	__DEFAULT_RADIO_IS_FOCUSED__,
	__DEFAULT_RADIO_IS_OUTLINED__,
	__DEFAULT_RADIO_IS_READONLY__,
	__DEFAULT_RADIO_IS_REQUIRED__,
	__DEFAULT_RADIO_IS_SUCCESS__,
	__DEFAULT_RADIO_IS_WARNING__,
	__DEFAULT_RADIO_LABEL_POSITION__,
	__DEFAULT_RADIO_SIZE__
} from '../constants';
import type { RadioLabelPosition, RadioProps, RadioSize } from '../types';

type UseRadioResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	RadioProps<Element>,
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
	| 'size'
>;

const useRadioResponsiveValues = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseRadioResponsiveValuesProps<Element>
) => {
	const {
		isActive: isActiveProp = __DEFAULT_RADIO_IS_ACTIVE__,
		isChecked: isCheckedProp = __DEFAULT_RADIO_IS_CHECKED__,
		isClickable: isClickableProp = __DEFAULT_RADIO_IS_CLICKABLE__,
		isCompact: isCompactProp = __DEFAULT_RADIO_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_RADIO_IS_DISABLED__,
		isError: isErrorProp = __DEFAULT_RADIO_IS_ERROR__,
		isFocused: isFocusedProp = __DEFAULT_RADIO_IS_FOCUSED__,
		isOutlined: isOutlinedProp = __DEFAULT_RADIO_IS_OUTLINED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_RADIO_IS_READONLY__,
		isRequired: isRequiredProp = __DEFAULT_RADIO_IS_REQUIRED__,
		isSuccess: isSuccessProp = __DEFAULT_RADIO_IS_SUCCESS__,
		isWarning: isWarningProp = __DEFAULT_RADIO_IS_WARNING__,
		labelPosition: labelPositionProp = __DEFAULT_RADIO_LABEL_POSITION__,
		size: sizeProp = __DEFAULT_RADIO_SIZE__
	} = props;

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

	const labelPosition = useGetResponsiveValue<RadioLabelPosition>(labelPositionProp);

	const size = useGetResponsiveValue<RadioSize>(sizeProp);

	return {
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

export default useRadioResponsiveValues;
