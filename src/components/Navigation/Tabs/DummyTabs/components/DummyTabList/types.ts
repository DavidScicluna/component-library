import { ReactNode } from 'react';

import { TabListProps as CUIDummyTabListProps } from '@chakra-ui/react';

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
	BoxTypography} from '../../../../../../common/types/box';
import { DummyTabsProps } from '../../types';

import { DummyTab } from './components/DummyTab/types';

export type DummyTabListRenderProps = {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
} & Pick<DummyTabsProps, 'color' | 'colorMode'>;

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

export type DummyTabListProps = Omit<CUIDummyTabListProps, Omitted> & {
	tabs: DummyTab[];
	renderLeft?: (props: DummyTabListRenderProps) => ReactNode;
	renderRight?: (props: DummyTabListRenderProps) => ReactNode;
};
