import { Nullable } from '../../../../../../common/types';
import { CommonStepperProps } from '../../../common/types';

export type StepperOnChangeProps = { index: number };

export type StepperProps = CommonStepperProps & {
	isConsecutively?: boolean;
	isDisabled?: boolean;
	onChange?: (props: StepperOnChangeProps) => void;
};

export type StepperRef = Nullable<HTMLDivElement>;

type Picked =
	| 'activeStep'
	| 'totalSteps'
	| 'color'
	| 'colorMode'
	| 'isConsecutively'
	| 'isDisabled'
	| 'isFitted'
	// | 'orientation'
	| 'onChange'
	| 'size'
	| 'variant';

export type StepperContext = Pick<StepperProps, Picked>;
