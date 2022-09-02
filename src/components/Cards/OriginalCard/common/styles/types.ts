import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { CardProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isClickable' | 'isFullWidth' | 'isFixed' | 'isLight' | 'variant';

export type CardStyleProps = {
	theme: Theme;
} & Pick<CardProps, Picked>;

export type CardStyleReturn = {
	card: Style;
	active: Style;
	disabled: Style;
};
