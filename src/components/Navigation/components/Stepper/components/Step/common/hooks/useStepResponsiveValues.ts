import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_STEP_IS_ACTIVE__,
	__DEFAULT_STEP_IS_COMPACT__,
	__DEFAULT_STEP_IS_DISABLED__,
	__DEFAULT_STEP_IS_UPPERCASE__,
	__DEFAULT_STEP_STATUS__
} from '../constants';
import type { StepDefaultElement, StepElement, StepProps, StepStatus } from '../types';

type UseStepResponsiveValuesProps<Element extends StepElement = StepDefaultElement> = Pick<
	StepProps<Element>,
	'isActive' | 'isCompact' | 'isDisabled' | 'isUppercase' | 'status'
>;

const useStepResponsiveValues = <Element extends StepElement = StepDefaultElement>(
	props: UseStepResponsiveValuesProps<Element>
) => {
	const {
		isActive: isActiveProp = __DEFAULT_STEP_IS_ACTIVE__,
		isCompact: isCompactProp = __DEFAULT_STEP_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_STEP_IS_DISABLED__,
		isUppercase: isUppercaseProp = __DEFAULT_STEP_IS_UPPERCASE__,
		status: statusProp = __DEFAULT_STEP_STATUS__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isStepDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	const status = useGetResponsiveValue<StepStatus>(statusProp);

	return { isActive, isCompact, isStepDisabled, isUppercase, status };
};

export default useStepResponsiveValues;