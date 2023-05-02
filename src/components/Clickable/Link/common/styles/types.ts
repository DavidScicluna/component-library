import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';

export type LinkStyleProps = {
	theme: Theme;
};

export type LinkStyleReturn = {
	link: Style;
	disabled: Style;
};
