import { ChangeEvent as CE, FocusEvent as FE, ReactNode } from 'react';

import { TextareaProps as CUITextareaProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxMargin,
	BoxOther,
	BoxPadding,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';
import { FormControlProps } from '../../../FormControl/common/types';

export type TextareaChangeEvent = CE<HTMLInputElement>;

export type TextareaFocusEvent = FE<HTMLTextAreaElement, Element>;

export type TextareaAutoComplete = 'on' | 'password' | 'off';

export type TextareaResize = 'horizontal' | 'vertical' | 'none';

export type TextareaRenderProps = Pick<TextareaProps, 'color' | 'colorMode'> & {
	width: number; // In Pixels
	height: number; // In Pixels
};

type Omitted =
	// CUI Box Props
	| BoxMargin
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
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
	// CUI Textarea Props
	| 'as'
	| 'autoComplete'
	| 'colorScheme'
	| 'errorBorderColor'
	| 'focusBorderColor'
	| 'htmlSize'
	| 'isInvalid'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'resize'
	| 'size'
	| 'variant';

type Picked =
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size';

export type TextareaProps = Omit<CUITextareaProps, Omitted> & {
	autoComplete?: TextareaAutoComplete;
	renderLeft?: (props: TextareaRenderProps) => ReactNode;
	renderRight?: (props: TextareaRenderProps) => ReactNode;
	resize?: TextareaResize;
} & Pick<FormControlProps, Picked>;

export type TextareaRef = Nullable<HTMLTextAreaElement>;
