import { ColorMode, StackProps } from '@chakra-ui/react';

import {
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxLayout,
	BoxOther,
	BoxPosition,
	BoxPseudo,
	BoxShadow} from '../../../common/types/box';
import { Color } from '../../../theme/types';

export type StateLabelColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

type Omitted =
	| BoxColor
	| BoxGradient
	| BoxLayout
	| BoxFlexbox
	| BoxGrid
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'as';

export type StateLabelProps = Omit<StackProps, Omitted> & {
	color?: StateLabelColor;
	colorMode?: ColorMode;
};

export type StateLabelContext = Pick<StateLabelProps, 'color' | 'colorMode'>;
