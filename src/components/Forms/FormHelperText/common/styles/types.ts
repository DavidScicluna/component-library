import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { FormHelperTextProps } from '../../types';

export type FormHelperTextStyleProps = {
	theme: Theme;
} & Pick<FormHelperTextProps, 'colorMode' | 'isError' | 'isWarning' | 'isSuccess' | 'size'>;

export type FormHelperTextStyleReturn = {
	formHelperText: Style;
	disabled: Style;
	readOnly: Style;
};
