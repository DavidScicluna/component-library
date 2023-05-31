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
	BoxOther,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';

type Omitted =
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'as'
	| 'children';

export type LinearGradientProps = Omit<BoxProps, Omitted> & {
	degrees: number;
	background?: string;
} & CommonThemeProps;

export type LinearGradientRef = Nullable<HTMLDivElement>;
