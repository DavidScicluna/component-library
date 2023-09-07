import type { ElementType, MouseEvent as ME, ReactNode } from 'react';

import type { PickFrom, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';

export type ButtonMouseEvent = ME<HTMLButtonElement, globalThis.MouseEvent>;

export type ButtonDefaultElement = 'button';
export type ButtonElement = PickFrom<ElementType, 'button'>;

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text';

export type ButtonRenderProps = Pick<ButtonOtherProps, 'color' | 'colorMode'> & { w?: number; h?: number };

type ButtonOtherProps = ThemeAppAppearanceProps & {
	renderLeft?: (props: ButtonRenderProps) => ReactNode;
	renderRight?: (props: ButtonRenderProps) => ReactNode;
	renderSpinner?: (props: ButtonRenderProps) => ReactNode;
	/**
	 * If true, the button will allow on pressing the enter key the button will be clicked
	 *
	 * @default true
	 */
	canClickOnEnter?: boolean;
	/**
	 * If true, the button will allow on pressing the space key the button will be clicked
	 *
	 * @default true
	 */
	canClickOnSpace?: boolean;
	/**
	 * If true, the button will be styled in its active state
	 *
	 * @default false
	 */
	isActive?: boolean;
	/**
	 * If true, the button will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: boolean;
	/**
	 * If true, the button will be disabled
	 *
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * If true, the button can be focused
	 *
	 * @default true
	 */
	isFocusable?: boolean;
	/**
	 * If true, the button will take the full width of its parent
	 *
	 * @default false
	 */
	isFullWidth?: boolean;
	/**
	 * If true, the button will show a spinner
	 *
	 * @default false
	 */
	isLoading?: boolean;
	/**
	 * If true, the button's border-radius will be styled in its fullest mode
	 *
	 * @default false
	 */
	isRound?: boolean;
	/**
	 * The size of the Button
	 *
	 * @default 'md'
	 */
	size?: ResponsiveValue<ButtonSize>;
	/**
	 * The variant of the Button
	 *
	 * @default 'contained'
	 */
	variant?: ResponsiveValue<ButtonVariant>;
};

export type ButtonProps<Element extends ButtonElement = ButtonDefaultElement> = Omit<
	BoxProps<Element, ButtonOtherProps>,
	keyof BoxOtherProps
>;

export type ButtonRef<Element extends ButtonElement = ButtonDefaultElement> = BoxRef<Element>;

export type ButtonContext<Element extends ButtonElement = ButtonDefaultElement> = Pick<
	ButtonProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
