import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

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
} from '../../../../../common/types/box';

export type RenderProps = {
	width?: string;
	height?: string;
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
	// CUI Stack Props
	| 'as'
	| 'colorScheme'
	| 'direction';

export type Tab = {
	renderIcon?: (props: RenderProps) => ReactNode;
	label?: string;
	isDisabled?: boolean;
	onClick?: () => void;
} & Omit<StackProps, Omitted>;

export type TabProps = Tab & {
	isActive?: boolean;
	onClick: () => void;
};
