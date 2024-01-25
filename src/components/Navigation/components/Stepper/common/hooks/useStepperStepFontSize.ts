import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_STEPPER_SIZE__, __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__ } from '../constants';
import type { StepperElement, StepperProps } from '../types';

import { useStepperResponsiveValues } from '.';

type UseStepperStepFontSizeProps<Element extends StepperElement> = Pick<StepperProps<Element>, 'size'>;

const useStepperStepFontSize = <Element extends StepperElement>(
	props: UseStepperStepFontSizeProps<Element>
): number => {
	const { size: sizeProp = __DEFAULT_STEPPER_SIZE__ } = props;

	const { size } = useStepperResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useStepperStepFontSize;
