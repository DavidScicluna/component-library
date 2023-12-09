import type { ElementType, ReactNode } from 'react';

import type {
	PolymorphicChangeEvent,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResizeClass,
	ResponsiveValue
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms';
import type { TextProps } from '@components/Typography';

export type TextareaMouseEvent<Element extends TextareaElement = TextareaDefaultElement> =
	PolymorphicMouseEvent<Element>;
export type TextareaChangeEvent<Element extends TextareaElement = TextareaDefaultElement> =
	PolymorphicChangeEvent<Element>;
export type TextareaFocusEvent<Element extends TextareaElement = TextareaDefaultElement> =
	PolymorphicFocusEvent<Element>;

export type TextareaDefaultElement = 'textarea';
export type TextareaElement = Extract<ElementType, 'textarea'>;

// export type TextareaAutoComplete = 'on' | 'password' | 'off';

export type TextareaSize = FormsCommonSize;

export type TextareaVariant = FormsCommonVariant;

export type TextareaRenderProps<Element extends TextareaElement = TextareaDefaultElement> = Pick<
	TextareaOtherProps<Element>,
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

type TextareaOtherProps<Element extends TextareaElement = TextareaDefaultElement> = {
	// autoComplete?: TextareaAutoComplete;
	renderLeft?: (props: TextareaRenderProps<Element>) => ReactNode;
	renderRight?: (props: TextareaRenderProps<Element>) => ReactNode;
	renderTotal?: (props: TextProps) => ReactNode;
	/**
	 * The total number of characters allowed
	 */
	total?: number;
	/**
	 * How the textarea can be resized
	 *
	 * @default 'none'
	 */
	resize?: ResponsiveValue<ResizeClass>;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;

type OmittedBoxProps = 'children' | 'resize' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;

export type TextareaProps<Element extends TextareaElement = TextareaDefaultElement> = Omit<
	BoxProps<Element, TextareaOtherProps>,
	OmittedBoxProps
>;

export type TextareaRef<Element extends TextareaElement = TextareaDefaultElement> = BoxRef<Element>;
