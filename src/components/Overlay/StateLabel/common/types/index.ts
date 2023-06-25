import { StackProps } from '@chakra-ui/react';

import { CommonThemeProps, Nullable } from '../../../../../common/types';
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
	BoxShadow
} from '../../../../../common/types/box';

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

export type StateLabelProps = Omit<StackProps, Omitted> & CommonThemeProps;

export type StateLabelRef = Nullable<HTMLDivElement>;

export type StateLabelContext = Pick<StateLabelProps, 'color' | 'colorMode'>;
