import type {
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type BackdropOverlayBlurType = 'blur' | 'backdrop';

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
	blur?: ResponsiveValue<ThemeBlurClass>;
	/**
	 * The type of blur to show either a backdrop filter blur or else it will be a normal blur
	 *
	 * @default 'backdrop'
	 */
	blurType?: ResponsiveValue<BackdropOverlayBlurType>;
	/**
	 * The border radius of the backdrop overlay container.
	 * @default 'full'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
};

export type BackdropOverlayProps<Element extends PolymorphicElementType> = BoxProps<Element, BackdropOverlayOtherProps>;

export type BackdropOverlayRef<Element extends PolymorphicElementType> = BoxRef<Element>;
