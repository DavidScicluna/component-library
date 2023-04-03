import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { IconButtonProps } from '../../types';

export type IconButtonStyleProps = {
	theme: Theme;
} & Pick<IconButtonProps, 'color' | 'colorMode' | 'isRound' | 'isLoading' | 'size' | 'variant'>;

export type IconButtonStyleReturn = {
	iconbutton: Style;
	active: Style;
	disabled: Style;
};
