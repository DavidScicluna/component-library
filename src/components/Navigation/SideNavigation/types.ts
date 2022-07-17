import { ColorMode, StackProps } from '@chakra-ui/react';

import {
	BoxMargin,
	BoxPadding,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxFlexbox,
	BoxGrid,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';
import { Color } from '../../../theme/types';

export type SideNavigationColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type SideNavigationMode = 'expanded' | 'collapsed';

type Omitted =
	// CUI Box Props
	| BoxMargin
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Button Props
	| 'as'
	| 'colorScheme'
	| 'direction';

export type SideNavigationProps = Omit<StackProps, Omitted> & {
	color: SideNavigationColor;
	colorMode?: ColorMode;
	mode?: SideNavigationMode;
};

export type SideNavigationRef = HTMLDivElement | null;

export type SideNavigationContext = Pick<SideNavigationProps, 'color' | 'colorMode' | 'mode'>;
