import type { ElementType, ImgHTMLAttributes, SyntheticEvent } from 'react';

import type {
	BrightnessClass,
	ContrastClass,
	GrayscaleClass,
	HueRotateClass,
	InvertClass,
	ResponsiveValue,
	SaturateClass,
	SepiaClass,
	ThemeAppAppearanceProps,
	ThemeBlurClass,
	ThemeRadius
} from '@common/types';
import type { ObjectFitClass, ObjectPositionClass } from '@common/types/classes';

import type { BoxProps, BoxRef } from '@components/Box';

export type ImageSyntheticEvent = SyntheticEvent<HTMLImageElement, Event>;

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
export type ImageMode = Pick<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'onLoad' | 'onError' | 'src'>;
export type ImageModes = Partial<Record<ImageType, ImageMode>>;

type ImageOtherProps = ThemeAppAppearanceProps & {
	// alt: string;
	filters?: ImageFilters;
	options?: ImageOptions;
	/**
	 *  The radius of the container
	 *
	 * @default 'base'
	 */
	radius?: ResponsiveValue<ThemeRadius>;
} & ImageModes;

export type ImageProps<Element extends ElementType> = Omit<BoxProps<Element>, 'children'> & ImageOtherProps;

export type ImageRef<Element extends ElementType> = BoxRef<Element>;
