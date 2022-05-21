import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { InputProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isWarning' | 'isSuccess' | 'isFocused' | 'isFullWidth' | 'size';

export type InputStyleProps = {
	theme: Theme;
} & Pick<InputProps, Picked>;

export type InputStyleReturn = {
	group: Style;
	disabled: Style;
	invalid: Style;
	readonly: Style;
	input: Style;
};
