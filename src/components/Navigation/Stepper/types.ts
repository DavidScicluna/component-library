import { ColorMode, StackProps } from '@chakra-ui/react';

import { Color } from '../../../theme/types';

export type StepperRef = HTMLDivElement | null;

export type StepperColor = Exclude<Color, 'transparent' | 'black' | 'white'>;

export type OnChangeProps = { index: number };

export type StepperProps = Omit<StackProps, 'onChange'> & {
	activeStep: number;
	color?: StepperColor;
	colorMode?: ColorMode;
	onChange: (props: OnChangeProps) => void;
	onCancel: () => void;
	onSubmit: () => void;
};

export type StepperContext = Pick<
	StepperProps,
	'activeStep' | 'color' | 'colorMode' | 'onChange' | 'onCancel' | 'onSubmit'
>;
