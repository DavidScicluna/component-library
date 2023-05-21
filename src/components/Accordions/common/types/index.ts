import { StackProps } from '@chakra-ui/react';

import { CommonThemeProps } from '../../../../common/types';
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
	spacing?: Space;
} & CommonThemeProps;
