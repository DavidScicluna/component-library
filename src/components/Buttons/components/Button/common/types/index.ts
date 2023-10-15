import type { ElementType, ReactNode } from 'react';

import type { PickFrom, PolymorphicMouseEvent, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayProps } from '@components/Overlay/components/PushableOverlay';

export type ButtonMouseEvent<Element extends ButtonElement = ButtonDefaultElement> = PolymorphicMouseEvent<Element>;

export type ButtonDefaultElement = 'button';
export type ButtonElement = PickFrom<ElementType, 'button'>;

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text' | 'unstyled';

export type ButtonRenderProps<Element extends ButtonElement = ButtonDefaultElement> = Pick<
	ButtonOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type ButtonOtherProps<Element extends ButtonElement = ButtonDefaultElement> = ThemeAppAppearanceProps & {
	renderLeft?: (props: ButtonRenderProps<Element>) => ReactNode;
	renderRight?: (props: ButtonRenderProps<Element>) => ReactNode;
	renderSpinner?: (props: ButtonRenderProps<Element>) => ReactNode;
	/**
	 * If true, the button will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: ResponsiveValue<boolean>;
	/**
	 * If true, the button will take the full width of its parent
	 *
	 * @default false
	 */
	isFullWidth?: ResponsiveValue<boolean>;
	/**
	 * If true, the button will show a spinner
	 *
	 * @default false
	 */
	isLoading?: ResponsiveValue<boolean>;
	/**
	 * If true, the button's border-radius will be styled in its fullest mode
	 *
	 * @default false
	 */
	isRound?: ResponsiveValue<boolean>;
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
} & Pick<PushableOverlayProps<Element>, 'isActive' | 'isDisabled' | 'isFocused' | 'isOutlined'>;

export type ButtonProps<Element extends ButtonElement = ButtonDefaultElement> = Omit<
	BoxProps<Element, ButtonOtherProps<Element>>,
	keyof BoxOtherProps
>;

export type ButtonRef<Element extends ButtonElement = ButtonDefaultElement> = BoxRef<Element>;

export type ButtonContext<Element extends ButtonElement = ButtonDefaultElement> = Pick<
	ButtonProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
