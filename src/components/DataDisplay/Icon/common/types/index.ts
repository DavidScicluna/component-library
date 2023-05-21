import { CenterProps } from '@chakra-ui/react';

import { CommonThemeProps, Nullable } from '../../../../../common/types';
import {
	BoxBackground,
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
} from '../../../../../common/types/box';
import { Icon } from '../../../../../common/types/icons';
import { Color } from '../../../../../theme/types';

export type IconColor = Exclude<Color, 'transparent'>;

export type IconCategory = 'filled' | 'outlined';

export type IconVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'transparent' | 'unstyled';

type Omitted =
	// CUI Box Props
	| BoxColor
	| BoxGradient
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
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
	icon: Icon;
	category?: IconCategory;
	variant?: IconVariant;
} & Pick<CommonThemeProps, 'colorMode'>;

export type IconRef = Nullable<HTMLSpanElement>;
