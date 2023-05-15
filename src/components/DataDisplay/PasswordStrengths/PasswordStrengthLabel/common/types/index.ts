import { ColorMode, StackProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../../common/types';
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
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../../common/types/box';

export type PasswordStrengthLabelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Omitted =
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
	| 'as'
	| 'children'
	| 'direction';

export type PasswordStrengthLabelProps = Omit<StackProps, Omitted> & {
	colorMode?: ColorMode;
	password: string;
	size?: PasswordStrengthLabelSize;
};

export type PasswordStrengthLabelRef = Nullable<HTMLDivElement>;
