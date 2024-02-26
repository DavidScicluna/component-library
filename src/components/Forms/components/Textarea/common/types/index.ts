import type { ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicElementType,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResizeClass,
	ResponsiveValue
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms/common/types';
import type { TextDefaultElement, TextProps } from '@components/Typography';

export type TextareaDefaultElement = 'textarea';
export type TextareaElement = Extract<PolymorphicElementType, 'textarea'>;

export type TextareaMouseEvent<Element extends TextareaElement> = PolymorphicMouseEvent<Element>;
export type TextareaChangeEvent<Element extends TextareaElement> = PolymorphicChangeEvent<Element>;
export type TextareaFocusEvent<Element extends TextareaElement> = PolymorphicFocusEvent<Element>;

export type TextareaSize = FormsCommonSize;

export type TextareaVariant = FormsCommonVariant;

export type TextareaRenderProps<Element extends TextareaElement> = Pick<
	TextareaOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type PickedFormsCommonProps =
	| 'color'
	| 'colorMode'
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isError'
	| 'isFocused'
	| 'isOutlined'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size'
	| 'variant';

type TextareaOtherProps<Element extends TextareaElement> = {
	// autoComplete?: TextareaAutoComplete;
	renderLeft?: (props: TextareaRenderProps<Element>) => ReactNode;
	renderRight?: (props: TextareaRenderProps<Element>) => ReactNode;
	renderTotal?: (props: TextProps<TextDefaultElement>) => ReactNode;
	/**
	 * How the textarea can be resized
	 *
	 * @default 'none'
	 */
	resize?: ResponsiveValue<ResizeClass>;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

export type TextareaProps<Element extends TextareaElement> = Omit<
	BoxProps<Element, TextareaOtherProps<Element>>,
	'children'
>;

export type TextareaRef<Element extends TextareaElement> = BoxRef<Element>;
