import { ColorMode, CenterProps } from '@chakra-ui/react';

import { BoxFlexbox, BoxGrid, BoxPseudo, BoxOther } from '../../common/types/box';
import { Icon } from '../../common/types/icons';

export type Type = 'filled' | 'outlined';

type Omitted =
	// MUI Box Props
	| BoxFlexbox
	| BoxGrid
	| BoxPseudo
	| BoxOther
	// MUI Center Props
	| 'as'
	| 'children';

export type IconProps = {
	colorMode?: ColorMode;
	icon: Icon;
	type: Type;
} & Omit<CenterProps, Omitted>;
