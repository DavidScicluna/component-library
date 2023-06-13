import { ReactNode } from 'react';

import { ModalProps as CUIModalProps } from '@chakra-ui/react';

import { CommonThemeProps } from '../../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxLayout,
	BoxMargin,
	BoxOther,
	BoxPadding,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';
import { Space } from '../../../../../theme/types';
import { CloseIconButtonProps } from '../../../../Clickable/IconButtons/CloseIconButton/common/types';
import { IconProps } from '../../../../DataDisplay/Icon/common/types';

export type ConfirmModalRenderBackdropProps = Pick<CloseIconButtonProps, 'color' | 'colorMode'>;

export type ConfirmModalRenderCancelProps = Pick<IconProps, 'icon' | 'category'> &
	Pick<CloseIconButtonProps, 'aria-label' | 'color' | 'colorMode' | 'onClick' | 'size' | 'variant'>;

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

export type ConfirmModalProps = CommonThemeProps & {
	renderBackdrop?: (props: ConfirmModalRenderBackdropProps) => ReactNode;
	renderCancel?: (props: ConfirmModalRenderCancelProps) => ReactNode;
	hasBackdrop?: boolean;
	size?: ConfirmModalSize;
	spacing?: Space;
} & Omit<CUIModalProps, Omitted>;

type Picked = 'color' | 'colorMode' | 'isOpen' | 'onClose' | 'size' | 'spacing';

export type ConfirmModalContext = Pick<ConfirmModalProps, Picked>;
