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
	SaturateClass,
	SepiaClass
} from '@common/types';
import type { ThemeBlurClass } from '@common/types/theme';

import type { BackgroundImageFilters, BackgroundImageOptions } from '../types';

export const __DEFAULT_BACKGROUND_IMAGE_BLUR__: ThemeBlurClass = 'none';
export const __DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS__: BrightnessClass = 100;
export const __DEFAULT_BACKGROUND_IMAGE_CONTRAST__: ContrastClass = 100;
export const __DEFAULT_BACKGROUND_IMAGE_GRAYSCALE__: GrayscaleClass = 0;
export const __DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE__: HueRotateClass = 0;
export const __DEFAULT_BACKGROUND_IMAGE_INVERT__: InvertClass = 0;
export const __DEFAULT_BACKGROUND_IMAGE_SATURATE__: SaturateClass = 100;
export const __DEFAULT_BACKGROUND_IMAGE_SEPIA__: SepiaClass = 0;

export const __DEFAULT_BACKGROUND_IMAGE_FILTERS__: BackgroundImageFilters = {
	blur: __DEFAULT_BACKGROUND_IMAGE_BLUR__,
	brightness: __DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS__,
	contrast: __DEFAULT_BACKGROUND_IMAGE_CONTRAST__,
	grayscale: __DEFAULT_BACKGROUND_IMAGE_GRAYSCALE__,
	hueRotate: __DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE__,
	invert: __DEFAULT_BACKGROUND_IMAGE_INVERT__,
	saturate: __DEFAULT_BACKGROUND_IMAGE_SATURATE__,
	sepia: __DEFAULT_BACKGROUND_IMAGE_SEPIA__
};

export const __DEFAULT_BACKGROUND_IMAGE_ATTACHMENT__: BackgroundAttachmentClass = 'local';
export const __DEFAULT_BACKGROUND_IMAGE_BLEND_MODE__: BackgroundBlendModeClass = 'normal';
export const __DEFAULT_BACKGROUND_IMAGE_CLIP__: BackgroundClipClass = 'padding';
export const __DEFAULT_BACKGROUND_IMAGE_ORIGIN__: BackgroundOriginClass = 'padding';
export const __DEFAULT_BACKGROUND_IMAGE_POSITION__: BackgroundPositionClass = 'center';
export const __DEFAULT_BACKGROUND_IMAGE_REPEAT__: BackgroundRepeatClass = 'no-repeat';
export const __DEFAULT_BACKGROUND_IMAGE_SIZE__: BackgroundSizeClass = 'cover';

export const __DEFAULT_BACKGROUND_IMAGE_OPTIONS__: BackgroundImageOptions = {
	attachment: __DEFAULT_BACKGROUND_IMAGE_ATTACHMENT__,
	blendMode: __DEFAULT_BACKGROUND_IMAGE_BLEND_MODE__,
	clip: __DEFAULT_BACKGROUND_IMAGE_CLIP__,
	origin: __DEFAULT_BACKGROUND_IMAGE_ORIGIN__,
	position: __DEFAULT_BACKGROUND_IMAGE_POSITION__,
	repeat: __DEFAULT_BACKGROUND_IMAGE_REPEAT__,
	size: __DEFAULT_BACKGROUND_IMAGE_SIZE__
};
