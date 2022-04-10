import { ReactNode } from 'react';

import { ColorMode, ButtonProps as CUIButtonProps } from '@chakra-ui/react';

import {
	BoxPadding,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxLayout,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';
import { Color } from '../../../theme/types';

export type ButtonRef = HTMLButtonElement | null;

export type ButtonColor = Exclude<Color, 'transparent'>;

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Variant = 'contained' | 'outlined' | 'text';

export type RenderProps = {
	color?: Color;
	colorMode?: ColorMode;
	width?: number; // In Pixels
	height?: number; // In Pixels
	size?: Size;
};

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
	| 'size'
	| 'spinner'
	| 'spinnerPlacement'
	| 'variant';

export type ButtonProps = {
	children?: ReactNode;
	color?: ButtonColor;
	colorMode?: ColorMode;
	renderLeft?: (props: RenderProps) => ReactNode;
	renderRight?: (props: RenderProps) => ReactNode;
	size?: Size;
	variant?: Variant;
} & Omit<CUIButtonProps, Omitted>;
