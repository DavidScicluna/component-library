import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { FormControlProps } from '../../../FormControl/common/types';
import { FormHelperTextProps } from '../types';

export type FormHelperTextStyleProps = Pick<FormControlProps, 'colorMode' | 'size'> & {
	theme: Theme;
} & Pick<FormHelperTextProps, 'isError' | 'isWarning' | 'isSuccess'>;

export type FormHelperTextStyleReturn = {
	formHelperText: Style;
};
