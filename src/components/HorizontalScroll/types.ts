import { ReactNode, ContextType } from 'react';

import { ColorMode, BoxProps } from '@chakra-ui/react';

import { Props as RHSMHorizontalScrollProps, VisibilityContext } from 'react-horizontal-scrolling-menu';

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
import { Color } from '../../theme/types';

export type HorizontalScrollAPIContext = ContextType<typeof VisibilityContext>;

export type HorizontalScrollRef = HTMLDivElement | null;

export type HorizontalScrollColor = Exclude<Color, 'transparent' | 'black' | 'white'>;

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
	| BoxOther
	| 'as'
	| 'children'
	| 'colorScheme';

type OmittedRHSMHorizontalScrollProps =
	| 'children'
	| 'Arrow'
	| 'transitionDuration'
	| 'transitionBehavior'
	| 'transitionEase';

export type HorizontalScrollProps = Omit<BoxProps, OmittedBoxProps> & {
	children: ReactNode[];
	color?: HorizontalScrollColor;
	colorMode?: ColorMode;
	isDisabled?: boolean;
	renderDivider?: (props: RenderDividerProps) => ReactNode;
} & Omit<RHSMHorizontalScrollProps, OmittedRHSMHorizontalScrollProps>;

export type HorizontalScrollContext = Pick<HorizontalScrollProps, 'color' | 'colorMode' | 'isDisabled'>;
