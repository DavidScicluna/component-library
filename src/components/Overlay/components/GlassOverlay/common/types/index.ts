import type { ElementType } from 'react';

import type { BackdropBlurClass, ResponsiveValue, ThemeAppAppearanceProps, ThemeRadius } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';

export type GlassOverlayBlurType = 'blur' | 'backdrop';
export type GlassOverlayBlurTypes = Array<GlassOverlayBlurType>;

type GlassOverlayOtherProps = ThemeAppAppearanceProps & {
	/**
	 * The amount of the blur effect to be applied ("none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl")
	 *
	 * @default 'md'
	 */
	blur?: ResponsiveValue<BackdropBlurClass>;
	/**
	 * The type of blur to show either a backdrop filter blur or else it will be a normal blur
	 *
	 * @default 'backdrop'
	 */
	blurType?: ResponsiveValue<GlassOverlayBlurType>;
	/**
	 * The amount to increase the transparency by, given as a decimal between 0 and 1
	 *
	 * @default 0.5
	 */
	backdropAmount?: ResponsiveValue<number>;
	/**
	 * The border radius of the glass overlay container
	 *
	 * @default 'none'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
	/**
	 * If `true` a background depending on color & colorMode will be triggered on the background
	 *
	 * @default true
	 */
	hasBackground?: boolean;
};

export type GlassOverlayProps<Element extends ElementType> = BoxProps<Element, GlassOverlayOtherProps>;

export type GlassOverlayRef<Element extends ElementType> = BoxRef<Element>;
