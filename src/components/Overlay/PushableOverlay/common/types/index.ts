import { BoxProps, ColorMode } from '@chakra-ui/react';

import { AppColor, Nullable } from '../../../../../common/types';
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
import { Radius } from '../../../../../theme/types';

export type PushableOverlayVariant = 'contained' | 'light' | 'outlined' | 'monochrome';

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
	| BoxPseudo
	| BoxOther
	| 'as';

export type PushableOverlayProps = Omit<BoxProps, Omitted> & {
	borderRadius?: Radius;
	color?: AppColor;
	colorMode?: ColorMode;
	isActive?: boolean;
	isDisabled?: boolean;
	variant?: PushableOverlayVariant;
};

export type PushableOverlayRef = Nullable<HTMLDivElement>;
