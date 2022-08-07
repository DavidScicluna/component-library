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
import { Space } from '../../../theme/types';
import { IconButtonProps } from '../../Clickable/IconButtons/OriginalIconButton/types';
import { IconProps } from '../../Icon/types';

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
	colorMode?: ColorMode;
	renderCancel?: (props: RenderCancelProps) => ReactNode;
	size?: ConfirmModalSize;
	spacing?: Space;
} & Omit<CUIModalProps, Omitted>;

export type ConfirmModalContext = Pick<ConfirmModalProps, 'colorMode' | 'onClose' | 'spacing'>;
