import type { ImgHTMLAttributes } from 'react';

import type {
	BrightnessClass,
	ContrastClass,
	GrayscaleClass,
	HueRotateClass,
	InvertClass,
	PolymorphicElement,
	PolymorphicElementType,
	ResponsiveValue,
	SaturateClass,
	SepiaClass,
	ThemeAppAppearanceProps,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';
import type { ObjectFitClass, ObjectPositionClass } from '@common/types/classes';

import type { BoxProps, BoxRef } from '@components/Box';

export type ImageFilters = {
	/**
	 * Blur effect on the image
	 *
	 * @default 'none'
	 */
	blur?: ResponsiveValue<ThemeBlurClass>;
	/**
	 * Brightness effect on the image
	 *
	 * @default 100
	 */
	brightness?: ResponsiveValue<BrightnessClass>;
	/**
	 * Contrast effect on the image
	 *
	 * @default 100
	 */
	contrast?: ResponsiveValue<ContrastClass>;
	/**
	 * Grayscale effect on the image
	 *
	 * @default 0
	 */
	grayscale?: ResponsiveValue<GrayscaleClass>;
	/**
	 * Hue Rotate effect on the image
	 *
	 * @default 0
	 */
	hueRotate?: ResponsiveValue<HueRotateClass>;
	/**
	 * Invert effect on the image
	 *
	 * @default 0
	 */
	invert?: ResponsiveValue<InvertClass>;
	/**
	 * Saturate effect on the image
	 *
	 * @default 100
	 */
	saturate?: ResponsiveValue<SaturateClass>;
	/**
	 * Sepia effect on the image
	 *
	 * @default 0
	 */
	sepia?: ResponsiveValue<SepiaClass>;
};

export type ImageOptions = {
	/**
	 * How the image should be resized
	 *
	 * @default 'cover'
	 */
	fit?: ResponsiveValue<ObjectFitClass>;
	/**
	 * How the image should be positioned within its container.
	 *
	 * @default 'center'
	 */
	position?: ResponsiveValue<ObjectPositionClass>;
};

export type ImageType = 'boring' | 'thumbnail' | 'full';
export type ImageMode = Pick<ImgHTMLAttributes<PolymorphicElement<'img'>>, 'alt' | 'onLoad' | 'onError' | 'src'>;
export type ImageModes = Partial<Record<ImageType, ResponsiveValue<ImageMode>>>;

type ImageOtherProps = ThemeAppAppearanceProps & {
	filters?: ResponsiveValue<ImageFilters>;
	options?: ResponsiveValue<ImageOptions>;
	/**
	 *  The radius of the container
	 *
	 * @default 'base'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
} & ImageModes;

export type ImageProps<Element extends PolymorphicElementType> = Omit<BoxProps<Element, ImageOtherProps>, 'children'>;

export type ImageRef<Element extends PolymorphicElementType> = BoxRef<Element>;
