import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_STEP_IS_ACTIVE__,
	__DEFAULT_STEP_IS_COMPACT__,
	__DEFAULT_STEP_IS_DISABLED__,
	__DEFAULT_STEP_IS_UPPERCASE__,
	__DEFAULT_STEP_STATUS__
} from '../constants';
import type { StepProps, StepStatus } from '../types';

type UseStepResponsiveValuesProps = Partial<
	Pick<StepProps, 'isActive' | 'isCompact' | 'isDisabled' | 'isUppercase' | 'status'>
>;

const useStepResponsiveValues = (props: UseStepResponsiveValuesProps) => {
	const {
		isActive: isActiveProp = __DEFAULT_STEP_IS_ACTIVE__,
		isCompact: isCompactProp = __DEFAULT_STEP_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_STEP_IS_DISABLED__,
		isUppercase: isUppercaseProp = __DEFAULT_STEP_IS_UPPERCASE__,
		status: statusProp = __DEFAULT_STEP_STATUS__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	const status = useGetResponsiveValue<StepStatus>(statusProp);

	return { isActive, isCompact, isDisabled, isUppercase, status };
};

export default useStepResponsiveValues;
