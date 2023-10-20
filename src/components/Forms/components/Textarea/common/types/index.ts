import type { ElementType, ReactNode } from 'react';

import type {
	PickFrom,
	PolymorphicChangeEvent,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResizeClass,
	ResponsiveValue,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { TextProps } from '@components/Typography';

export type TextareaMouseEvent<Element extends TextareaElement = TextareaDefaultElement> =
	PolymorphicMouseEvent<Element>;
export type TextareaChangeEvent<Element extends TextareaElement = TextareaDefaultElement> =
	PolymorphicChangeEvent<Element>;
export type TextareaFocusEvent<Element extends TextareaElement = TextareaDefaultElement> =
	PolymorphicFocusEvent<Element>;

export type TextareaDefaultElement = 'textarea';
export type TextareaElement = PickFrom<ElementType, 'textarea'>;

// export type TextareaAutoComplete = 'on' | 'password' | 'off';

export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextareaVariant = 'outlined' | 'underline' | 'unstyled';

export type TextareaRenderProps<Element extends TextareaElement = TextareaDefaultElement> = Pick<
	TextareaOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type TextareaOtherProps<Element extends TextareaElement = TextareaDefaultElement> = ThemeAppAppearanceProps & {
	// autoComplete?: TextareaAutoComplete;
	renderLeft?: (props: TextareaRenderProps<Element>) => ReactNode;
	renderRight?: (props: TextareaRenderProps<Element>) => ReactNode;
	renderTotal?: (props: TextProps) => ReactNode;
	/**
	 * If true, the textarea will be disabled
	 *
	 * @default false
	 */
	isDisabled?: ResponsiveValue<boolean>;
	/**
	 * If true, the textarea will be invalid
	 *
	 * @default false
	 */
	isError?: ResponsiveValue<boolean>;
	/**
	 * If true, the textarea will be focused & will have the success styling
	 *
	 * @default false
	 */
	isFocused?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the textarea will have an outline
	 *
	 * @default false
	 */
	isOutlined?: ResponsiveValue<boolean>;
	/**
	 * If true, the textarea will be readonly
	 *
	 * @default false
	 */
	isReadOnly?: ResponsiveValue<boolean>;
	/**
	 * If true, the textarea will be required
	 *
	 * @default false
	 */
	isRequired?: ResponsiveValue<boolean>;
	/**
	 * If true, the textarea will have the success styling
	 *
	 * @default false
	 */
	isSuccess?: ResponsiveValue<boolean>;
	/**
	 * If true, the textarea will have the warning styling
	 *
	 * @default false
	 */
	isWarning?: ResponsiveValue<boolean>;
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
	/**
	 * The size of the textarea
	 *
	 * @default 'md'
	 */
	size?: ResponsiveValue<TextareaSize>;
	/**
	 *  The variant of the textarea
	 *
	 * @default 'default'
	 */
	variant?: ResponsiveValue<TextareaVariant>;
};

export type TextareaProps<Element extends TextareaElement = TextareaDefaultElement> = Omit<
	BoxProps<Element>,
	'children' | 'resize' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>
> &
	TextareaOtherProps;

export type TextareaRef<Element extends TextareaElement = TextareaDefaultElement> = BoxRef<Element>;
