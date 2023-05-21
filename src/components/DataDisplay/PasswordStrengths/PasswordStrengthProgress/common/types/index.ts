import { ProgressProps } from '@chakra-ui/react';

import { CommonThemeProps } from '../../../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxMargin,
	BoxOther,
	BoxPadding,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../../common/types/box';
import { Strength } from '../../../common/types';

type Omitted =
	| BoxMargin
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'value';

export type PasswordStrengthProgressProps = Omit<ProgressProps, Omitted> & {
	password: string;
	strength: Strength;
} & Pick<CommonThemeProps, 'colorMode'>;
