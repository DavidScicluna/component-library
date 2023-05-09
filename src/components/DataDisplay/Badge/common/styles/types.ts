import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { BadgeProps } from '../types';

export type BadgeStyleProps = Pick<BadgeProps, 'isClickable' | 'isFullWidth'> & {
	theme: Theme;
};

export type BadgeStyleReturn = {
	badge: Style;
	active: Style;
	disabled: Style;
};
