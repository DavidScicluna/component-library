import { useContext } from 'react';

import { __DEFAULT_METHOD__, __DEFAULT_SPACING__ } from '@common/constants';

import { StepperContext } from '../../Stepper';
import {
	__DEFAULT_STEPPER_ALIGN__,
	__DEFAULT_STEPPER_ID__,
	__DEFAULT_STEPPER_INDEX__,
	__DEFAULT_STEPPER_IS_CONSECUTIVELY__,
	__DEFAULT_STEPPER_IS_DISABLED__,
	__DEFAULT_STEPPER_IS_FITTED__,
	__DEFAULT_STEPPER_ORIENTATION__,
	__DEFAULT_STEPPER_SIZE__,
	__DEFAULT_STEPPER_TOTAL__,
	__DEFAULT_STEPPER_VARIANT__
} from '../constants';
import type { StepperContext as StepperContextType, StepperElement } from '../types';

import { useStepperResponsiveValues } from '.';

const useStepperContext = <Element extends StepperElement>() => {
	const {
		color,
		colorMode,
		id = __DEFAULT_STEPPER_ID__,
		align: alignProp = __DEFAULT_STEPPER_ALIGN__,
		index: indexProp = __DEFAULT_STEPPER_INDEX__,
		total: totalProp = __DEFAULT_STEPPER_TOTAL__,
		isConsecutively: isConsecutivelyProp = __DEFAULT_STEPPER_IS_CONSECUTIVELY__,
		isDisabled: isDisabledProp = __DEFAULT_STEPPER_IS_DISABLED__,
		isFitted: isFittedProp = __DEFAULT_STEPPER_IS_FITTED__,
		onChange = __DEFAULT_METHOD__,
		orientation: orientationProp = __DEFAULT_STEPPER_ORIENTATION__,
		size: sizeProp = __DEFAULT_STEPPER_SIZE__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		variant: variantProp = __DEFAULT_STEPPER_VARIANT__
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
