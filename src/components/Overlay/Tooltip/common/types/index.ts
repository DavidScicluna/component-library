import { TooltipProps as CUITooltipProps } from '@chakra-ui/react';

import { CommonThemeProps, Nullable } from '../../../../../common/types';
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
	BoxMargin,
	BoxOther,
	BoxPadding,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';
import { Color } from '../../../../../theme/types';

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

export type TooltipProps = Omit<CUITooltipProps, Omitted> & {
	'aria-label': string;
	'color'?: TooltipColor;
	'isOpen': boolean;
	// 'closeDelay'?: number;
	// 'openDelay'?: number;
} & Pick<CommonThemeProps, 'colorMode'>;

export type TooltipRef = Nullable<HTMLDivElement>;
