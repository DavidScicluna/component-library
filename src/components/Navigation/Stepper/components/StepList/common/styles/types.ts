import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';
import { StepperProps } from '../../../../common/types';
import { Step } from '../../components/Step/common/types';

export type StepStyleProps = Pick<StepperProps, 'color' | 'colorMode'> & {
	theme: Theme;
} & Pick<Step, 'status'>;

export type StepStyleReturn = {
	step: Style;
	disabled: Style;
};
