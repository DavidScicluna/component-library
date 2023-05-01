import { StepListProps } from '../../../../common/types';

export type NextProps = Pick<StepListProps, 'isDisabled'> & {
	isLast?: boolean;
	hasErrors?: boolean;
	hasWarnings?: boolean;
	hasIdle?: boolean;
	onNext: () => void;
};
