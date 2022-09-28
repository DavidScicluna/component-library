import { ReactNode } from 'react';

import { TabProps as CUITabProps } from '@chakra-ui/react';

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
} from '../../../../../../../common/types/box';
import { TabsProps } from '../../../../types';
import { Style } from '../../../../../../../common/types';

export type RenderProps = Pick<TabsProps, 'color' | 'colorMode' | 'size'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
};

export type DummyTab = {
	label: string;
	renderLeft?: (props: RenderProps) => ReactNode;
	renderRight?: (props: RenderProps) => ReactNode;
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
	| 'isSelected';

export type DummyTabProps = Omit<CUITabProps, Omitted> & DummyTab;
