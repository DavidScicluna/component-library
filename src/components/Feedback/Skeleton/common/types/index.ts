import { SkeletonProps as CUISkeletonProps } from '@chakra-ui/react';

import { CommonThemeProps } from '../../../../../common/types';
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
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';
import { Color, Radius } from '../../../../../theme/types';

export type SkeletonColor = Exclude<Color, 'transparent'>;

export type SkeletonVariant = 'rectangle' | 'circle' | 'text';

type Omitted =
	// Box Props
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
	// CUI Skeleton Props
	| 'as'
	| 'color'
	| 'colorScheme'
	| 'fadeDuration'
	| 'speed'
	| 'size'
	| 'variant'
	| '_firstLetter';

export type SkeletonProps = Omit<CUISkeletonProps, Omitted> & {
	color?: SkeletonColor;
	borderRadius?: Radius;
	isAnimated?: boolean;
	isReversed?: boolean;
	variant?: SkeletonVariant;
} & Pick<CommonThemeProps, 'colorMode'>;
