import { ContextType } from 'react';

import { TabListProps as CUITabListProps } from '@chakra-ui/react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import {
	BoxMargin,
	BoxPadding,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxLayout,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxPosition,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../../../common/types/box';

import { Tab } from './components/Tab/types';

export type ScrollContext = ContextType<typeof VisibilityContext>;

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

export type TabListProps = Omit<CUITabListProps, Omitted> & { tabs: Tab[] };
