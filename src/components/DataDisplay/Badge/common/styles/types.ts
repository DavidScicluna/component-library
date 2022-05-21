import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { BadgeProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isLight' | 'size' | 'variant';

export type BadgeStyleProps = {
	theme: Theme;
} & Pick<BadgeProps, Picked>;

export type BadgeStyleReturn = {
	badge: Style;
};
