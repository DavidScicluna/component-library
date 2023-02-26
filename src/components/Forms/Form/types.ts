import { HTMLAttributes, FormEvent as FE } from 'react';

import { CenterProps } from '@chakra-ui/react';

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

export type FormEvent = FE<HTMLDivElement> & FE<HTMLFormElement>;

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
	| 'as'
	| 'onSubmit';

export type FormProps = Omit<CenterProps, Omitted> & {
	onSubmit: (event: FormEvent) => void;
} & Omit<HTMLAttributes<HTMLFormElement>, Omitted>;
