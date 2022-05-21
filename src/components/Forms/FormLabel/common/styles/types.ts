import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { FormLabelProps } from '../../types';

type Picked = 'colorMode' | 'size';

export type FormLabelStyleProps = {
	theme: Theme;
} & Pick<FormLabelProps, Picked>;

export type FormLabelStyleReturn = {
	formLabel: Style;
	disabled: Style;
};
