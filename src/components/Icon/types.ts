import { CenterProps, ColorMode } from '@chakra-ui/react';

import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPseudo,
	BoxShadow
} from '../../common/types/box';
import { Icon } from '../../common/types/icons';
import { SkeletonColor } from '../Skeleton/types';

export type IconCategory = 'filled' | 'outlined';

type Omitted =
	// CUI Box Props
	| BoxGradient
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Center Props
	| 'as'
	| 'children';

export type IconProps = Omit<CenterProps, Omitted> & {
	colorMode?: ColorMode;
	icon: Icon;
	category?: IconCategory;
	skeletonColor?: SkeletonColor;
};
