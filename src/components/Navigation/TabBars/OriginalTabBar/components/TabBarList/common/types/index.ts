import { ReactNode } from 'react';

import { TabListProps } from '@chakra-ui/react';

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
import { TabBarProps } from '../../../../common/types';
import { Tab } from '../../components/Tab/common/types';

export type TabBarRenderProps = Pick<TabBarProps, 'color' | 'colorMode'> & {
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

export type TabBarListProps = Omit<TabListProps, Omitted> & {
	tabs: Tab[];
	renderLeft?: (props: TabBarRenderProps) => ReactNode;
	renderRight?: (props: TabBarRenderProps) => ReactNode;
};
