import type { ReactNode } from 'react';

import type { PolymorphicElementType, ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { PushableOverlayNonResponsiveValueProps } from '@components/Overlay';

export type ButtonDefaultElement = 'button';
export type ButtonElement = Extract<PolymorphicElementType, 'button'>;

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'contained' | 'light' | 'dark' | 'outlined' | 'monochrome' | 'text' | 'unstyled';

export type ButtonRenderProps = ThemeAppAppearanceProps & { w?: number; h?: number };

export type ButtonNonResponsiveValueProps = {
	/**
	 * If true, the button will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: boolean;
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
	size?: ButtonSize;
	/**
	 * The variant of the Button
	 *
	 * @default 'contained'
	 */
	variant?: ButtonVariant;
} & Pick<PushableOverlayNonResponsiveValueProps, 'isActive' | 'isDisabled' | 'isFocused' | 'isOutlined'>;
export type ButtonResponsiveValueProps = ResponsiveValueProps<ButtonNonResponsiveValueProps>;

export type ButtonUniqueProps = ThemeAppAppearanceProps & {
	renderLeft?: (props: ButtonRenderProps) => ReactNode;
	renderRight?: (props: ButtonRenderProps) => ReactNode;
	renderSpinner?: (props: ButtonRenderProps) => ReactNode;
} & ButtonResponsiveValueProps;

export type ButtonProps<Element extends ButtonElement> = BoxProps<Element, ButtonUniqueProps>;

export type ButtonRef<Element extends ButtonElement> = BoxRef<Element>;

type PickedButtonProps = 'color' | 'colorMode' | 'size' | 'variant';
export type ButtonContext<Element extends ButtonElement> = Pick<ButtonProps<Element>, PickedButtonProps>;
