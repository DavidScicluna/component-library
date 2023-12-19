import type { ElementType, ReactNode } from 'react';

import type { PolymorphicChangeEvent, PolymorphicFocusEvent, PolymorphicMouseEvent } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms';

export type TextInputMouseEvent<Element extends TextInputElement = TextInputDefaultElement> =
	PolymorphicMouseEvent<Element>;
export type TextInputChangeEvent<Element extends TextInputElement = TextInputDefaultElement> =
	PolymorphicChangeEvent<Element>;
export type TextInputFocusEvent<Element extends TextInputElement = TextInputDefaultElement> =
	PolymorphicFocusEvent<Element>;

export type TextInputDefaultElement = 'input';
export type TextInputElement = Extract<ElementType, 'input'>;

export type TextInputSize = FormsCommonSize;

export type TextInputVariant = FormsCommonVariant;

export type TextInputRenderProps<Element extends TextInputElement = TextInputDefaultElement> = Pick<
	TextInputOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type PickedFormsCommonProps =
	| 'color'
	| 'colorMode'
	| 'isCompact'
	| 'isDisabled'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant';

type TextInputOtherProps<Element extends TextInputElement = TextInputDefaultElement> = {
	renderLeft?: (props: TextInputRenderProps<Element>) => ReactNode;
	renderRight?: (props: TextInputRenderProps<Element>) => ReactNode;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

type OmittedBoxProps = 'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type TextInputProps<Element extends TextInputElement = TextInputDefaultElement> = Omit<
	BoxProps<Element, TextInputOtherProps<Element>>,
	OmittedBoxProps
>;

export type TextInputRef<Element extends TextInputElement = TextInputDefaultElement> = BoxRef<Element>;
