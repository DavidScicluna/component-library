import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type {
	FormsCommonSize,
	FormsCommonVariant,
	FormsNonResponsiveValueProps,
	FormsResponsiveValueProps
} from '@components/Forms/common/types';

export type NumberInputDefaultElement = 'input';
export type NumberInputElement = Extract<PolymorphicElementType, 'input'>;

// export type NumberInputAutoComplete = 'on' | 'password' | 'off';

export type NumberInputSize = FormsCommonSize;

export type NumberInputVariant = FormsCommonVariant;

export type NumberInputRenderProps = ThemeAppAppearanceProps & {
	w?: number;
	h?: number;
};

export type NumberInputNonResponsiveValueProps = FormsNonResponsiveValueProps & {
	/**
	 * Value set to the input when increment/decrement buttons are clicked or up/down arrows pressed if the input is empty, 0 by default
	 * @default 0
	 */
	startValue?: number;
	/**
	 * Determines whether negative values are allowed, `true` by default
	 * @default true
	 */
	isNegativeAllowed?: boolean;
};
export type NumberInputResponsiveValueProps = FormsResponsiveValueProps &
	ResponsiveValueProps<NumberInputNonResponsiveValueProps>;

export type NumberInputUniqueProps = ThemeAppAppearanceProps & {
	// autoComplete?: NumberInputAutoComplete;
	renderLeft?: (props: NumberInputRenderProps) => ReactNode;
	renderRight?: (props: NumberInputRenderProps) => ReactNode;
	onIncrement?: (value: number) => void;
	onDecrement?: (value: number) => void;
} & NumberInputResponsiveValueProps;

export type NumberInputProps<Element extends NumberInputElement> = Omit<
	BoxProps<Element, NumberInputUniqueProps>,
	'children'
>;

export type NumberInputRef<Element extends NumberInputElement> = BoxRef<Element>;
