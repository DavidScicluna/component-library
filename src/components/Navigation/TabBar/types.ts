import { ColorMode, StackProps } from '@chakra-ui/react';

import { Style } from '../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxMargin,
	BoxOther,
	BoxPadding,
	BoxPseudo,
	BoxShadow,
	BoxTypography} from '../../../common/types/box';
import { Color } from '../../../theme/types';

import { Tab } from './components/Tab/types';

export type TabBarRef = HTMLDivElement | null;

export type TabBarColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type TabBarDirection = 'top' | 'bottom';

type Omitted =
	// CUI Box Props
	| BoxMargin
	| BoxPadding
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
	// CUI Icon Button Props
	| 'as'
	| 'children'
	| 'direction'
	| 'shouldWrapChildren'
	| 'spacing'
	| 'wrap'
	| 'onChange';

export type TabBarProps = {
	color: TabBarColor;
	colorMode?: ColorMode;
	activeTab: number;
	direction?: TabBarDirection;
	tabs: Tab[];
	onChange: (index: number) => void;
	sx?: Style;
} & Omit<StackProps, Omitted>;

export type TabBarContext = Pick<TabBarProps, 'color' | 'colorMode' | 'direction'>;
