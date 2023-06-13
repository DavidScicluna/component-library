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

export type ModalSize = 'full' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

export type ModalRenderBackdropProps = Pick<ModalProps, 'color' | 'colorMode'>;

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
	// CUI Modal Props
	| 'as'
	| 'colorScheme'
	| 'id'
	| 'isCentered'
	| 'motionPreset'
	| 'size'
	| 'trapFocus'
	| 'variant';

export type ModalProps = CommonThemeProps & {
	renderBackdrop?: (props: ModalRenderBackdropProps) => ReactNode;
	hasBackdrop?: boolean;
	size?: ModalSize;
	spacing?: Space;
} & Omit<CUIModalProps, Omitted>;

export type ModalContext = Pick<ModalProps, 'color' | 'colorMode' | 'isOpen' | 'onClose' | 'size' | 'spacing'>;
