import { ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

import { CommonThemeProps, Nullable, PickFrom } from '../../../../../common/types';
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
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';
import { Icon } from '../../../../../common/types/icons';
import { Color } from '../../../../../theme/types';

export type IconColor = Exclude<Color, 'transparent'>;

export type IconCategory = 'filled' | 'outlined' | 'twoTone';

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
	| PickFrom<
			BoxTypography,
			| 'fontFamily'
			| 'fontWeight'
			| 'lineHeight'
			| 'letterSpacing'
			| 'textAlign'
			| 'fontStyle'
			| 'textTransform'
			| 'textDecoration'
	  >
	// CUI Center Props
	| 'as'
	| 'className';

export type IconProps = Omit<CenterProps, Omitted> & {
	children?: ReactNode;
	color?: IconColor;
	icon?: Icon;
	category?: IconCategory;
	variant?: IconVariant;
} & Pick<CommonThemeProps, 'colorMode'>;

export type IconRef = Nullable<HTMLSpanElement>;
