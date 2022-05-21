import { ColorMode, FormLabelProps as CUIFormLabelProps } from '@chakra-ui/react';

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

export type FormLabelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
	// CUI Form Label Props
	| 'as'
	| 'colorScheme'
	| 'isInvalid';

export type FormLabelProps = {
	colorMode?: ColorMode;
	isDisabled?: boolean;
	isReadOnly?: boolean;
	size?: FormLabelSize;
} & Omit<CUIFormLabelProps, Omitted>;
