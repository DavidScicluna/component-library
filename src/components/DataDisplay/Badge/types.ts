import { BadgeProps as CUIBadgeProps, ColorMode } from '@chakra-ui/react';

import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxLayout,
	BoxOther,
	BoxPadding,
	BoxPseudo,
	BoxTypography
} from '../../../common/types/box';
import { Color, FontSize } from '../../../theme/types';

export type BadgeRef = HTMLSpanElement | null;

export type BadgeColor = Exclude<Color, 'transparent'>;

export type BadgeSize = Exclude<FontSize, '5xl' | '6xl' | '7xl' | '8xl' | '9xl'> & string;

export type BadgeVariant = 'contained' | 'outlined' | 'text';

type Omitted =
	// CUI Box Props
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxLayout
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Badge Props
	| 'as'
	| 'color'
	| 'colorScheme'
	| 'size'
	| 'variant';

export type BadgeProps = {
	color?: Color;
	colorMode?: ColorMode;
	isLight?: boolean;
	size?: BadgeSize;
	variant?: BadgeVariant;
} & Omit<CUIBadgeProps, Omitted>;

export type BadgeContext = Pick<BadgeProps, 'color' | 'colorMode' | 'isLight' | 'size' | 'variant'>;
