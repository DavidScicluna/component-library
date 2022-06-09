import { ReactNode } from 'react';

import { ColorMode, BoxProps } from '@chakra-ui/react';

import { Props as RHSMHorizontalScrollProps } from 'react-horizontal-scrolling-menu';

import {
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../common/types/box';

export type HorizontalScrollRef = HTMLDivElement | null;

export type RenderDividerProps = { padding?: string };

type OmittedBoxProps =
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
	| BoxOther;

type OmittedRHSMHorizontalScrollProps =
	| 'children'
	| 'Arrow'
	| 'transitionDuration'
	| 'transitionBehavior'
	| 'transitionEase';

export type HorizontalScrollProps = Omit<BoxProps, OmittedBoxProps> & {
	children: ReactNode[];
	colorMode?: ColorMode;
	isDisabled?: boolean;
	renderDivider?: (props: RenderDividerProps) => ReactNode;
} & Omit<RHSMHorizontalScrollProps, OmittedRHSMHorizontalScrollProps>;

export type HorizontalScrollContext = Pick<HorizontalScrollProps, 'colorMode' | 'isDisabled'>;
