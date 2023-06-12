import { StepProps } from '../../../../common/types';

export type StepTitleProps = Pick<StepProps, 'index' | 'title'> & {
	hasIcon?: boolean;
};
