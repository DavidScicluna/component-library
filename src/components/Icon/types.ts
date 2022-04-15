import { ColorMode, CenterProps } from '@chakra-ui/react';

import { BoxPadding, BoxGrid, BoxPseudo, BoxOther } from '../../common/types/box';
import { Icon } from '../../common/types/icons';

type IconType = 'filled' | 'outlined';

type Omitted =
	// MUI Box Props
	| BoxPadding
	// |BoxFlexbox
	| BoxGrid
	// |BoxBackground
	// |BoxBorders
	// | BoxBorderRadius
	// |BoxShadow
	// |BoxFilter
	| BoxPseudo
	| BoxOther
	// MUI Center Props
	| 'as'
	| 'children';

export type IconProps = {
	colorMode?: ColorMode;
	icon: Icon;
	type: IconType;
} & Omit<CenterProps, Omitted>;
