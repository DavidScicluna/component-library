import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { CommonCollapsibleCardProps } from '../types';

export type CollapsibleCardStyleProps = Pick<CommonCollapsibleCardProps, 'isClickable' | 'isDisabled' | 'isFixed'> & {
	theme: Theme;
};

export type CollapsibleCardStyleReturn = {
	card: Style;
	active: Style;
	disabled: Style;
};
