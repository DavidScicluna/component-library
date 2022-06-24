import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { ButtonProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isFullWidth' | 'isLoading' | 'size' | 'variant';

export type ButtonStyleProps = {
	theme: Theme;
} & Pick<ButtonProps, Picked>;

export type ButtonStyleReturn = {
	button: Style;
	active: Style;
	disabled: Style;
};
