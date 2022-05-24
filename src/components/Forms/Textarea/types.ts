import { ReactNode, FocusEvent } from 'react';

import { ColorMode, TextareaProps as CUITextareaProps } from '@chakra-ui/react';

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

export type Event = FocusEvent<HTMLTextAreaElement, Element>;

export type TextareaRef = HTMLTextAreaElement | null;

export type TextareaColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray' | 'red' | 'yellow' | 'green'>;

export type TextareaResize = 'horizontal' | 'vertical' | 'none';

export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type RenderProps = {
	width: number;
	height: number;
	fontSize: 'xs' | 'sm' | 'md';
};

export type AutoComplete = 'on' | 'password' | 'off';

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
	// CUI Textarea Props
	| 'as'
	| 'autoComplete'
	| 'colorScheme'
	| 'errorBorderColor'
	| 'focusBorderColor'
	| 'htmlSize'
	| 'isInvalid'
	| 'resize'
	| 'size'
	| 'variant'
	| 'sx';

export type TextareaProps = {
	autoComplete?: AutoComplete;
	color: TextareaColor;
	colorMode?: ColorMode;
	label?: string;
	helper?: string;
	isError?: boolean;
	isWarning?: boolean;
	isSuccess?: boolean;
	isFocused?: boolean;
	isFullWidth?: boolean;
	renderLeftPanel?: (props: RenderProps) => ReactNode;
	renderRightPanel?: (props: RenderProps) => ReactNode;
	resize?: TextareaResize;
	size?: TextareaSize;
	sx?: { group?: Style; textarea?: Style; formLabel?: Style; formHelperText?: Style };
} & Omit<CUITextareaProps, Omitted>;
