import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type {
	FormsCommonSize,
	FormsCommonVariant,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';

export type TextInputDefaultElement = 'input';
export type TextInputElement = Extract<PolymorphicElementType, 'input'>;

export type TextInputSize = FormsCommonSize;

export type TextInputVariant = FormsCommonVariant;

export type TextInputRenderProps = ThemeAppAppearanceProps & {
	w?: number;
	h?: number;
};

export type TextInputNonResponsiveValueProps = FormsNonResponsiveValueProps;
export type TextInputResponsiveValueProps = FormsResponsiveValueProps &
	ResponsiveValueProps<TextInputNonResponsiveValueProps>;

export type TextInputUniqueProps = ThemeAppAppearanceProps & {
	renderLeft?: (props: TextInputRenderProps) => ReactNode;
	renderRight?: (props: TextInputRenderProps) => ReactNode;
} & TextInputResponsiveValueProps;

export type TextInputProps<Element extends TextInputElement> = Omit<
	BoxProps<Element, TextInputUniqueProps>,
	'children'
>;

export type TextInputRef<Element extends TextInputElement> = BoxRef<Element>;
