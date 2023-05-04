import { MouseEvent as ME, ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

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
	BoxTypography
} from '../../../../../common/types/box';

export type HoverOverlayMouseEvent = ME<HTMLDivElement, globalThis.MouseEvent>;

export type HoverOverlayChildrenProps = { isHovering: boolean };

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
	| 'as'
	| 'children';

export type HoverOverlayProps = Omit<CenterProps, Omitted> & {
	children: (props: HoverOverlayChildrenProps) => ReactNode;
};

export type HoverOverlayRef = Nullable<HTMLDivElement>;
