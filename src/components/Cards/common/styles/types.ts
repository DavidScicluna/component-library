import { Style } from '../../../../common/types';
import { Theme } from '../../../../theme/types';
import { CommonCardProps } from '../types';

export type CardStyleProps = Pick<CommonCardProps, 'isClickable' | 'isDisabled' | 'isFixed'> & {
	theme: Theme;
};

export type CardStyleReturn = {
	card: Style;
	active: Style;
	disabled: Style;
};
