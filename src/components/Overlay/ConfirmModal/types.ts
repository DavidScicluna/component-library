import { ReactNode } from 'react';

import { ColorMode, ModalProps as CUIModalProps } from '@chakra-ui/react';

import {
	BoxMargin,
	BoxPadding,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxLayout,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxPosition,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';
import { IconButtonProps } from '../../Clickable/IconButtons/OriginalIconButton/types';
import { IconProps } from '../../Icon/types';
import { Color } from '../../../theme/types';

export type ConfirmModalColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray'>;

type IconPropsPicked = 'icon' | 'category';

type IconButtonPropsPicked = 'aria-label' | 'color' | 'colorMode' | 'onClick' | 'size' | 'variant';

type RenderCancelProps = Pick<IconProps, IconPropsPicked> & Pick<IconButtonProps, IconButtonPropsPicked>;

export type ConfirmModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Omitted =
	// CUI Box Props
	| BoxMargin
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxLayout
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Confirm Modal Props
	| 'as'
	| 'colorScheme'
	| 'id'
	| 'isCentered'
	| 'motionPreset'
	| 'size'
	| 'trapFocus'
	| 'variant';

export type ConfirmModalProps = {
	color?: ConfirmModalColor;
	colorMode?: ColorMode;
	renderCancel?: (props: RenderCancelProps) => ReactNode;
	size?: ConfirmModalSize;
} & Omit<CUIModalProps, Omitted>;

export type ConfirmModalContext = Pick<ConfirmModalProps, 'color' | 'colorMode' | 'onClose'>;
