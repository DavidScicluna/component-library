import { ColorMode, TooltipProps as CUITooltipProps } from '@chakra-ui/react';

import {
	BoxMargin,
	BoxPadding,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxLayout,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxPosition,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';
import { Color } from '../../../theme/types';

export type TooltipRef = HTMLDivElement | null;

export type TooltipColor = Exclude<Color, 'transparent'>;

type Omitted =
	// CUI Box Props
	| BoxMargin
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
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Tooltip Props
	| 'as'
	| 'aria-label'
	| 'arrowPadding'
	| 'arrowShadowColor'
	// | 'closeDelay'
	| 'colorScheme'
	| 'direction'
	| 'hasArrow'
	| 'isOpen'
	| 'modifiers'
	| 'offset'
	// | 'openDelay'
	| 'portalProps'
	| 'size'
	| 'variant';

export type TooltipProps = {
	'aria-label': string;
	'color'?: TooltipColor;
	'colorMode'?: ColorMode;
	'isOpen': boolean;
	// 'closeDelay'?: number;
	// 'openDelay'?: number;
} & Omit<CUITooltipProps, Omitted>;
