import { Theme, Style } from '@davidscicluna/component-library';

import { StepperProps } from '../../../../types';
import { Step } from '../../components/Step/types';

export type StepStyleProps = Pick<StepperProps, 'color' | 'colorMode'> & {
	theme: Theme;
} & Pick<Step, 'status'>;

export type StepStyleReturn = {
	step: Style;
	disabled: Style;
};
