import { ContextType, ReactNode } from 'react';
import { Props as RHSMHorizontalScrollProps, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { BoxProps, ColorMode } from '@chakra-ui/react';

import { AppColor, Nullable } from '../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../common/types/box';

export type HorizontalScrollAPIContext = ContextType<typeof VisibilityContext>;

export type HorizontalScrollRenderDividerProps = { padding?: string };

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
	color?: AppColor;
	colorMode?: ColorMode;
	isDisabled?: boolean;
	renderDivider?: (props: HorizontalScrollRenderDividerProps) => ReactNode;
} & Omit<RHSMHorizontalScrollProps, OmittedRHSMHorizontalScrollProps>;

export type HorizontalScrollRef = Nullable<HTMLDivElement>;

export type HorizontalScrollContext = Pick<HorizontalScrollProps, 'color' | 'colorMode' | 'isDisabled'>;
