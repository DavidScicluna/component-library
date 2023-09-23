import type { ElementType, ReactNode } from 'react';

import type { BackdropBlurClass, ResponsiveValue, ThemeAppAppearanceProps, ThemeRadius } from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box/common/types';
import type { GlassOverlayProps } from '@components/Overlay/components/GlassOverlay';

export type PositionOverlayBlurType = 'blur' | 'backdrop';
export type PositionOverlayBlurTypes = Array<PositionOverlayBlurType>;

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
export type PositionOverlayPlacements = Array<PositionOverlayPlacement>;

type PositionOverlayOtherProps<Element extends ElementType> = ThemeAppAppearanceProps & {
	/**
	 * Callback invoked to render the overlay
	 */
	renderOverlay: () => ReactNode;
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
	blurType?: ResponsiveValue<PositionOverlayBlurType>;
	/**
	 * The amount to increase the transparency by, given as a decimal between 0 and 1
	 *
	 * @default 0.5
	 */
	backdropAmount?: ResponsiveValue<number>;
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
	isVisible?: boolean;
	/**
	 * If `true` it will trigger the glass effect on the background
	 *
	 * @default true
	 */
	hasGlass?: boolean;
	/**
	 * If `true` a background depending on color & colorMode will be triggered on the background
	 *
	 * @default true
	 */
	hasBackground?: boolean;
} & Pick<GlassOverlayProps<Element>, 'blur'>;

export type PositionOverlayProps<Element extends ElementType> = BoxProps<Element, PositionOverlayOtherProps<Element>>;

export type PositionOverlayRef<Element extends ElementType> = BoxRef<Element>;
