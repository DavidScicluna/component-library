import { ReactElement } from 'react';

import { ButtonGroupProps as CUIButtonGroupProps } from '@chakra-ui/react';

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
} from '../../../common/types/box';

export type ButtonGroupRef = HTMLDivElement | null;

export type ButtonGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
	// CUI Button Group Props
	| 'as'
	| 'children'
	| 'colorScheme'
	| 'isDisabled'
	| 'size'
	| 'variant';

export type ButtonGroupProps = {
	children?: ReactElement[];
	size?: ButtonGroupSize;
} & Omit<CUIButtonGroupProps, Omitted>;

export type ButtonGroupContext = Pick<ButtonGroupProps, 'isAttached' | 'size'>;
