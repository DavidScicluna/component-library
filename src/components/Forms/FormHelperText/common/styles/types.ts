import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { FormHelperTextProps } from '../../types';

type Picked = 'colorMode' | 'isError' | 'isWarning' | 'isSuccess' | 'size';

export type FormHelperTextStyleProps = {
	theme: Theme;
} & Pick<FormHelperTextProps, Picked>;

export type FormHelperTextStyleReturn = {
	formHelperText: Style;
	disabled: Style;
	readOnly: Style;
};
