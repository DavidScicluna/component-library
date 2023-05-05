import { CenterProps, ColorMode } from '@chakra-ui/react';

import { Nullable } from '../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPosition,
	BoxPseudo,
	BoxShadow
} from '../../../../common/types/box';
import { Icon } from '../../../../common/types/icons';
import { Color } from '../../../../theme/types';

export type IconColor = Exclude<Color, 'transparent'>;

export type IconCategory = 'filled' | 'outlined';

export type IconVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'transparent';

type Omitted =
	// CUI Box Props
	| BoxColor
	| BoxGradient
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Center Props
	| 'as'
	| 'children'
	| 'className';

export type IconProps = Omit<CenterProps, Omitted> & {
	color?: IconColor;
	colorMode?: ColorMode;
	icon: Icon;
	category?: IconCategory;
	variant?: IconVariant;
};

export type IconRef = Nullable<HTMLSpanElement>;
