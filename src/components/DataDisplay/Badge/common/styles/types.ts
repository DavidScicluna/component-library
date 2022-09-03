import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { BadgeProps } from '../../types';

export type BadgeStyleProps = {
	theme: Theme;
} & Pick<BadgeProps, 'color' | 'colorMode' | 'isLight' | 'size' | 'variant'>;

export type BadgeStyleReturn = {
	badge: Style;
};
