import { ReactNode } from 'react';

import { ColorMode, CenterProps } from '@chakra-ui/react';

import {
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxLayout,
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
import { Color, Space } from '../../theme/types';

export type CardRef = HTMLDivElement | null;

export type CardColor = Exclude<Color, 'transparent'>;

export type CardVariant = 'contained' | 'outlined' | 'transparent';

type Omitted =
	// CUI Box Props
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxLayout
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
	| 'colorScheme';

export type CardProps = {
	children: ReactNode;
	color?: CardColor;
	colorMode?: ColorMode;
	isActive?: boolean;
	isDisabled?: boolean;
	isDivisible?: boolean;
	isLight?: boolean;
	isClickable?: boolean;
	isFullWidth?: boolean;
	// isFixed?: boolean;
	spacing?: Space;
	variant?: CardVariant;
} & Omit<CenterProps, Omitted>;

export type CardContext = Pick<CardProps, 'color' | 'colorMode' | 'isDisabled' | 'isLight'>;
