import { ReactNode } from 'react';

import { Location } from 'react-router-dom';

import { StackProps } from '@chakra-ui/react';

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
import { Space } from '../../../../../theme/types';
import { SideNavigationProps } from '../../types';

export type RenderProps = {
	width?: string; // In FontSize (Theme) Values
	height?: string; // In FontSize (Theme) Values
} & Pick<SideNavigationProps, 'color' | 'colorMode'>;

export type NavItem = {
	title: string;
	path: Partial<Location>;
	renderLeftIcon?: (props: RenderProps) => ReactNode;
	renderRightIcon?: (props: RenderProps) => ReactNode;
};

type Omitted =
	// CUI Box Props
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
	// CUI Button Props
	| 'as'
	| 'children'
	| 'colorScheme'
	| 'direction'
	| 'spacing';

export type NavItemProps = Omit<StackProps, Omitted> & {
	isActive?: boolean;
	isDisabled?: boolean;
	spacing?: Space;
} & NavItem;
