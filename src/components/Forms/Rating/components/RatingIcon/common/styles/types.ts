import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';

export type RatingIconStyleProps = {
	theme: Theme;
};

export type RatingIconStyleReturn = {
	rating: Style;
	active: Style;
	disabled: Style;
	readOnly: Style;
};
