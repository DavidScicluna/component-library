import { StepProps } from '../../../../common/types';

export type StepLabelProps = Pick<StepProps, 'index' | 'title' | 'subtitle'> & {
	hasIcon?: boolean;
};
