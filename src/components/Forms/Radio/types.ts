import { FocusEvent, ReactNode } from 'react';

import { ColorMode, RadioProps as CUIRadioProps } from '@chakra-ui/react';

import { Style } from '../../../common/types';
import {
	BoxPadding,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../common/types/box';
import { Color } from '../../../theme/types';

export type Event = FocusEvent<HTMLInputElement, Element>;

export type RadioRef = HTMLInputElement | null;

export type RadioColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray' | 'red' | 'yellow' | 'green'>;

export type RadioSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type RadioVariant = 'outlined' | 'transparent';

export type RadioPanelRenderProps = {
	// width: number;
	// height: number;
	// fontSize: RadioSize;
	color: RadioColor;
	colorMode?: ColorMode;
};

type Omitted =
	// CUI Box Props
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Input Props
	| 'as'
	| 'children'
	| 'colorScheme'
	| 'iconColor'
	| 'iconSize'
	| 'isRequired'
	| 'size'
	| 'spacing'
	| 'placeholder'
	| 'tabIndex'
	| 'variant'
	| 'sx';

export type RadioProps = {
	color: RadioColor;
	colorMode?: ColorMode;
	label?: string;
	helper?: string;
	isError?: boolean;
	isWarning?: boolean;
	isSuccess?: boolean;
	isRequired?: boolean;
	isFullWidth?: boolean;
	renderLeftPanel?: (props: RadioPanelRenderProps) => ReactNode;
	renderRightPanel?: (props: RadioPanelRenderProps) => ReactNode;
	size?: RadioSize;
	variant?: RadioVariant;
	sx?: { group?: Style; radio?: Style; formLabel?: Style; formHelperText?: Style };
} & Omit<CUIRadioProps, Omitted>;

export type RadioContext = Pick<RadioProps, 'color' | 'colorMode'>;
