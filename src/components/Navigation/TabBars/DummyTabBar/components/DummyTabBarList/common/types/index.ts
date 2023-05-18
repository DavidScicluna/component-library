import { ReactNode } from 'react';

import { TabListProps as CUIDummyTabBarListProps } from '@chakra-ui/react';

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
} from '../../../../../../../../common/types/box';
import { DummyTabBarProps } from '../../../../common/types';
import { DummyTab } from '../../components/DummyTab/common/types';

export type DummyTabBarListRenderProps = Pick<DummyTabBarProps, 'color' | 'colorMode'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
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
	| 'children';

export type DummyTabBarListProps = Omit<CUIDummyTabBarListProps, Omitted> & {
	tabs: DummyTab[];
	renderLeft?: (props: DummyTabBarListRenderProps) => ReactNode;
	renderRight?: (props: DummyTabBarListRenderProps) => ReactNode;
};
