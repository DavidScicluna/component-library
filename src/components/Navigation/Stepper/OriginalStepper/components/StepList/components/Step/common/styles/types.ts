import { Style } from '../../../../../../../../../../common/types';
import { Theme } from '../../../../../../../../../../theme/types';
import { StepperProps } from '../../../../../../common/types';
import { StepProps } from '../types';

export type StepStyleProps = Pick<StepperProps, 'color' | 'colorMode' | 'isConsecutively' | 'variant'> & {
	theme: Theme;
} & Pick<StepProps, 'isSelected'>;

export type StepStyleReturn = {
	step: Style;
	active: Style;
	disabled: Style;
};
