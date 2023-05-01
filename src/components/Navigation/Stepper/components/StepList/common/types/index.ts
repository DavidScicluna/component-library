import { Step as StepType } from '../../components/Step/common/types';

export type Step = Omit<StepType, 'index'>;

export type StepListProps = {
	children: Step[];
	isDisabled?: boolean;
};
