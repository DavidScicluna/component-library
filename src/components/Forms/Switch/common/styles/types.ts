import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';

export type SwitchStyleProps = {
	theme: Theme;
};

export type SwitchStyleReturn = {
	group: Style;
	disabled: Style;
};
