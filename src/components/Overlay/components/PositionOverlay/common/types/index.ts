import type { ElementType, ReactNode } from 'react';

import type {
	PolymorphicDefaultElement,
	ResponsiveValue,
	ThemeAppAppearanceProps,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';
import type { GlassOverlayProps } from '@components/Overlay';

export type PositionOverlayBlurType = 'blur' | 'backdrop';

export type PositionOverlayPlacement =
	| 'bottom-center'
	| 'bottom-end'
	| 'bottom-start'
	| 'top-end'
	| 'top-start'
	| 'top-center'
	| 'middle-center'
	| 'middle-end'
	| 'middle-start';

type PositionOverlayOtherProps<Element extends ElementType = PolymorphicDefaultElement> = ThemeAppAppearanceProps & {
	/**
	 * Callback invoked to render the overlay
	 */
	renderOverlay: () => ReactNode;
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
	blurType?: ResponsiveValue<PositionOverlayBlurType>;
	/**
	 * The position of the overlay item relative to child element
	 *
	 * @default 'middle-center'
	 */
	placement?: ResponsiveValue<PositionOverlayPlacement>;
	/**
	 * The border radius of the position overlay container
	 *
	 * @default 'none'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
	/**
	 * If `true` it will render the overlay, else if `false` it will render out
	 *
	 * @default false
	 */
	isVisible?: ResponsiveValue<boolean>;
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

export type PositionOverlayProps<Element extends ElementType = PolymorphicDefaultElement> = BoxProps<
	Element,
	PositionOverlayOtherProps<Element>
>;

export type PositionOverlayRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
