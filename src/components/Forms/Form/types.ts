import { HTMLAttributes } from 'react';

import { CenterProps } from '@chakra-ui/react';

import { NonNullable } from '../../../common/types';
import {
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';

type Omitted =
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
	| 'as';

export type FormProps = Omit<CenterProps, Omitted> & {
	onSubmit: NonNullable<HTMLAttributes<HTMLFormElement>['onSubmit']>;
} & Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'>;
