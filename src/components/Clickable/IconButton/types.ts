import { ReactNode } from 'react';

import { ColorMode, IconButtonProps as CUIIconButtonProps } from '@chakra-ui/react';

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

export type IconButtonRef = HTMLButtonElement | null;

export type IconButtonColor = Exclude<Color, 'transparent'>;

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconButtonVariant = 'contained' | 'outlined' | 'icon';

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
	// CUI Icon Button Props
	| 'as'
	| 'children'
	| 'color'
	| 'colorScheme'
	| 'icon'
	| 'size'
	| 'spinner'
	| 'variant';

export type IconButtonProps = {
	children: ReactNode;
	color?: IconButtonColor;
	colorMode?: ColorMode;
	size?: IconButtonSize;
	variant?: IconButtonVariant;
} & Omit<CUIIconButtonProps, Omitted>;
