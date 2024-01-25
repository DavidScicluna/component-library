import { useMemo } from 'react';

import type { ThemeFontSize, ThemeSpacing } from '@common/types';

import { __DEFAULT_STEPPER_SIZE__ } from '../constants';
import type { StepperElement, StepperProps } from '../types';

import { useStepperResponsiveValues } from '.';

type StepperSizeConfig = {
	fontSize: Record<'title' | 'subtitle' | 'status', ThemeFontSize>;
	icon: ThemeFontSize;
	padding: Record<'x' | 'y', ThemeSpacing>;
	spacing: ThemeSpacing;
};

type UseStepperSizeConfigProps<Element extends StepperElement> = Pick<StepperProps<Element>, 'size'>;
type UseStepperSizeConfigReturn = StepperSizeConfig;

const useStepperSizeConfig = <Element extends StepperElement>(
	props: UseStepperSizeConfigProps<Element>
): UseStepperSizeConfigReturn => {
	const { size: sizeProp = __DEFAULT_STEPPER_SIZE__ } = props;

	const { size } = useStepperResponsiveValues<Element>({ size: sizeProp });

	const config = useMemo<StepperSizeConfig>(() => {
		switch (size) {
			case 'xs':
				return {
					fontSize: { title: 'sm', subtitle: 'xs', status: 'xs' },
					icon: 'md',
					padding: { x: 2, y: 1 },
					spacing: 1
				};
			case 'sm':
				return {
					fontSize: { title: 'md', subtitle: 'xs', status: 'xs' },
					icon: 'xl',
					padding: { x: 2.5, y: 1.25 },
					spacing: 1.5
				};
			case 'lg':
				return {
					fontSize: { title: 'xl', subtitle: 'sm', status: 'sm' },
					icon: '2xl',
					padding: { x: 3.5, y: 1.75 },
					spacing: 2
				};
			case 'xl':
				return {
					fontSize: { title: '2xl', subtitle: 'sm', status: 'sm' },
					icon: '3xl',
					padding: { x: 4, y: 2 },
					spacing: 2
				};
			default:
				return {
					fontSize: { title: 'lg', subtitle: 'xs', status: 'xs' },
					icon: '2xl',
					padding: { x: 3, y: 1.5 },
					spacing: 1.5
				};
		}
	}, [size]);

	return config;
};

export default useStepperSizeConfig;
