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

import type { ImageFilters, ImageOptions } from '../types';

export const __DEFAULT_IMAGE_BLUR__: ThemeBlurClass = 'none';
export const __DEFAULT_IMAGE_BRIGHTNESS__: BrightnessClass = 100;
export const __DEFAULT_IMAGE_CONTRAST__: ContrastClass = 100;
export const __DEFAULT_IMAGE_GRAYSCALE__: GrayscaleClass = 0;
export const __DEFAULT_IMAGE_HUE_ROTATE__: HueRotateClass = 0;
export const __DEFAULT_IMAGE_INVERT__: InvertClass = 0;
export const __DEFAULT_IMAGE_SATURATE__: SaturateClass = 100;
export const __DEFAULT_IMAGE_SEPIA__: SepiaClass = 0;

export const __DEFAULT_IMAGE_FILTERS__: ImageFilters = {
	blur: __DEFAULT_IMAGE_BLUR__,
	brightness: __DEFAULT_IMAGE_BRIGHTNESS__,
	contrast: __DEFAULT_IMAGE_CONTRAST__,
	grayscale: __DEFAULT_IMAGE_GRAYSCALE__,
	hueRotate: __DEFAULT_IMAGE_HUE_ROTATE__,
	invert: __DEFAULT_IMAGE_INVERT__,
	saturate: __DEFAULT_IMAGE_SATURATE__,
	sepia: __DEFAULT_IMAGE_SEPIA__
};

export const __DEFAULT_IMAGE_FIT__: ObjectFitClass = 'cover';
export const __DEFAULT_IMAGE_POSITION__: ObjectPositionClass = 'center';

export const __DEFAULT_IMAGE_OPTIONS__: ImageOptions = {
	fit: __DEFAULT_IMAGE_FIT__,
	position: __DEFAULT_IMAGE_POSITION__
};
