import type { ElementType } from 'react';
import { useMemo } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import { __DEFAULT_STEPPER_SIZE__, __DEFAULT_STEPPER_STEP_LINE_HEIGHT_SIZE__ } from '../constants';
import type { StepperProps } from '../types';

import { useStepperResponsiveValues } from '.';

type UseStepperStepFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	StepperProps<Element>,
	'size'
>;

const useStepperStepFontSize = <Element extends ElementType = PolymorphicDefaultElement>(
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
