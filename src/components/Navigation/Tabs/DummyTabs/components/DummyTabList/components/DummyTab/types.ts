import { ReactNode } from 'react';

import { TabProps as CUIDummyTabProps } from '@chakra-ui/react';

import { Style } from '../../../../../../../../common/types';
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
} from '../../../../../../../../common/types/box';
import { DummyTabsProps } from '../../../../types';

export type DummyTabRenderProps = Pick<DummyTabsProps, 'color' | 'colorMode' | 'size'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
};

export type DummyTab = {
	label: string;
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