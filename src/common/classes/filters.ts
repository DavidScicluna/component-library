import { BackdropBlurObj, BlurObj, SaturateObj } from '@common/types/classes';

const blur: BlurObj = {
	'none': 'blur-none',
	'sm': 'blur-sm',
	'base': 'blur',
	'md': 'blur-md',
	'lg': 'blur-lg',
	'xl': 'blur-xl',
	'2xl': 'blur-2xl',
	'3xl': 'blur-3xl'
};

const backdropBlur: BackdropBlurObj = {
	'none': 'backdrop-blur-none',
	'sm': 'backdrop-blur-sm',
	'base': 'backdrop-blur',
	'md': 'backdrop-blur-md',
	'lg': 'backdrop-blur-lg',
	'xl': 'backdrop-blur-xl',
	'2xl': 'backdrop-blur-2xl',
	'3xl': 'backdrop-blur-3xl'
};

const saturate: SaturateObj = {
	0: 'saturate-0',
	50: 'saturate-50',
	100: 'saturate-100',
	150: 'saturate-150',
	200: 'saturate-200'
};

export default { blur, backdropBlur, saturate };
