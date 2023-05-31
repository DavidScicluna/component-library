import { MouseEvent as ME } from 'react';

import { ButtonProps as CUIButtonProps } from '@chakra-ui/react';

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
import { CommonButtonProps } from '../../../common/types';

export type ButtonMouseEvent = ME<HTMLButtonElement, globalThis.MouseEvent>;

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
	| 'leftIcon'
	| 'loadingText'
	| 'rightIcon'
	| 'size'
	| 'spinner'
	| 'spinnerPlacement'
	| 'variant';

export type ButtonProps = Omit<CUIButtonProps, Omitted> & CommonButtonProps;

export type ButtonRef = Nullable<HTMLButtonElement>;

export type ButtonContext = Pick<ButtonProps, 'color' | 'colorMode' | 'size'>;
