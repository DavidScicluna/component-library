import { useContext } from 'react';

import { DEFAULT_METHOD, DEFAULT_SPACING } from '@common/constants';

import { StepperContext } from '../../Stepper';
import {
	DEFAULT_STEPPER_ALIGN,
	DEFAULT_STEPPER_ID,
	DEFAULT_STEPPER_INDEX,
	DEFAULT_STEPPER_IS_CONSECUTIVELY,
	DEFAULT_STEPPER_IS_DISABLED,
	DEFAULT_STEPPER_IS_FITTED,
	DEFAULT_STEPPER_ORIENTATION,
	DEFAULT_STEPPER_SIZE,
	DEFAULT_STEPPER_TOTAL,
	DEFAULT_STEPPER_VARIANT
} from '../constants';
import type { StepperContext as StepperContextType, StepperElement } from '../types';

import { useStepperResponsiveValues } from '.';

const useStepperContext = <Element extends StepperElement>() => {
	const {
		color,
		colorMode,
		id = DEFAULT_STEPPER_ID,
		align: alignProp = DEFAULT_STEPPER_ALIGN,
		index: indexProp = DEFAULT_STEPPER_INDEX,
		total: totalProp = DEFAULT_STEPPER_TOTAL,
		isConsecutively: isConsecutivelyProp = DEFAULT_STEPPER_IS_CONSECUTIVELY,
		isDisabled: isDisabledProp = DEFAULT_STEPPER_IS_DISABLED,
		isFitted: isFittedProp = DEFAULT_STEPPER_IS_FITTED,
		onChange = DEFAULT_METHOD,
		orientation: orientationProp = DEFAULT_STEPPER_ORIENTATION,
		size: sizeProp = DEFAULT_STEPPER_SIZE,
		spacing: spacingProp = DEFAULT_SPACING,
		variant: variantProp = DEFAULT_STEPPER_VARIANT
	} = useContext<StepperContextType<Element>>(StepperContext);

	const { align, index, total, isConsecutively, isDisabled, isFitted, orientation, size, spacing, variant } =
		useStepperResponsiveValues<Element>({
			align: alignProp,
			index: indexProp,
			total: totalProp,
			isConsecutively: isConsecutivelyProp,
			isDisabled: isDisabledProp,
			isFitted: isFittedProp,
			orientation: orientationProp,
			size: sizeProp,
			spacing: spacingProp,
			variant: variantProp
		});

	return {
		color,
		colorMode,
		id,
		align,
		index,
		total,
		isConsecutively,
		isDisabled,
		isFitted,
		onChange,
		orientation,
		size,
		spacing,
		variant
	};
};

export default useStepperContext;
