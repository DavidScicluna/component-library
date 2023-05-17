import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';

export type CheckboxStyleProps = {
	theme: Theme;
};

export type CheckboxStyleReturn = {
	group: Style;
	disabled: Style;
};
