import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	__DEFAULT_STEPPER_ALIGN__,
	__DEFAULT_STEPPER_INDEX__,
	__DEFAULT_STEPPER_IS_CONSECUTIVELY__,
	__DEFAULT_STEPPER_IS_DISABLED__,
	__DEFAULT_STEPPER_IS_FITTED__,
	__DEFAULT_STEPPER_ORIENTATION__,
	__DEFAULT_STEPPER_SIZE__,
	__DEFAULT_STEPPER_TOTAL__,
	__DEFAULT_STEPPER_VARIANT__
} from '../constants';
import type { StepperAlign, StepperOrientation, StepperProps, StepperSize, StepperVariant } from '../types';

type UseStepperResponsiveValuesProps = Partial<
	Pick<
		StepperProps,
		| 'align'
		| 'index'
		| 'total'
		| 'isConsecutively'
		| 'isDisabled'
		| 'isFitted'
		| 'orientation'
		| 'size'
		| 'variant'
		| 'spacing'
	>
>;

const useStepperResponsiveValues = (props: UseStepperResponsiveValuesProps) => {
	const {
		align: alignProp = __DEFAULT_STEPPER_ALIGN__,
		index: indexProp = __DEFAULT_STEPPER_INDEX__,
		total: totalProp = __DEFAULT_STEPPER_TOTAL__,
		isConsecutively: isConsecutivelyProp = __DEFAULT_STEPPER_IS_CONSECUTIVELY__,
		isDisabled: isDisabledProp = __DEFAULT_STEPPER_IS_DISABLED__,
		isFitted: isFittedProp = __DEFAULT_STEPPER_IS_FITTED__,
		orientation: orientationProp = __DEFAULT_STEPPER_ORIENTATION__,
		size: sizeProp = __DEFAULT_STEPPER_SIZE__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		variant: variantProp = __DEFAULT_STEPPER_VARIANT__
	} = props;

	const align = useGetResponsiveValue<StepperAlign>(alignProp);
	const index = useGetResponsiveValue<number>(indexProp);
	const total = useGetResponsiveValue<number>(totalProp);

	const isConsecutively = useGetResponsiveValue<boolean>(isConsecutivelyProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFitted = useGetResponsiveValue<boolean>(isFittedProp);

	const orientation = useGetResponsiveValue<StepperOrientation>(orientationProp);
	const size = useGetResponsiveValue<StepperSize>(sizeProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const variant = useGetResponsiveValue<StepperVariant>(variantProp);

	return {
		align,
		index,
		total,
		isConsecutively,
		isDisabled,
		isFitted,
		orientation,
		size,
		spacing,
		variant
	};
};

export default useStepperResponsiveValues;
