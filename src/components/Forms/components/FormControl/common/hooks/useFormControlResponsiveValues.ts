import { useGetResponsiveValue } from '@common/hooks';

import type { FormControlNonResponsiveValueProps, FormControlResponsiveValueProps } from '../types';

type UseFormControlResponsiveValuesProps = Partial<FormControlResponsiveValueProps>;
type UseFormControlResponsiveValuesReturn = FormControlNonResponsiveValueProps;

const useFormControlResponsiveValues = (
	props: UseFormControlResponsiveValuesProps
): UseFormControlResponsiveValuesReturn => {
	const {
		isDisabled: isDisabledProp,
		isError: isErrorProp,
		isFocused: isFocusedProp,
		isReadOnly: isReadOnlyProp,
		isRequired: isRequiredProp,
		isSuccess: isSuccessProp,
		isWarning: isWarningProp,
		size: sizeProp
	} = props;

	const isDisabled = useGetResponsiveValue<FormControlNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isError = useGetResponsiveValue<FormControlNonResponsiveValueProps['isError']>(isErrorProp);
	const isFocused = useGetResponsiveValue<FormControlNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isReadOnly = useGetResponsiveValue<FormControlNonResponsiveValueProps['isReadOnly']>(isReadOnlyProp);
	const isRequired = useGetResponsiveValue<FormControlNonResponsiveValueProps['isRequired']>(isRequiredProp);
	const isSuccess = useGetResponsiveValue<FormControlNonResponsiveValueProps['isSuccess']>(isSuccessProp);
	const isWarning = useGetResponsiveValue<FormControlNonResponsiveValueProps['isWarning']>(isWarningProp);

	const size = useGetResponsiveValue<FormControlNonResponsiveValueProps['size']>(sizeProp);

	return { isDisabled, isError, isFocused, isReadOnly, isRequired, isSuccess, isWarning, size };
};

export default useFormControlResponsiveValues;
