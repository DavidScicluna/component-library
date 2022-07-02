import { ColorMode, CenterProps } from '@chakra-ui/react';

import {
	BoxColor,
	BoxGradient,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../common/types/box';
import { Icon } from '../../common/types/icons';
import { Color } from '../../theme/types';

export type IconColor = Exclude<Color, 'transparent'>;

export type IconCategory = 'filled' | 'outlined';

type Omitted =
	// CUI Box Props
	| BoxColor
	| BoxGradient
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Center Props
	| 'as'
	| 'children'
	| 'color'
	| 'colorMode';

export type IconProps = Omit<CenterProps, Omitted> & {
	color?: IconColor;
	colorMode?: ColorMode;
	icon: Icon;
	category?: IconCategory;
};
