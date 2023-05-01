import { CenterProps } from '@chakra-ui/react';

import {
	BoxBackground,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxLayout,
	BoxOther,
	BoxPadding,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../../../../../../../../../common/types/box';

type Omitted =
	// CUI Box Props
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxLayout
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Center Props
	| 'as'
	| 'color'
	| 'colorScheme';

export type DropdownButtonItemProps = Omit<CenterProps, Omitted> & {
	isActive?: boolean;
	isDisabled?: boolean;
	isToday?: boolean;
};

export type DropdownButtonItemRef = HTMLDivElement | null;
