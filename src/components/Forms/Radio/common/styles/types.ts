import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';

export type RadioStyleProps = {
	theme: Theme;
};

export type RadioStyleReturn = {
	group: Style;
	disabled: Style;
};
