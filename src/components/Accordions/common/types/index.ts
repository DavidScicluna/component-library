import { ColorMode, StackProps } from '@chakra-ui/react';

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
	BoxTypography} from '../../../../common/types/box';
import { Color, Space } from '../../../../theme/types';

export type AccordionsColor = Exclude<Color, 'transparent' | 'black' | 'white'>;

type Omitted =
	// CUI Box Props
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
	// CUI Stack Props
	| 'as'
	| 'colorScheme'
	| 'direction'
	| 'spacing';

export type CommonAccordionsProps = Omit<StackProps, Omitted> & {
	color?: AccordionsColor;
	colorMode?: ColorMode;
	isFullWidth?: boolean;
	spacing?: Space;
};
