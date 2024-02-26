import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import {
	DEFAULT_STEPPER_ALIGN,
	DEFAULT_STEPPER_INDEX,
	DEFAULT_STEPPER_IS_CONSECUTIVELY,
	DEFAULT_STEPPER_IS_DISABLED,
	DEFAULT_STEPPER_IS_FITTED,
	DEFAULT_STEPPER_ORIENTATION,
	DEFAULT_STEPPER_SIZE,
	DEFAULT_STEPPER_TOTAL,
	DEFAULT_STEPPER_VARIANT
} from '../constants';
import type {
	StepperAlign,
	StepperElement,
	StepperOrientation,
	StepperProps,
	StepperSize,
	StepperVariant
} from '../types';

type PickedStepperProps =
	| 'align'
	| 'index'
	| 'total'
	| 'isConsecutively'
	| 'isDisabled'
	| 'isFitted'
	| 'orientation'
	| 'size'
	| 'variant'
	| 'spacing';
type UseStepperResponsiveValuesProps<Element extends StepperElement> = Partial<
	Pick<StepperProps<Element>, PickedStepperProps>
>;

const useStepperResponsiveValues = <Element extends StepperElement>(
	props: UseStepperResponsiveValuesProps<Element>
) => {
	const {
		align: alignProp = DEFAULT_STEPPER_ALIGN,
		index: indexProp = DEFAULT_STEPPER_INDEX,
		total: totalProp = DEFAULT_STEPPER_TOTAL,
		isConsecutively: isConsecutivelyProp = DEFAULT_STEPPER_IS_CONSECUTIVELY,
		isDisabled: isDisabledProp = DEFAULT_STEPPER_IS_DISABLED,
		isFitted: isFittedProp = DEFAULT_STEPPER_IS_FITTED,
		orientation: orientationProp = DEFAULT_STEPPER_ORIENTATION,
		size: sizeProp = DEFAULT_STEPPER_SIZE,
		spacing: spacingProp = DEFAULT_SPACING,
		variant: variantProp = DEFAULT_STEPPER_VARIANT
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
