import { ColorMode, SkeletonProps as CUISkeletonProps, SlideFadeProps } from '@chakra-ui/react';

import {
	BoxBackground,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../common/types/box';
import { Color } from '../../theme/types';

export type SkeletonColor = Exclude<Color, 'transparent'>;

export type SkeletonVariant = 'rectangle' | 'circle' | 'text';

type Omitted =
	// Box Props
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Skeleton Props
	| 'as'
	| 'color'
	| 'colorScheme'
	| 'fadeDuration'
	| 'size'
	| 'variant';

export type SkeletonProps = Omit<CUISkeletonProps, Omitted> & {
	color?: SkeletonColor;
	colorMode?: ColorMode;
	isReversed?: boolean;
	transition?: SlideFadeProps['transition'];
	variant?: SkeletonVariant;
};
