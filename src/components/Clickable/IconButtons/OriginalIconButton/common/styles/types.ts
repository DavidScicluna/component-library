import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { IconButtonProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isRound' | 'isLoading' | 'size' | 'variant';

export type IconButtonStyleProps = {
	theme: Theme;
} & Pick<IconButtonProps, Picked>;

export type IconButtonStyleReturn = {
	iconbutton: Style;
	active: Style;
	disabled: Style;
};
