import { ColorMode, SkeletonProps as CUISkeletonProps } from '@chakra-ui/react';

import {
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxPosition,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../common/types/box';
import { Color } from '../../theme/types';

export type SkeletonColor = Exclude<Color, 'transparent' | 'black' | 'white'>;

export type SkeletonType = 'rectangle' | 'circle' | 'text';

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
	| 'endColor'
	| 'fadeDuration'
	| 'size'
	| 'startColor'
	| 'variant';

export type SkeletonProps = {
	color?: SkeletonColor;
	colorMode?: ColorMode;
	isReversed?: boolean;
	type?: SkeletonType;
} & Omit<CUISkeletonProps, Omitted>;
