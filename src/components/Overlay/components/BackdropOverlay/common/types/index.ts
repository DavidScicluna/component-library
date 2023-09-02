import type { ElementType } from 'react';

import type { BackdropBlurClass, ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type BackdropOverlayBlurType = 'blur' | 'backdrop';
export type BackdropOverlayBlurTypes = Array<BackdropOverlayBlurType>;

type BackdropOverlayOtherProps = ThemeAppAppearanceProps & {
	/**
	 * The amount to increase the transparency by, given as a decimal between 0 and 1
	 *
	 * @default 0.5
	 */
	amount?: ResponsiveValue<number>;
	/**
	 * The amount of the blur effect to be applied ("none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl")
	 *
	 * @default 'none'
	 */
	blur?: ResponsiveValue<BackdropBlurClass>;
	/**
	 * The type of blur to show either a backdrop filter blur or else it will be a normal blur
	 *
	 * @default 'backdrop'
	 */
	blurType?: ResponsiveValue<BackdropOverlayBlurType>;
};

export type BackdropOverlayProps<Element extends ElementType> = BoxProps<Element, BackdropOverlayOtherProps>;

export type BackdropOverlayRef<Element extends ElementType> = BoxRef<Element>;
