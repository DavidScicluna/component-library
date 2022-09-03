import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { ButtonProps } from '../../types';

export type ButtonStyleProps = {
	theme: Theme;
} & Pick<ButtonProps, 'color' | 'colorMode' | 'isFullWidth' | 'isLoading' | 'size' | 'variant'>;

export type ButtonStyleReturn = {
	button: Style;
	active: Style;
	disabled: Style;
};
