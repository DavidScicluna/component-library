import { ChangeEvent as CE, FocusEvent as FE, ReactNode } from 'react';

import { ColorMode, TextareaProps as CUITextareaProps } from '@chakra-ui/react';

import { AppColor, Nullable, Style } from '../../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxGradient,
	BoxOther,
	BoxPadding,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';

export type TextareaChangeEvent = CE<HTMLInputElement>;

export type TextareaFocusEvent = FE<HTMLTextAreaElement, Element>;

export type TextareaAutoComplete = 'on' | 'password' | 'off';

export type TextareaResize = 'horizontal' | 'vertical' | 'none';

export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextareaVariant = 'outlined' | 'transparent';

export type TextareaPanelRenderProps = Pick<TextareaProps, 'color' | 'colorMode'> & {
	width: string; // In Pixels
	height: string; // In Pixels
	fontSize: string; // In Pixels
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

export type TextareaProps = Omit<CUITextareaProps, Omitted> & {
	autoComplete?: TextareaAutoComplete;
	color: AppColor;
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
	variant?: TextareaVariant;
	sx?: { group?: Style; textarea?: Style; formLabel?: Style; formHelperText?: Style };
};

export type TextareaRef = Nullable<HTMLTextAreaElement>;
