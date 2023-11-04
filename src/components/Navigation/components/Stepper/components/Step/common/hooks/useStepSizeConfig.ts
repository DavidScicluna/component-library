import { useMemo } from 'react';

import type { ThemeFontSize, ThemeSpacing } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import { useStepperContext } from '@components/Navigation/components/Stepper/common/hooks';

import { __DEFAULT_STEP_IS_COMPACT__ } from '../constants';
import type { StepDefaultElement, StepElement, StepProps } from '../types';

type StepperizeConfig = {
	fontSize: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	spacing: ThemeSpacing;
};

type UseStepperizeConfigProps<Element extends StepElement = StepDefaultElement> = Pick<StepProps<Element>, 'isCompact'>;
type UseStepperizeConfigReturn = StepperizeConfig;

const useStepperizeConfig = <Element extends StepElement = StepDefaultElement>(
	props: UseStepperizeConfigProps<Element>
): UseStepperizeConfigReturn => {
	const { size } = useStepperContext();

	const { isCompact = __DEFAULT_STEP_IS_COMPACT__ } = props;

	const config = useMemo<StepperizeConfig>(() => {
		const c = getResponsiveValue<boolean>(isCompact);

		switch (size) {
			case 'xs':
				return {
					fontSize: 'xs',
					padding: { x: c ? 1 : 2, y: c ? 0.25 : 1 },
					spacing: c ? 1 : 2
				};
			case 'sm':
				return {
					fontSize: 'sm',
					padding: { x: c ? 1.25 : 2.5, y: c ? 0.5 : 1.25 },
					spacing: c ? 1.25 : 2.5
				};
			case 'lg':
				return {
					fontSize: 'lg',
					padding: { x: c ? 1.75 : 3.5, y: c ? 1 : 1.75 },
					spacing: c ? 1.75 : 3.5
				};
			case 'xl':
				return {
					fontSize: 'xl',
					padding: { x: c ? 2 : 4, y: c ? 1.25 : 2 },
					spacing: c ? 2 : 4
				};
			default:
				return {
					fontSize: 'md',
					padding: { x: c ? 1.5 : 3, y: c ? 0.75 : 1.5 },
					spacing: c ? 1.5 : 3
				};
		}
	}, [isCompact, size]);

	return config;
};

export default useStepperizeConfig;
