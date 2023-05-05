import { Style } from '../../../../common/types';
import { Theme } from '../../../../theme/types';
import { IconProps } from '../types';

type Picked = 'color' | 'colorMode' | 'variant';

export type IconStyleProps = Pick<IconProps, Picked> & {
	theme: Theme;
};

export type IconStyleReturn = {
	icon: Style;
};
