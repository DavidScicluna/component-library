import { ColorMode, StackProps } from '@chakra-ui/react';

import { AppColor, Nullable } from '../../../../../common/types';

export type OnChangeProps = { index: number };

export type StepperProps = Omit<StackProps, 'color' | 'colorMode' | 'onChange'> & {
	activeStep: number;
	color?: AppColor;
	colorMode?: ColorMode;
	onChange: (props: OnChangeProps) => void;
	onCancel: () => void;
	onSubmit: () => void;
};

export type StepperRef = Nullable<HTMLDivElement>;

type Picked = 'activeStep' | 'color' | 'colorMode' | 'onChange' | 'onCancel' | 'onSubmit';

export type StepperContext = Pick<StepperProps, Picked>;
