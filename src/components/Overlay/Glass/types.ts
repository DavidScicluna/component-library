import { CenterProps } from '@chakra-ui/react';

import { Nullable } from '../../../common/types';
import {
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';
import { Space } from '../../../theme/types';

type Omitted =
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'backdropFilter';

export type GlassProps = Omit<CenterProps, Omitted> & {
	size?: Space;
};

export type GlassRef = Nullable<HTMLDivElement>;
