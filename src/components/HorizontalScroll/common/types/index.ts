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
import { Space } from '../../../../theme/types';

export type HorizontalScrollArrowDirection = 'left' | 'right';

export type HorizontalScrollAPIContext = ContextType<typeof VisibilityContext>;

export type HorizontalScrollRenderDividerProps = { padding?: string };

export type HorizontalScrollVariant = HorizontalScrollArrowDirection | 'overlay';

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
	| 'LeftArrow'
	| 'RightArrow'
	| 'transitionDuration'
	| 'transitionBehavior'
	| 'transitionEase';

export type HorizontalScrollProps = Omit<BoxProps, OmittedBoxProps> & {
	children: ReactNode[];
	LeftArrow?: ReactNode;
	RightArrow?: ReactNode;
	color?: AppColor;
	colorMode?: ColorMode;
	isDisabled?: boolean;
	renderDivider?: (props: HorizontalScrollRenderDividerProps) => ReactNode;
	spacing?: Space;
	variant?: HorizontalScrollVariant;
} & Omit<RHSMHorizontalScrollProps, OmittedRHSMHorizontalScrollProps>;

export type HorizontalScrollRef = Nullable<HTMLDivElement>;

export type HorizontalScrollContext = Pick<HorizontalScrollProps, 'color' | 'colorMode' | 'isDisabled' | 'spacing'> & {
	arrowsWidth?: number;
};
