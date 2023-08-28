import type { BackdropBlurClassObj, BlurClassObj, SaturateClassObj } from '@common/types';

const blur: BlurClassObj = {
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

const backdrop_blur: BackdropBlurClassObj = {
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

const saturate: SaturateClassObj = {
	0: 'saturate-0',
	50: 'saturate-50',
	100: 'saturate-100',
	150: 'saturate-150',
	200: 'saturate-200'
};

export default { blur, backdrop_blur, saturate };
