import type {
	BrightnessClass,
	ContrastClass,
	GrayscaleClass,
	HueRotateClass,
	InvertClass,
	SaturateClass,
	SepiaClass,
	ThemeBlurClass
} from '@common/types';
import type { ObjectFitClass, ObjectPositionClass } from '@common/types/classes';

import type { ImageFilters, ImageMode, ImageOptions } from '../types';

export const DEFAULT_IMAGE_BORING: ImageMode = {};
export const DEFAULT_IMAGE_THUMBNAIL: ImageMode = {};
export const DEFAULT_IMAGE_FULL: ImageMode = {};

export const DEFAULT_IMAGE_BLUR: ThemeBlurClass = 'none';
export const DEFAULT_IMAGE_BRIGHTNESS: BrightnessClass = 100;
export const DEFAULT_IMAGE_CONTRAST: ContrastClass = 100;
export const DEFAULT_IMAGE_GRAYSCALE: GrayscaleClass = 0;
export const DEFAULT_IMAGE_HUE_ROTATE: HueRotateClass = 0;
export const DEFAULT_IMAGE_INVERT: InvertClass = 0;
export const DEFAULT_IMAGE_SATURATE: SaturateClass = 100;
export const DEFAULT_IMAGE_SEPIA: SepiaClass = 0;

export const DEFAULT_IMAGE_FILTERS: ImageFilters = {
	blur: DEFAULT_IMAGE_BLUR,
	brightness: DEFAULT_IMAGE_BRIGHTNESS,
	contrast: DEFAULT_IMAGE_CONTRAST,
	grayscale: DEFAULT_IMAGE_GRAYSCALE,
	hueRotate: DEFAULT_IMAGE_HUE_ROTATE,
	invert: DEFAULT_IMAGE_INVERT,
	saturate: DEFAULT_IMAGE_SATURATE,
	sepia: DEFAULT_IMAGE_SEPIA
};

export const DEFAULT_IMAGE_FIT: ObjectFitClass = 'cover';
export const DEFAULT_IMAGE_POSITION: ObjectPositionClass = 'center';

export const DEFAULT_IMAGE_OPTIONS: ImageOptions = {
	fit: DEFAULT_IMAGE_FIT,
	position: DEFAULT_IMAGE_POSITION
};
