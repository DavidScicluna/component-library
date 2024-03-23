import { useGetResponsiveValue } from '@common/hooks';

import type { RadioNonResponsiveValueProps, RadioResponsiveValueProps } from '../types';

type UseRadioResponsiveValuesProps = Partial<RadioResponsiveValueProps>;
type UseRadioResponsiveValuesReturn = RadioNonResponsiveValueProps;

const useRadioResponsiveValues = (props: UseRadioResponsiveValuesProps): UseRadioResponsiveValuesReturn => {
	const {
		isActive: isActiveProp,
		isChecked: isCheckedProp,
		isClickable: isClickableProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		labelPosition: labelPositionProp,
		size: sizeProp
	} = props;

	const isActive = useGetResponsiveValue<RadioNonResponsiveValueProps['isActive']>(isActiveProp);
	const isChecked = useGetResponsiveValue<RadioNonResponsiveValueProps['isChecked']>(isCheckedProp);
	const isClickable = useGetResponsiveValue<RadioNonResponsiveValueProps['isClickable']>(isClickableProp);
	const isCompact = useGetResponsiveValue<RadioNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<RadioNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isError = useGetResponsiveValue<RadioNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<RadioNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<RadioNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<RadioNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<RadioNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<RadioNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<RadioNonResponsiveValueProps['isWarning']>(isWarningProp);

	const labelPosition = useGetResponsiveValue<RadioNonResponsiveValueProps['labelPosition']>(labelPositionProp);

	const size = useGetResponsiveValue<RadioNonResponsiveValueProps['size']>(sizeProp);

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
