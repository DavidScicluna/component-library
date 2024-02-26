import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import {
	DEFAULT_RADIO_IS_ACTIVE,
	DEFAULT_RADIO_IS_CHECKED,
	DEFAULT_RADIO_IS_CLICKABLE,
	DEFAULT_RADIO_IS_COMPACT,
	DEFAULT_RADIO_IS_DISABLED,
	DEFAULT_RADIO_IS_ERROR,
	DEFAULT_RADIO_IS_FOCUSED,
	DEFAULT_RADIO_IS_OUTLINED,
	DEFAULT_RADIO_IS_READONLY,
	DEFAULT_RADIO_IS_REQUIRED,
	DEFAULT_RADIO_IS_SUCCESS,
	DEFAULT_RADIO_IS_WARNING,
	DEFAULT_RADIO_LABEL_POSITION,
	DEFAULT_RADIO_SIZE
} from '../constants';
import type { RadioLabelPosition, RadioProps, RadioSize } from '../types';

type PickedRadioProps =
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
type UseRadioResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<RadioProps<Element>, PickedRadioProps>
>;

const useRadioResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseRadioResponsiveValuesProps<Element>
) => {
	const {
		isActive: isActiveProp = DEFAULT_RADIO_IS_ACTIVE,
		isChecked: isCheckedProp = DEFAULT_RADIO_IS_CHECKED,
		isClickable: isClickableProp = DEFAULT_RADIO_IS_CLICKABLE,
		isCompact: isCompactProp = DEFAULT_RADIO_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_RADIO_IS_DISABLED,
		isError: isErrorProp = DEFAULT_RADIO_IS_ERROR,
		isFocused: isFocusedProp = DEFAULT_RADIO_IS_FOCUSED,
		isOutlined: isOutlinedProp = DEFAULT_RADIO_IS_OUTLINED,
		isReadOnly: isReadOnlyProp = DEFAULT_RADIO_IS_READONLY,
		isRequired: isRequiredProp = DEFAULT_RADIO_IS_REQUIRED,
		isSuccess: isSuccessProp = DEFAULT_RADIO_IS_SUCCESS,
		isWarning: isWarningProp = DEFAULT_RADIO_IS_WARNING,
		labelPosition: labelPositionProp = DEFAULT_RADIO_LABEL_POSITION,
		size: sizeProp = DEFAULT_RADIO_SIZE
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
