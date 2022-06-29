import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { CardProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isFullWidth' | 'isLight' | 'isClickable' | 'variant';

export type CardStyleProps = {
	theme: Theme;
} & Pick<CardProps, Picked>;

export type CardStyleReturn = {
	card: Style;
	active: Style;
	disabled: Style;
};
