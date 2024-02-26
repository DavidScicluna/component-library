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
	SepiaClass,
	ThemeBlurClass
} from '@common/types';

import type { BackgroundImageFilters, BackgroundImageOptions } from '../types';

export const DEFAULT_BACKGROUND_IMAGE_BLUR: ThemeBlurClass = 'none';
export const DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS: BrightnessClass = 100;
export const DEFAULT_BACKGROUND_IMAGE_CONTRAST: ContrastClass = 100;
export const DEFAULT_BACKGROUND_IMAGE_GRAYSCALE: GrayscaleClass = 0;
export const DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE: HueRotateClass = 0;
export const DEFAULT_BACKGROUND_IMAGE_INVERT: InvertClass = 0;
export const DEFAULT_BACKGROUND_IMAGE_SATURATE: SaturateClass = 100;
export const DEFAULT_BACKGROUND_IMAGE_SEPIA: SepiaClass = 0;

export const DEFAULT_BACKGROUND_IMAGE_FILTERS: BackgroundImageFilters = {
	blur: DEFAULT_BACKGROUND_IMAGE_BLUR,
	brightness: DEFAULT_BACKGROUND_IMAGE_BRIGHTNESS,
	contrast: DEFAULT_BACKGROUND_IMAGE_CONTRAST,
	grayscale: DEFAULT_BACKGROUND_IMAGE_GRAYSCALE,
	hueRotate: DEFAULT_BACKGROUND_IMAGE_HUE_ROTATE,
	invert: DEFAULT_BACKGROUND_IMAGE_INVERT,
	saturate: DEFAULT_BACKGROUND_IMAGE_SATURATE,
	sepia: DEFAULT_BACKGROUND_IMAGE_SEPIA
};

export const DEFAULT_BACKGROUND_IMAGE_ATTACHMENT: BackgroundAttachmentClass = 'local';
export const DEFAULT_BACKGROUND_IMAGE_BLEND_MODE: BackgroundBlendModeClass = 'normal';
export const DEFAULT_BACKGROUND_IMAGE_CLIP: BackgroundClipClass = 'padding';
export const DEFAULT_BACKGROUND_IMAGE_ORIGIN: BackgroundOriginClass = 'padding';
export const DEFAULT_BACKGROUND_IMAGE_POSITION: BackgroundPositionClass = 'center';
export const DEFAULT_BACKGROUND_IMAGE_REPEAT: BackgroundRepeatClass = 'no-repeat';
export const DEFAULT_BACKGROUND_IMAGE_SIZE: BackgroundSizeClass = 'cover';

export const DEFAULT_BACKGROUND_IMAGE_OPTIONS: BackgroundImageOptions = {
	attachment: DEFAULT_BACKGROUND_IMAGE_ATTACHMENT,
	blendMode: DEFAULT_BACKGROUND_IMAGE_BLEND_MODE,
	clip: DEFAULT_BACKGROUND_IMAGE_CLIP,
	origin: DEFAULT_BACKGROUND_IMAGE_ORIGIN,
	position: DEFAULT_BACKGROUND_IMAGE_POSITION,
	repeat: DEFAULT_BACKGROUND_IMAGE_REPEAT,
	size: DEFAULT_BACKGROUND_IMAGE_SIZE
};

export const DEFAULT_BACKGROUND_IMAGE_SRC = '';
