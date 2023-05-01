import { ReactNode } from 'react';

import { CenterProps, ColorMode } from '@chakra-ui/react';

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
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../common/types/box';
import { Color, Space } from '../../../../theme/types';

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

export type CommonCardProps = Omit<CenterProps, Omitted> & {
	children: ReactNode;
	color?: CardColor;
	colorMode?: ColorMode;
	isDivisible?: boolean;
	isLight?: boolean;
	isFullWidth?: boolean;
	spacing?: Space;
	variant?: CardVariant;
};
