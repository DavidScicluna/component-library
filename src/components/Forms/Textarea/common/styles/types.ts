import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { TextareaProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isError' | 'isWarning' | 'isSuccess' | 'isFocused' | 'isFullWidth' | 'size';

export type TextareaStyleProps = {
	theme: Theme;
} & Pick<TextareaProps, Picked>;

export type TextareaStyleReturn = {
	group: Style;
	disabled: Style;
	readOnly: Style;
	textarea: Style;
};
