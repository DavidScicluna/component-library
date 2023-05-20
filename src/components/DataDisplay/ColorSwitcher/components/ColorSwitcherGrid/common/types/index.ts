import { ReactNode } from 'react';

import { SimpleGridProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../../../common/types';
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
} from '../../../../../../../common/types/box';
import { ColorSwitcherContext } from '../../../../common/types';

export type ColorSwitcherGridRenderItemProps = Pick<ColorSwitcherContext, 'color' | 'colorMode' | 'onChange'> & {
	isActive?: boolean;
};

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

export type ColorSwitcherGridProps = Omit<SimpleGridProps, Omitted> & {
	renderItem: (props: ColorSwitcherGridRenderItemProps) => ReactNode;
};

export type ColorSwitcherGridRef = Nullable<HTMLDivElement>;
