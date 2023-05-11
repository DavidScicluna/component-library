import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { FormControlProps } from '../../../FormControl/common/types';
import { FormLabelProps } from '../types';

export type FormLabelStyleProps = Pick<FormControlProps, 'colorMode' | 'size'> & {
	theme: Theme;
} & Pick<FormLabelProps, 'isError' | 'isWarning' | 'isSuccess'>;

export type FormLabelStyleReturn = {
	formLabel: Style;
};
