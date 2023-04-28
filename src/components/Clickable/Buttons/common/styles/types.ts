import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { ButtonProps } from '../../OriginalButton/types';

type Picked = 'isCompact' | 'isFullWidth' | 'isLoading' | 'size';

export type ButtonStyleProps = Pick<ButtonProps, Picked> & {
	theme: Theme;
};

export type ButtonStyleReturn = {
	button: Style;
	active: Style;
	disabled: Style;
};
