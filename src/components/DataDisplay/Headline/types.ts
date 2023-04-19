import { ReactNode } from 'react';

import { ColorMode, StackProps, TextProps } from '@chakra-ui/react';

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
	BoxTypography} from '../../../common/types/box';
import { Color } from '../../../theme/types';

export type HeadlineColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type HeadlineRenderProps = {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
} & Pick<HeadlineProps, 'color' | 'colorMode'>;

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
	color?: HeadlineColor;
	colorMode?: ColorMode;
	renderCaption?: (props: TextProps) => ReactNode;
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	renderLeft?: (props: HeadlineRenderProps) => ReactNode;
	renderRight?: (props: HeadlineRenderProps) => ReactNode;
};
