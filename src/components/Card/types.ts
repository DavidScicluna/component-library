import { ReactNode } from 'react';

import { ColorMode, ButtonProps as CUIButtonProps } from '@chakra-ui/react';

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

export type CardRef = HTMLButtonElement | null;

export type CardColor = Exclude<Color, 'transparent'>;

export type Variant = 'contained' | 'outlined' | 'transparent';

export type Context = {
	color: CardColor;
	colorMode: ColorMode;
};

type Omitted =
	// MUI Box Props
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
	// CUI Button Props
	| 'as'
	| 'children'
	| 'color'
	| 'colorScheme'
	| 'iconSpacing'
	| 'leftIcon'
	| 'loadingText'
	| 'rightIcon'
	| 'isLoading'
	| 'size'
	| 'spinner'
	| 'spinnerPlacement'
	| 'variant';

export type CardProps = {
	children: ReactNode;
	color?: CardColor;
	colorMode?: ColorMode;
	isDivisible?: boolean;
	isLight?: boolean;
	isClickable?: boolean;
	// isFixed?: boolean;
	spacing?: Space;
	variant?: Variant;
} & Omit<CUIButtonProps, Omitted>;
