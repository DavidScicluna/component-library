import { BadgeProps as CUIBadgeProps, ColorMode } from '@chakra-ui/react';

import { Nullable } from '../../../../../common/types';
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
	BoxTypography} from '../../../../../common/types/box';
import { Color, FontSize } from '../../../../../theme/types';
import { PushableOverlayProps } from '../../../../Overlay/PushableOverlay/common/types';

export type BadgeColor = Exclude<Color, 'transparent'>;

export type BadgeSize = FontSize;

export type BadgeVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'text';

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
	// CUI Badge Props
	| 'as'
	| 'color'
	| 'colorScheme'
	| 'size'
	| 'variant';

export type BadgeProps = Omit<CUIBadgeProps, Omitted> & {
	color?: BadgeColor;
	colorMode?: ColorMode;
	isClickable?: boolean;
	isCompact?: boolean;
	isFullWidth?: boolean;
	isRound?: boolean;
	size?: BadgeSize;
	variant?: BadgeVariant;
} & Pick<PushableOverlayProps, 'isActive' | 'isDisabled' | 'isFixed'>;

export type BadgeRef = Nullable<HTMLSpanElement>;

export type BadgeContext = Pick<BadgeProps, 'color' | 'colorMode' | 'size' | 'variant'>;
