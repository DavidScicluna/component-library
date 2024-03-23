import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResizeClass, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type {
	FormsCommonSize,
	FormsCommonVariant,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';
import type { TextDefaultElement, TextProps } from '@components/Typography';

export type TextareaDefaultElement = 'textarea';
export type TextareaElement = Extract<PolymorphicElementType, 'textarea'>;

export type TextareaSize = FormsCommonSize;

export type TextareaVariant = FormsCommonVariant;

export type TextareaRenderProps = ThemeAppAppearanceProps & { w?: number; h?: number };

export type TextareaNonResponsiveValueProps = FormsNonResponsiveValueProps & {
	/**
	 * How the textarea can be resized
	 *
	 * @default 'none'
	 */
	resize?: ResizeClass;
};
export type TextareaResponsiveValueProps = FormsResponsiveValueProps &
	ResponsiveValueProps<TextareaNonResponsiveValueProps>;

export type TextareaUniqueProps = ThemeAppAppearanceProps & {
	// autoComplete?: TextareaAutoComplete;
	renderLeft?: (props: TextareaRenderProps) => ReactNode;
	renderRight?: (props: TextareaRenderProps) => ReactNode;
	renderTotal?: (props: TextProps<TextDefaultElement>) => ReactNode;
} & TextareaResponsiveValueProps;

export type TextareaProps<Element extends TextareaElement> = Omit<BoxProps<Element, TextareaUniqueProps>, 'children'>;

export type TextareaRef<Element extends TextareaElement> = BoxRef<Element>;
