import { ReactNode } from 'react';

import { ButtonProps as CUIButtonProps } from '@chakra-ui/react';

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
	BoxTypography} from '../../../../../../../../../common/types/box';

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
	// CUI Button Props
	| 'as'
	| 'children'
	| 'color'
	| 'colorScheme'
	| 'iconSpacing'
	| 'isActive'
	| 'isDisabled'
	| 'isLoading'
	| 'leftIcon'
	| 'loadingText'
	| 'rightIcon'
	| 'size'
	| 'spinner'
	| 'spinnerPlacement'
	| 'variant';

export type DropdownButtonProps = Omit<CUIButtonProps, Omitted> & {
	children: ReactNode;
	label: string;
};

export type DropdownButtonRef = HTMLButtonElement | null;
