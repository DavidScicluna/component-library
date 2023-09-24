import type {
	BrightnessClassObj,
	ContrastClassObj,
	DropShadowClassObj,
	GrayscaleClassObj,
	HueRotateClassObj,
	InvertClassObj,
	SaturateClassObj,
	SepiaClassObj,
	ThemeBlurClassObj
} from '@common/types';

const blur: ThemeBlurClassObj = {
	'none': 'blur-none',
	'xs': 'blur-xs',
	'sm': 'blur-sm',
	'md': 'blur-md',
	'lg': 'blur-lg',
	'xl': 'blur-xl',
	'2xl': 'blur-2xl',
	'3xl': 'blur-3xl',
	'4xl': 'blur-4xl',
	'5xl': 'blur-5xl',
	'6xl': 'blur-6xl',
	'7xl': 'blur-7xl',
	'8xl': 'blur-8xl',
	'9xl': 'blur-9xl'
};

const backdrop_blur: ThemeBlurClassObj = {
	'none': 'backdrop-blur-none',
	'xs': 'backdrop-blur-xs',
	'sm': 'backdrop-blur-sm',
	'md': 'backdrop-blur-md',
	'lg': 'backdrop-blur-lg',
	'xl': 'backdrop-blur-xl',
	'2xl': 'backdrop-blur-2xl',
	'3xl': 'backdrop-blur-3xl',
	'4xl': 'backdrop-blur-4xl',
	'5xl': 'backdrop-blur-5xl',
	'6xl': 'backdrop-blur-6xl',
	'7xl': 'backdrop-blur-7xl',
	'8xl': 'backdrop-blur-8xl',
	'9xl': 'backdrop-blur-9xl'
};

const brightness: BrightnessClassObj = {
	0: 'brightness-0',
	50: 'brightness-50',
	75: 'brightness-75',
	90: 'brightness-90',
	95: 'brightness-95',
	100: 'brightness-100',
	105: 'brightness-105',
	110: 'brightness-110',
	125: 'brightness-125',
	150: 'brightness-150',
	200: 'brightness-200'
};

const contrast: ContrastClassObj = {
	0: 'contrast-0',
	50: 'contrast-50',
	75: 'contrast-75',
	100: 'contrast-100',
	125: 'contrast-125',
	150: 'contrast-150',
	200: 'contrast-200'
};

const drop_shadow: DropShadowClassObj = {
	'base': 'drop-shadow',
	'sm': 'drop-shadow-sm',
	'md': 'drop-shadow-md',
	'lg': 'drop-shadow-lg',
	'xl': 'drop-shadow-xl',
	'2xl': 'drop-shadow-2xl',
	'none': 'drop-shadow-none'
};

const grayscale: GrayscaleClassObj = {
	0: 'grayscale-0',
	1: 'grayscale'
};

const hue_rotate: HueRotateClassObj = {
	0: 'hue-rotate-0',
	30: 'hue-rotate-30',
	60: 'hue-rotate-60',
	90: 'hue-rotate-90',
	15: 'hue-rotate-15',
	180: 'hue-rotate-180'
};

const invert: InvertClassObj = {
	0: 'invert-0',
	1: 'invert'
};

const saturate: SaturateClassObj = {
	0: 'saturate-0',
	50: 'saturate-50',
	100: 'saturate-100',
	150: 'saturate-150',
	200: 'saturate-200'
};

const sepia: SepiaClassObj = {
	0: 'sepia-0',
	1: 'sepia'
};

export default {
	blur,
	backdrop_blur,
	brightness,
	contrast,
	drop_shadow,
	grayscale,
	hue_rotate,
	invert,
	saturate,
	sepia
};
