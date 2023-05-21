import { BoxProps } from '@chakra-ui/react';

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
	BoxOther,
	BoxPosition,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';
import { Color, Radius } from '../../../../../theme/types';

export type PushableOverlayColor = Exclude<Color, 'transparent'>;

export type PushableOverlayVariant = 'contained' | 'light' | 'outlined' | 'monochrome' | 'transparent';

type BoxLayoutExcluded =
	| 'w'
	| 'width'
	| 'h'
	| 'height'
	| 'minW'
	| 'minWidth'
	| 'maxW'
	| 'maxWidth'
	| 'minH'
	| 'minHeight'
	| 'maxH'
	| 'maxHeight';
type Omitted =
	| BoxColor
	| BoxGradient
	| BoxTypography
	| Exclude<BoxLayout, BoxLayoutExcluded>
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxOther;

export type PushableOverlayProps = Omit<BoxProps, Omitted> & {
	borderRadius?: Radius;
	color?: PushableOverlayColor;
	isActive?: boolean;
	isDisabled?: boolean;
	isFixed?: boolean;
	isPushable?: boolean;
	variant?: PushableOverlayVariant;
} & Pick<CommonThemeProps, 'colorMode'>;

export type PushableOverlayRef = Nullable<HTMLDivElement>;
