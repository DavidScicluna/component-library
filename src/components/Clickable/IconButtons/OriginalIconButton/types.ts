import { IconButtonProps as CUIIconButtonProps } from '@chakra-ui/react';

import {
	BoxPadding,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxLayout,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../../common/types/box';
import { CommonIconButtonProps } from '../common/types';

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
	// CUI Icon Button Props
	| 'as'
	| 'children'
	| 'color'
	| 'colorScheme'
	| 'icon'
	| 'size'
	| 'spinner'
	| 'variant';

export type IconButtonProps = Omit<CUIIconButtonProps, Omitted> & CommonIconButtonProps;

export type IconButtonRef = HTMLButtonElement | null;

export type IconButtonContext = Pick<IconButtonProps, 'color' | 'colorMode'>;
