import { MouseEvent as ME,ReactNode } from 'react';

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
	BoxTypography} from '../../../../common/types/box';
import { CommonButtonProps } from '../common/types';

export type ButtonMouseEvent = ME<HTMLButtonElement, globalThis.MouseEvent>;

export type RenderProps = {
	width?: number; // In Pixels
	height?: number; // In Pixels
	// size?: ButtonSize;
} & Pick<CommonButtonProps, 'color' | 'colorMode'>;

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

export type ButtonProps = Omit<CUIButtonProps, Omitted> & {
	renderLeft?: (props: RenderProps) => ReactNode;
	renderRight?: (props: RenderProps) => ReactNode;
} & CommonButtonProps;

export type ButtonRef = HTMLButtonElement | null;
