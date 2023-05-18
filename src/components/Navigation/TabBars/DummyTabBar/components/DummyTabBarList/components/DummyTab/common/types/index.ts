import { ReactNode } from 'react';

import { TabProps as CUIDummyTabProps } from '@chakra-ui/react';

import { Style } from '../../../../../../../../../../common/types';
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
} from '../../../../../../../../../../common/types/box';
import { DummyTabBarProps } from '../../../../../../common/types';

export type DummyTabRenderProps = Pick<DummyTabBarProps, 'color' | 'colorMode' | 'size'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
};

export type DummyTab = {
	label: string;
	renderTop?: (props: DummyTabRenderProps) => ReactNode;
	renderLeft?: (props: DummyTabRenderProps) => ReactNode;
	renderRight?: (props: DummyTabRenderProps) => ReactNode;
	isActive?: boolean;
	isSelected?: boolean;
	sx?: Style;
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
	| 'children'
	| 'isDisabled'
	| 'isSelected'
	| 'onSelect';

export type DummyTabProps = Omit<CUIDummyTabProps, Omitted> & DummyTab;
