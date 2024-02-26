import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { DEFAULT_STEPPER_SIZE, DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE } from '../constants';
import type { StepperElement, StepperProps } from '../types';

import { useStepperResponsiveValues } from '.';

type UseStepperStepFontSizeProps<Element extends StepperElement> = Pick<StepperProps<Element>, 'size'>;

const useStepperStepFontSize = <Element extends StepperElement>(
	props: UseStepperStepFontSizeProps<Element>
): number => {
	const { size: sizeProp = DEFAULT_STEPPER_SIZE } = props;

	const { size } = useStepperResponsiveValues<Element>({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE);
	}, [size]);

	return fontSize;
};

export default useStepperStepFontSize;
