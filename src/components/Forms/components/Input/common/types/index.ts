import type { ElementType, ReactNode } from 'react';

import type {
	PickFrom,
	PolymorphicChangeEvent,
	PolymorphicFocusEvent,
	PolymorphicMouseEvent,
	ResponsiveValue,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type InputMouseEvent<Element extends InputElement = InputDefaultElement> = PolymorphicMouseEvent<Element>;
export type InputChangeEvent<Element extends InputElement = InputDefaultElement> = PolymorphicChangeEvent<Element>;
export type InputFocusEvent<Element extends InputElement = InputDefaultElement> = PolymorphicFocusEvent<Element>;

export type InputDefaultElement = 'input';
export type InputElement = PickFrom<ElementType, 'input'>;

// export type InputAutoComplete = 'on' | 'password' | 'off';

export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type InputVariant = 'outlined' | 'underline' | 'unstyled';

export type InputRenderProps<Element extends InputElement = InputDefaultElement> = Pick<
	InputOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type InputOtherProps<Element extends InputElement = InputDefaultElement> = ThemeAppAppearanceProps & {
	// autoComplete?: InputAutoComplete;
	renderLeft?: (props: InputRenderProps<Element>) => ReactNode;
	renderRight?: (props: InputRenderProps<Element>) => ReactNode;
	/**
	 * If true, the input will be disabled
	 *
	 * @default false
	 */
	isDisabled?: ResponsiveValue<boolean>;
	/**
	 * If true, the input will be invalid
	 *
	 * @default false
	 */
	isError?: ResponsiveValue<boolean>;
	/**
	 * If true, the input will be focused & will have the success styling
	 *
	 * @default false
	 */
	isFocused?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the input will have an outline
	 *
	 * @default false
	 */
	isOutlined?: ResponsiveValue<boolean>;
	/**
	 * If true, the input will be readonly
	 *
	 * @default false
	 */
	isReadOnly?: ResponsiveValue<boolean>;
	/**
	 * If true, the input will be required
	 *
	 * @default false
	 */
	isRequired?: ResponsiveValue<boolean>;
	/**
	 * If true, the input will have the success styling
	 *
	 * @default false
	 */
	isSuccess?: ResponsiveValue<boolean>;
	/**
	 * If true, the input will have the warning styling
	 *
	 * @default false
	 */
	isWarning?: ResponsiveValue<boolean>;
	/**
	 * The size of the input
	 *
	 * @default 'md'
	 */
	size?: ResponsiveValue<InputSize>;
	/**
	 *  The variant of the input
	 *
	 * @default 'default'
	 */
	variant?: ResponsiveValue<InputVariant>;
};

export type InputProps<Element extends InputElement = InputDefaultElement> = Omit<
	BoxProps<Element, InputOtherProps<Element>>,
	'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>
>;

export type InputRef<Element extends InputElement = InputDefaultElement> = BoxRef<Element>;
