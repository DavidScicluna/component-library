import { ColorMode, TagProps as CUITagProps } from '@chakra-ui/react';

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
	BoxOther,
	BoxPadding,
	BoxPseudo,
	BoxTypography} from '../../../common/types/box';
import { Color } from '../../../theme/types';

export type TagRef = HTMLSpanElement | null;

export type TagColor = Exclude<Color, 'transparent'>;

export type TagSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TagVariant = 'contained' | 'outlined' | 'text';

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
	| BoxBorderRadius
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Tag Props
	| 'as'
	| 'color'
	| 'colorScheme'
	| 'size'
	| 'variant';

export type TagProps = {
	color?: TagColor;
	colorMode?: ColorMode;
	isActive?: boolean;
	isClickable?: boolean;
	isDisabled?: boolean;
	isFullWidth?: boolean;
	size?: TagSize;
	variant?: TagVariant;
} & Omit<CUITagProps, Omitted>;

export type TagContext = Pick<TagProps, 'color' | 'colorMode' | 'isDisabled' | 'size' | 'variant'>;
