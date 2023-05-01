import { MouseEvent as ME, ReactNode } from 'react';

import { TabProps as CUITabProps } from '@chakra-ui/react';

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
import { TabsProps } from '../../../../../../common/types';

export type TabMouseEvent = ME<HTMLButtonElement, globalThis.MouseEvent>;

export type TabRenderProps = Pick<TabsProps, 'color' | 'colorMode' | 'size'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
};

export type Tab = {
	label: string;
	renderLeft?: (props: TabRenderProps) => ReactNode;
	renderRight?: (props: TabRenderProps) => ReactNode;
	isActive?: boolean;
	isDisabled?: boolean;
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

export type TabProps = Omit<CUITabProps, Omitted> & {
	index: number;
	onSelect: (index: number) => void;
} & Tab;
