import type { ElementType } from 'react';

import type {
	BackgroundAttachmentClass,
	BackgroundBlendModeClass,
	BackgroundClipClass,
	BackgroundOriginClass,
	BackgroundPositionClass,
	BackgroundRepeatClass,
	BackgroundSizeClass,
	BrightnessClass,
	ContrastClass,
	GrayscaleClass,
	HueRotateClass,
	InvertClass,
	ResponsiveValue,
	SaturateClass,
	SepiaClass,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';

import type { BoxProps, BoxRef } from '@components/Box';

export type BackgroundImageFilters = {
	/**
	 * Blur effect on the background image.
	 *
	 * @default 'none'
	 */
	blur?: ResponsiveValue<ThemeBlurClass>;
	/**
	 * Brightness effect on the background image.
	 *
	 * @default 100
	 */
	brightness?: ResponsiveValue<BrightnessClass>;
	/**
	 * Contrast effect on the background image.
	 *
	 * @default 100
	 */
	contrast?: ResponsiveValue<ContrastClass>;
	/**
	 * Grayscale effect on the background image.
	 *
	 * @default 0
	 */
	grayscale?: ResponsiveValue<GrayscaleClass>;
	/**
	 * Hue Rotate effect on the background image.
	 *
	 * @default 0
	 */
	hueRotate?: ResponsiveValue<HueRotateClass>;
	/**
	 * Invert effect on the background image.
	 *
	 * @default 0
	 */
	invert?: ResponsiveValue<InvertClass>;
	/**
	 * Saturate effect on the background image.
	 *
	 * @default 100
	 */
	saturate?: ResponsiveValue<SaturateClass>;
	/**
	 * Sepia effect on the background image.
	 *
	 * @default 0
	 */
	sepia?: ResponsiveValue<SepiaClass>;
};

export type BackgroundImageOptions = {
	/**
	 * How the background image behaves when scrolling
	 *
	 * @default 'local'
	 */
	attachment?: ResponsiveValue<BackgroundAttachmentClass>;
	/**
	 * How the background image should blend with its background color
	 *
	 * @default 'normal'
	 */
	blendMode?: ResponsiveValue<BackgroundBlendModeClass>;
	/**
	 * The bounding box of the background image
	 *
	 * @default 'padding'
	 */
	clip?: ResponsiveValue<BackgroundClipClass>;
	/**
	 * How the background image is positioned relative to borders, padding, and content
	 *
	 * @default 'padding'
	 */
	origin?: ResponsiveValue<BackgroundOriginClass>;
	/**
	 * The position of the background image
	 *
	 * @default 'center'
	 */
	position?: ResponsiveValue<BackgroundPositionClass>;
	/**
	 * Thethe repetition of the background image
	 *
	 * @default 'no-repeat'
	 */
	repeat?: ResponsiveValue<BackgroundRepeatClass>;
	/**
	 * Thethe repetition of the background image
	 *
	 * @default 'cover'
	 */
	size?: ResponsiveValue<BackgroundSizeClass>;
};

type BackgroundImageOtherProps = {
	filters?: BackgroundImageFilters;
	options?: BackgroundImageOptions;
	/**
	 *  The radius of the container
	 *
	 * @default 'base'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
	/**
	 * Image url
	 */
	src: string;
};

export type BackgroundImageProps<Element extends ElementType> = BoxProps<Element, BackgroundImageOtherProps>;

export type BackgroundImageRef<Element extends ElementType> = BoxRef<Element>;
