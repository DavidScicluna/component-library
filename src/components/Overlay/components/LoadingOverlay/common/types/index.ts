import type { ReactNode } from 'react';

import type {
	PolymorphicElementType,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { GlassOverlayProps } from '@components/Overlay';

export type LoadingOverlayBlurType = 'blur' | 'backdrop';

type LoadingOverlayOtherProps<Element extends PolymorphicElementType> = ThemeAppAppearanceProps & {
	renderSpinner: () => ReactNode;
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
	blurType?: ResponsiveValue<LoadingOverlayBlurType>;
	/**
	 * The border radius of the loading overlay container
	 *
	 * @default 'none'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
	/**
	 * If `true` it will fade in the spinner element else it will fade out the spinner
	 *
	 * @default false
	 */
	isLoading: ResponsiveValue<boolean>;
	/**
	 * If `true` it will trigger the glass effect on the background
	 *
	 * @default true
	 */
	hasGlass?: ResponsiveValue<boolean>;
	/**
	 * If `true` a background depending on color & colorMode will be triggered on the background
	 *
	 * @default true
	 */
	hasBackground?: ResponsiveValue<boolean>;
} & Pick<GlassOverlayProps<Element>, 'blur'>;

export type LoadingOverlayProps<Element extends PolymorphicElementType> = BoxProps<
	Element,
	LoadingOverlayOtherProps<Element>
>;

export type LoadingOverlayRef<Element extends PolymorphicElementType> = BoxRef<Element>;
