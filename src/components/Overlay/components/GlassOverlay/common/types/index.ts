import type {
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type GlassOverlayBlurType = 'blur' | 'backdrop';

type GlassOverlayOtherProps = ThemeAppAppearanceProps & {
	/**
	 * The amount to increase the transparency by, given as a decimal between 0 and 1
	 *
	 * @default 0.5
	 */
	backdropAmount?: ResponsiveValue<number>;
	/**
	 * The amount of the blur effect to be applied ("none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl")
	 *
	 * @default 'md'
	 */
	blur?: ResponsiveValue<ThemeBlurClass>;
	/**
	 * The type of blur to show either a backdrop filter blur or else it will be a normal blur
	 *
	 * @default 'backdrop'
	 */
	blurType?: ResponsiveValue<GlassOverlayBlurType>;
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
	hasBackground?: ResponsiveValue<boolean>;
};

export type GlassOverlayProps<Element extends PolymorphicElementType> = BoxProps<Element, GlassOverlayOtherProps>;

export type GlassOverlayRef<Element extends PolymorphicElementType> = BoxRef<Element>;
