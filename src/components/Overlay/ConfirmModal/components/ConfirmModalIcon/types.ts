import { ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

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
	BoxTypography} from '../../../../../common/types/box';
import { Color } from '../../../../../theme/types';
import { ConfirmModalProps } from '../../types';

export type ConfirmModalIconColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

export type ConfirmModalIconVariant = 'contained' | 'outlined' | 'transparent';

export type RenderIconProps = Pick<ConfirmModalProps, 'colorMode'>;

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
	| 'children'
	| 'as';

export type ConfirmModalIconProps = Omit<CenterProps, Omitted> & {
	renderIcon: (props: RenderIconProps) => ReactNode;
	color: ConfirmModalIconColor;
	variant?: ConfirmModalIconVariant;
};
