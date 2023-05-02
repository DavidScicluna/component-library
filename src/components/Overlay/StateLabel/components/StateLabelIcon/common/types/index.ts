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
	BoxShadow
} from '../../../../../../../common/types/box';
import { IconProps } from '../../../../../../Icon/common/types';
import { StateLabelContext } from '../../../../common/types';

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
