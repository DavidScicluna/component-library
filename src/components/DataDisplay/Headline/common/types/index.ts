import { ReactNode } from 'react';

import { StackProps, TextProps } from '@chakra-ui/react';

import { CommonThemeProps } from '../../../../../common/types';
import {
	BoxBackground,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';

export type HeadlineRenderProps = Pick<HeadlineProps, 'color' | 'colorMode'> & {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
};

type Omitted =
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'as'
	| 'direction';

export type HeadlineProps = Omit<StackProps, Omitted> & {
	renderCaption?: (props: TextProps) => ReactNode;
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	renderLeft?: (props: HeadlineRenderProps) => ReactNode;
	renderRight?: (props: HeadlineRenderProps) => ReactNode;
} & CommonThemeProps;
