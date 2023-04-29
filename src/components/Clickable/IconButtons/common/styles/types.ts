import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';

export type IconButtonStyleProps = {
	theme: Theme;
	isLoading?: boolean;
};

export type IconButtonStyleReturn = {
	iconbutton: Style;
	active: Style;
	disabled: Style;
};
