import { MouseEvent as ME,ReactNode } from 'react';

import { BoxProps,ColorMode } from '@chakra-ui/react';

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
	BoxOther,
	BoxPseudo,
	BoxShadow,
	BoxTypography} from '../../../common/types/box';
import { Color, Space } from '../../../theme/types';

export type MouseEvent = ME<HTMLDivElement, globalThis.MouseEvent>;

export type CollapsibleCardColor = Exclude<Color, 'transparent' | 'black' | 'white'>;

type Omitted =
	// CUI Box Props
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxLayout
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Stack Props
	| 'as'
	| 'children'
	| 'direction'
	| 'color'
	| 'colorScheme';

export type CollapsibleCardProps = Omit<BoxProps, Omitted> & {
	color?: CollapsibleCardColor;
	colorMode?: ColorMode;
	header: ReactNode;
	body: ReactNode;
	footer?: ReactNode;
	isActive?: boolean;
	isDisabled?: boolean;
	isDivisible?: boolean;
	isFullWidth?: boolean;
	isFixed?: boolean;
	isLight?: boolean;
	isOpen: boolean;
	onOpen: () => void;
	spacing?: Space;
};

type Picked = 'color' | 'colorMode' | 'isDisabled' | 'isFullWidth' | 'isLight' | 'isOpen' | 'spacing';

export type CollapsibleCardContext = { isOpen?: boolean } & Pick<CollapsibleCardProps, Picked>;
