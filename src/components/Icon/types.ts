import { ColorMode, CenterProps } from '@chakra-ui/react';

import { BoxFlexbox, BoxGrid, BoxPseudo, BoxOther } from '../../common/types/box';
import { Icon } from '../../common/types/icons';

export type IconType = 'filled' | 'outlined';

type Omitted =
	// CUI Box Props
	| BoxFlexbox
	| BoxGrid
	| BoxPseudo
	| BoxOther
	// CUI Center Props
	| 'as'
	| 'children';

export type IconProps = {
	colorMode?: ColorMode;
	icon: Icon;
	type: IconType;
} & Omit<CenterProps, Omitted>;
