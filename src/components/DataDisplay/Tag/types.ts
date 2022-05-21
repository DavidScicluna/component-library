import { ColorMode, TagProps as CUITagProps } from '@chakra-ui/react';

import {
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
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';
import { Color } from '../../../theme/types';

export type TagRef = HTMLSpanElement | null;

export type TagColor = Exclude<Color, 'transparent'>;

export type TagSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TagVariant = 'contained' | 'outlined' | 'text';

type Picked = 'color' | 'colorMode' | 'isDisabled' | 'size' | 'variant';

export type TagContext = Pick<TagProps, Picked>;

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
