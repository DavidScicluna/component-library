import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { FormLabelProps } from '../types';

export type FormLabelStyleProps = {
	theme: Theme;
} & Pick<FormLabelProps, 'colorMode' | 'size'>;

export type FormLabelStyleReturn = {
	formLabel: Style;
	disabled: Style;
};
