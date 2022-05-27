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

export type TextareaAutoComplete = 'on' | 'password' | 'off';

export type TextareaColor = Exclude<Color, 'transparent' | 'black' | 'white' | 'gray' | 'red' | 'yellow' | 'green'>;

export type TextareaResize = 'horizontal' | 'vertical' | 'none';

export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextareaPanelRenderProps = {
	color: TextareaColor;
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
	autoComplete?: TextareaAutoComplete;
	color: TextareaColor;
	colorMode?: ColorMode;
	label?: string;
	helper?: string;
	isError?: boolean;
	isWarning?: boolean;
	isSuccess?: boolean;
	isFocused?: boolean;
	isFullWidth?: boolean;
	renderLeftPanel?: (props: TextareaPanelRenderProps) => ReactNode;
	renderRightPanel?: (props: TextareaPanelRenderProps) => ReactNode;
	resize?: TextareaResize;
	size?: TextareaSize;
	sx?: { group?: Style; textarea?: Style; formLabel?: Style; formHelperText?: Style };
} & Omit<CUITextareaProps, Omitted>;
