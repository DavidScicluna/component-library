import { ReactNode } from 'react';

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
	BoxMargin,
	BoxOther,
	BoxPadding,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';

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

export type LoadingOverlayProps = Omit<BoxProps, Omitted> & {
	renderSpinner: () => ReactNode;
	color?: AppColor;
	colorMode?: ColorMode;
	isLoading: boolean;
	hasGlass?: boolean;
	hasBackdrop?: boolean;
};

export type LoadingOverlayRef = Nullable<HTMLDivElement>;
