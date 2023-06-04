import { TextProps } from '@chakra-ui/react';

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
	BoxShadow
} from '../../../../../../../common/types/box';
import { ConfirmModalProps } from '../../../../common/types';

type Omitted =
	| BoxMargin
	| BoxPadding
	| BoxColor
	| BoxGradient
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
	| BoxOther;

export type ConfirmModalSubtitleProps = Omit<TextProps, Omitted> & Pick<ConfirmModalProps, 'color' | 'colorMode'>;
