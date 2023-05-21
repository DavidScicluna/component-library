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

type IconPropsPicked = 'icon' | 'category';

type IconButtonPropsPicked = 'aria-label' | 'color' | 'colorMode' | 'onClick' | 'size' | 'variant';

type RenderCancelProps = Pick<IconProps, IconPropsPicked> & Pick<CloseIconButtonProps, IconButtonPropsPicked>;

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
	renderCancel?: (props: RenderCancelProps) => ReactNode;
	size?: ConfirmModalSize;
	spacing?: Space;
} & Omit<CUIModalProps, Omitted>;

export type ConfirmModalContext = Pick<ConfirmModalProps, 'color' | 'colorMode' | 'onClose' | 'spacing'>;
