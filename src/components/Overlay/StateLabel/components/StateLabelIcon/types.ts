import { CenterProps } from '@chakra-ui/react';

import {
	BoxColor,
	BoxGradient,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxPosition,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../../../common/types/box';
import { IconProps } from '../../../../Icon/types';
import { StateLabelContext } from '../../types';

export type StateLabelIconVariant = 'contained' | 'outlined' | 'transparent';

export type StateLabelIconRenderIconProps = Pick<StateLabelContext, 'colorMode'>;

type Omitted =
	| BoxColor
	| BoxGradient
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

export type StateLabelIconProps = Omit<CenterProps, Omitted> & {
	variant?: StateLabelIconVariant;
} & Pick<IconProps, 'icon' | 'category'>;
