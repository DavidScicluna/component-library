import { useGetResponsiveValue } from '@common/hooks';

import type { SwitchNonResponsiveValueProps, SwitchResponsiveValueProps } from '../types';

type UseSwitchResponsiveValuesProps = Partial<SwitchResponsiveValueProps>;
type UseSwitchResponsiveValuesReturn = SwitchNonResponsiveValueProps;

const useSwitchResponsiveValues = (props: UseSwitchResponsiveValuesProps): UseSwitchResponsiveValuesReturn => {
	const {
		hasIOLabel: hasIOLabelProp,
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

	const hasIOLabel = useGetResponsiveValue<SwitchNonResponsiveValueProps['hasIOLabel']>(hasIOLabelProp);

	const isActive = useGetResponsiveValue<SwitchNonResponsiveValueProps['isActive']>(isActiveProp);
	const isChecked = useGetResponsiveValue<SwitchNonResponsiveValueProps['isChecked']>(isCheckedProp);
	const isClickable = useGetResponsiveValue<SwitchNonResponsiveValueProps['isClickable']>(isClickableProp);
	const isCompact = useGetResponsiveValue<SwitchNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<SwitchNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isError = useGetResponsiveValue<SwitchNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<SwitchNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isOutlined = useGetResponsiveValue<SwitchNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<SwitchNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<SwitchNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<SwitchNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<SwitchNonResponsiveValueProps['isWarning']>(isWarningProp);

	const labelPosition = useGetResponsiveValue<SwitchNonResponsiveValueProps['labelPosition']>(labelPositionProp);

	const size = useGetResponsiveValue<SwitchNonResponsiveValueProps['size']>(sizeProp);

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
