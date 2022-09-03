import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { CardProps } from '../../types';

export type CardStyleProps = {
	theme: Theme;
} & Pick<CardProps, 'color' | 'colorMode' | 'isClickable' | 'isFullWidth' | 'isFixed' | 'isLight' | 'variant'>;

export type CardStyleReturn = {
	card: Style;
	active: Style;
	disabled: Style;
};
