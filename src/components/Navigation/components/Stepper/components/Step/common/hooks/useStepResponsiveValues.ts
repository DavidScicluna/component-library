import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_STEP_IS_ACTIVE,
	DEFAULT_STEP_IS_COMPACT,
	DEFAULT_STEP_IS_DISABLED,
	DEFAULT_STEP_IS_UPPERCASE,
	DEFAULT_STEP_STATUS
} from '../constants';
import type { StepElement, StepProps, StepStatus } from '../types';

type UseStepResponsiveValuesProps<Element extends StepElement> = Partial<
	Pick<StepProps<Element>, 'isActive' | 'isCompact' | 'isDisabled' | 'isUppercase' | 'status'>
>;

const useStepResponsiveValues = <Element extends StepElement>(props: UseStepResponsiveValuesProps<Element>) => {
	const {
		isActive: isActiveProp = DEFAULT_STEP_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_STEP_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_STEP_IS_DISABLED,
		isUppercase: isUppercaseProp = DEFAULT_STEP_IS_UPPERCASE,
		status: statusProp = DEFAULT_STEP_STATUS
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isUppercase = useGetResponsiveValue<boolean>(isUppercaseProp);

	const status = useGetResponsiveValue<StepStatus>(statusProp);

	return { isActive, isCompact, isDisabled, isUppercase, status };
};

export default useStepResponsiveValues;
