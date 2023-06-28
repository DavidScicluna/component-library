import { BoxProps } from '@chakra-ui/react';

import { CommonThemeProps, Nullable, Orientation } from '../../../../common/types';
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
} from '../../../../common/types/box';
import { Spacing } from '../../../../theme/types';

export type DividerPlacement = 'left' | 'center' | 'right';

export type DividerVariant = 'dotted' | 'dashed' | 'solid';

type Omitted =
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
	| 'as';

export type DividerProps = CommonThemeProps & {
	placement?: DividerPlacement;
	size?: number;
	spacing?: Spacing;
	orientation?: Orientation;
	variant?: DividerVariant;
} & Omit<BoxProps, Omitted>;

export type DividerRef = Nullable<HTMLHRElement>;
