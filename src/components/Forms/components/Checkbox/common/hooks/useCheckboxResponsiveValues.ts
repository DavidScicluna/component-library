import { useGetResponsiveValue } from '@common/hooks';

import type { CheckboxNonResponsiveValueProps, CheckboxResponsiveValueProps } from '../types';

type UseCheckboxResponsiveValuesProps = Partial<CheckboxResponsiveValueProps>;
type UseCheckboxResponsiveValuesReturn = CheckboxNonResponsiveValueProps;

const useCheckboxResponsiveValues = (props: UseCheckboxResponsiveValuesProps): UseCheckboxResponsiveValuesReturn => {
	const {
		isActive: isActiveProp,
		isChecked: isCheckedProp,
		isClickable: isClickableProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isIndeterminate: isIndeterminateProp,
		isOutlined: isOutlinedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		labelPosition: labelPositionProp,
		size: sizeProp
	} = props;

	const isActive = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isActive']>(isActiveProp);
	const isChecked = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isChecked']>(isCheckedProp);
	const isClickable = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isClickable']>(isClickableProp);
	const isCompact = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isError = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isIndeterminate =
		useGetResponsiveValue<CheckboxNonResponsiveValueProps['isIndeterminate']>(isIndeterminateProp);
	const isOutlined = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isOutlined']>(isOutlinedProp);
	const isReadOnly = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<CheckboxNonResponsiveValueProps['isWarning']>(isWarningProp);

	const labelPosition = useGetResponsiveValue<CheckboxNonResponsiveValueProps['labelPosition']>(labelPositionProp);

	const size = useGetResponsiveValue<CheckboxNonResponsiveValueProps['size']>(sizeProp);

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
