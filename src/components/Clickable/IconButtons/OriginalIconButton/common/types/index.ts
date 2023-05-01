import { MouseEvent as ME } from 'react';

import { IconButtonProps as CUIIconButtonProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../../common/types';
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
} from '../../../../../../common/types/box';
import { CommonIconButtonProps } from '../../../common/types';

export type IconButtonMouseEvent = ME<HTMLButtonElement, globalThis.MouseEvent>;

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

export type IconButtonRef = Nullable<HTMLButtonElement>;

export type IconButtonContext = Pick<IconButtonProps, 'color' | 'colorMode' | 'size'>;
