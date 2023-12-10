import { useMemo } from 'react';

import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_STEPPER_SIZE__, __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__ } from '../constants';
import type { StepperProps } from '../types';

import { useStepperResponsiveValues } from '.';

type UseStepperStepFontSizeProps = Pick<StepperProps, 'size'>;

const useStepperStepFontSize = (props: UseStepperStepFontSizeProps): number => {
	const { size: sizeProp = __DEFAULT_STEPPER_SIZE__ } = props;

	const { size } = useStepperResponsiveValues({ size: sizeProp });

	const fontSize = useMemo<number>(() => {
		return getFontSizeHeight(size, __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__);
	}, [size]);

	return fontSize;
};

export default useStepperStepFontSize;
