import type { ReactNode } from 'react';

import type {
	PolymorphicElementType,
	PolymorphicMouseEvent,
	ResponsiveValue,
	ThemeAppAppearanceProps
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayProps } from '@components/Overlay';

export type ButtonDefaultElement = 'button';
export type ButtonElement = Extract<PolymorphicElementType, 'button'>;

export type ButtonMouseEvent<Element extends ButtonElement> = PolymorphicMouseEvent<Element>;

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text' | 'unstyled';

export type ButtonRenderProps<Element extends ButtonElement> = Pick<
	ButtonOtherProps<Element>,
	'color' | 'colorMode'
> & { w?: number; h?: number };

type ButtonOtherProps<Element extends ButtonElement> = ThemeAppAppearanceProps & {
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

export type ButtonProps<Element extends ButtonElement> = BoxProps<Element, ButtonOtherProps<Element>>;

export type ButtonRef<Element extends ButtonElement> = BoxRef<Element>;

export type ButtonContext<Element extends ButtonElement> = Pick<
	ButtonProps<Element>,
	'color' | 'colorMode' | 'size' | 'variant'
>;
