import { ColorMode, StackProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../common/types';
import { Color } from '../../../../../theme/types';

export type StepperColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type OnChangeProps = { index: number };

export type StepperProps = Omit<StackProps, 'color' | 'colorMode' | 'onChange'> & {
	activeStep: number;
	color?: StepperColor;
	colorMode?: ColorMode;
	onChange: (props: OnChangeProps) => void;
	onCancel: () => void;
	onSubmit: () => void;
};

export type StepperRef = Nullable<HTMLDivElement>;

export type StepperContext = Pick<
	StepperProps,
	'activeStep' | 'color' | 'colorMode' | 'onChange' | 'onCancel' | 'onSubmit'
>;
