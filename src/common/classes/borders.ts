import type {
	BorderStyleObj,
	BorderWidthObj,
	OutlineOffsetObj,
	OutlineStyleObj,
	OutlineWidthObj
} from '@common/types/classes';
import type { ColorsObj, RadiiObj } from '@common/types/theme';

const borderWidth: BorderWidthObj = {
	0: 'border-0',
	1: 'border',
	2: 'border-2',
	4: 'border-4',
	8: 'border-8'
};
const borderLeftWidth: BorderWidthObj = {
	0: 'border-l-0',
	1: 'border-l',
	2: 'border-l-2',
	4: 'border-l-4',
	8: 'border-l-8'
};
const borderTopWidth: BorderWidthObj = {
	0: 'border-t-0',
	1: 'border-t',
	2: 'border-t-2',
	4: 'border-t-4',
	8: 'border-t-8'
};
const borderRightWidth: BorderWidthObj = {
	0: 'border-r-0',
	1: 'border-r',
	2: 'border-r-2',
	4: 'border-r-4',
	8: 'border-r-8'
};
const borderBottomWidth: BorderWidthObj = {
	0: 'border-b-0',
	1: 'border-b',
	2: 'border-b-2',
	4: 'border-b-4',
	8: 'border-b-8'
};

const borderStyle: BorderStyleObj = {
	solid: 'border-solid',
	dashed: 'border-dashed',
	dotted: 'border-dotted',
	double: 'border-double',
	hidden: 'border-hidden',
	none: 'border-none'
};

const borderColor: ColorsObj = {
	transparent: 'border-transparent',
	black: 'border-black',
	white: 'border-white',
	gray: {
		50: 'border-gray-50',
		100: 'border-gray-100',
		200: 'border-gray-200',
		300: 'border-gray-300',
		400: 'border-gray-400',
		500: 'border-gray-500',
		600: 'border-gray-600',
		700: 'border-gray-700',
		800: 'border-gray-800',
		900: 'border-gray-900',
		950: 'border-gray-950'
	},
	red: {
		50: 'border-red-50',
		100: 'border-red-100',
		200: 'border-red-200',
		300: 'border-red-300',
		400: 'border-red-400',
		500: 'border-red-500',
		600: 'border-red-600',
		700: 'border-red-700',
		800: 'border-red-800',
		900: 'border-red-900',
		950: 'border-red-950'
	},
	pink: {
		50: 'border-pink-50',
		100: 'border-pink-100',
		200: 'border-pink-200',
		300: 'border-pink-300',
		400: 'border-pink-400',
		500: 'border-pink-500',
		600: 'border-pink-600',
		700: 'border-pink-700',
		800: 'border-pink-800',
		900: 'border-pink-900',
		950: 'border-pink-950'
	},
	purple: {
		50: 'border-purple-50',
		100: 'border-purple-100',
		200: 'border-purple-200',
		300: 'border-purple-300',
		400: 'border-purple-400',
		500: 'border-purple-500',
		600: 'border-purple-600',
		700: 'border-purple-700',
		800: 'border-purple-800',
		900: 'border-purple-900',
		950: 'border-purple-950'
	},
	deep_purple: {
		50: 'border-deep_purple-50',
		100: 'border-deep_purple-100',
		200: 'border-deep_purple-200',
		300: 'border-deep_purple-300',
		400: 'border-deep_purple-400',
		500: 'border-deep_purple-500',
		600: 'border-deep_purple-600',
		700: 'border-deep_purple-700',
		800: 'border-deep_purple-800',
		900: 'border-deep_purple-900',
		950: 'border-deep_purple-950'
	},
	indigo: {
		50: 'border-indigo-50',
		100: 'border-indigo-100',
		200: 'border-indigo-200',
		300: 'border-indigo-300',
		400: 'border-indigo-400',
		500: 'border-indigo-500',
		600: 'border-indigo-600',
		700: 'border-indigo-700',
		800: 'border-indigo-800',
		900: 'border-indigo-900',
		950: 'border-indigo-950'
	},
	blue: {
		50: 'border-blue-50',
		100: 'border-blue-100',
		200: 'border-blue-200',
		300: 'border-blue-300',
		400: 'border-blue-400',
		500: 'border-blue-500',
		600: 'border-blue-600',
		700: 'border-blue-700',
		800: 'border-blue-800',
		900: 'border-blue-900',
		950: 'border-blue-950'
	},
	light_blue: {
		50: 'border-light_blue-50',
		100: 'border-light_blue-100',
		200: 'border-light_blue-200',
		300: 'border-light_blue-300',
		400: 'border-light_blue-400',
		500: 'border-light_blue-500',
		600: 'border-light_blue-600',
		700: 'border-light_blue-700',
		800: 'border-light_blue-800',
		900: 'border-light_blue-900',
		950: 'border-light_blue-950'
	},
	cyan: {
		50: 'border-cyan-50',
		100: 'border-cyan-100',
		200: 'border-cyan-200',
		300: 'border-cyan-300',
		400: 'border-cyan-400',
		500: 'border-cyan-500',
		600: 'border-cyan-600',
		700: 'border-cyan-700',
		800: 'border-cyan-800',
		900: 'border-cyan-900',
		950: 'border-cyan-950'
	},
	teal: {
		50: 'border-teal-50',
		100: 'border-teal-100',
		200: 'border-teal-200',
		300: 'border-teal-300',
		400: 'border-teal-400',
		500: 'border-teal-500',
		600: 'border-teal-600',
		700: 'border-teal-700',
		800: 'border-teal-800',
		900: 'border-teal-900',
		950: 'border-teal-950'
	},
	green: {
		50: 'border-green-50',
		100: 'border-green-100',
		200: 'border-green-200',
		300: 'border-green-300',
		400: 'border-green-400',
		500: 'border-green-500',
		600: 'border-green-600',
		700: 'border-green-700',
		800: 'border-green-800',
		900: 'border-green-900',
		950: 'border-green-950'
	},
	light_green: {
		50: 'border-light_green-50',
		100: 'border-light_green-100',
		200: 'border-light_green-200',
		300: 'border-light_green-300',
		400: 'border-light_green-400',
		500: 'border-light_green-500',
		600: 'border-light_green-600',
		700: 'border-light_green-700',
		800: 'border-light_green-800',
		900: 'border-light_green-900',
		950: 'border-light_green-950'
	},
	lime: {
		50: 'border-lime-50',
		100: 'border-lime-100',
		200: 'border-lime-200',
		300: 'border-lime-300',
		400: 'border-lime-400',
		500: 'border-lime-500',
		600: 'border-lime-600',
		700: 'border-lime-700',
		800: 'border-lime-800',
		900: 'border-lime-900',
		950: 'border-lime-950'
	},
	yellow: {
		50: 'border-yellow-50',
		100: 'border-yellow-100',
		200: 'border-yellow-200',
		300: 'border-yellow-300',
		400: 'border-yellow-400',
		500: 'border-yellow-500',
		600: 'border-yellow-600',
		700: 'border-yellow-700',
		800: 'border-yellow-800',
		900: 'border-yellow-900',
		950: 'border-yellow-950'
	},
	orange: {
		50: 'border-orange-50',
		100: 'border-orange-100',
		200: 'border-orange-200',
		300: 'border-orange-300',
		400: 'border-orange-400',
		500: 'border-orange-500',
		600: 'border-orange-600',
		700: 'border-orange-700',
		800: 'border-orange-800',
		900: 'border-orange-900',
		950: 'border-orange-950'
	},
	deep_orange: {
		50: 'border-deep_orange-50',
		100: 'border-deep_orange-100',
		200: 'border-deep_orange-200',
		300: 'border-deep_orange-300',
		400: 'border-deep_orange-400',
		500: 'border-deep_orange-500',
		600: 'border-deep_orange-600',
		700: 'border-deep_orange-700',
		800: 'border-deep_orange-800',
		900: 'border-deep_orange-900',
		950: 'border-deep_orange-950'
	}
};

const borderRadius: RadiiObj = {
	none: 'rounded-none',
	xs: 'rounded-xs',
	sm: 'rounded-sm',
	base: 'rounded-base',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	full: 'rounded-full'
};

const outlineWidth: OutlineWidthObj = {
	0: 'outline-0',
	1: 'outline-1',
	2: 'outline-2',
	4: 'outline-4',
	8: 'outline-8'
};

const outlineStyle: OutlineStyleObj = {
	none: 'outline-none',
	solid: 'outline',
	dashed: 'outline-dashed',
	dotted: 'outline-dotted',
	double: 'outline-double'
};

const outlineOffset: OutlineOffsetObj = {
	0: 'outline-offset-0',
	1: 'outline-offset-1',
	2: 'outline-offset-2',
	4: 'outline-offset-4',
	8: 'outline-offset-8'
};

const outlineColor: ColorsObj = {
	transparent: 'outline-transparent',
	black: 'outline-black',
	white: 'outline-white',
	gray: {
		50: 'outline-gray-50',
		100: 'outline-gray-100',
		200: 'outline-gray-200',
		300: 'outline-gray-300',
		400: 'outline-gray-400',
		500: 'outline-gray-500',
		600: 'outline-gray-600',
		700: 'outline-gray-700',
		800: 'outline-gray-800',
		900: 'outline-gray-900',
		950: 'outline-gray-950'
	},
	red: {
		50: 'outline-red-50',
		100: 'outline-red-100',
		200: 'outline-red-200',
		300: 'outline-red-300',
		400: 'outline-red-400',
		500: 'outline-red-500',
		600: 'outline-red-600',
		700: 'outline-red-700',
		800: 'outline-red-800',
		900: 'outline-red-900',
		950: 'outline-red-950'
	},
	pink: {
		50: 'outline-pink-50',
		100: 'outline-pink-100',
		200: 'outline-pink-200',
		300: 'outline-pink-300',
		400: 'outline-pink-400',
		500: 'outline-pink-500',
		600: 'outline-pink-600',
		700: 'outline-pink-700',
		800: 'outline-pink-800',
		900: 'outline-pink-900',
		950: 'outline-pink-950'
	},
	purple: {
		50: 'outline-purple-50',
		100: 'outline-purple-100',
		200: 'outline-purple-200',
		300: 'outline-purple-300',
		400: 'outline-purple-400',
		500: 'outline-purple-500',
		600: 'outline-purple-600',
		700: 'outline-purple-700',
		800: 'outline-purple-800',
		900: 'outline-purple-900',
		950: 'outline-purple-950'
	},
	deep_purple: {
		50: 'outline-deep_purple-50',
		100: 'outline-deep_purple-100',
		200: 'outline-deep_purple-200',
		300: 'outline-deep_purple-300',
		400: 'outline-deep_purple-400',
		500: 'outline-deep_purple-500',
		600: 'outline-deep_purple-600',
		700: 'outline-deep_purple-700',
		800: 'outline-deep_purple-800',
		900: 'outline-deep_purple-900',
		950: 'outline-deep_purple-950'
	},
	indigo: {
		50: 'outline-indigo-50',
		100: 'outline-indigo-100',
		200: 'outline-indigo-200',
		300: 'outline-indigo-300',
		400: 'outline-indigo-400',
		500: 'outline-indigo-500',
		600: 'outline-indigo-600',
		700: 'outline-indigo-700',
		800: 'outline-indigo-800',
		900: 'outline-indigo-900',
		950: 'outline-indigo-950'
	},
	blue: {
		50: 'outline-blue-50',
		100: 'outline-blue-100',
		200: 'outline-blue-200',
		300: 'outline-blue-300',
		400: 'outline-blue-400',
		500: 'outline-blue-500',
		600: 'outline-blue-600',
		700: 'outline-blue-700',
		800: 'outline-blue-800',
		900: 'outline-blue-900',
		950: 'outline-blue-950'
	},
	light_blue: {
		50: 'outline-light_blue-50',
		100: 'outline-light_blue-100',
		200: 'outline-light_blue-200',
		300: 'outline-light_blue-300',
		400: 'outline-light_blue-400',
		500: 'outline-light_blue-500',
		600: 'outline-light_blue-600',
		700: 'outline-light_blue-700',
		800: 'outline-light_blue-800',
		900: 'outline-light_blue-900',
		950: 'outline-light_blue-950'
	},
	cyan: {
		50: 'outline-cyan-50',
		100: 'outline-cyan-100',
		200: 'outline-cyan-200',
		300: 'outline-cyan-300',
		400: 'outline-cyan-400',
		500: 'outline-cyan-500',
		600: 'outline-cyan-600',
		700: 'outline-cyan-700',
		800: 'outline-cyan-800',
		900: 'outline-cyan-900',
		950: 'outline-cyan-950'
	},
	teal: {
		50: 'outline-teal-50',
		100: 'outline-teal-100',
		200: 'outline-teal-200',
		300: 'outline-teal-300',
		400: 'outline-teal-400',
		500: 'outline-teal-500',
		600: 'outline-teal-600',
		700: 'outline-teal-700',
		800: 'outline-teal-800',
		900: 'outline-teal-900',
		950: 'outline-teal-950'
	},
	green: {
		50: 'outline-green-50',
		100: 'outline-green-100',
		200: 'outline-green-200',
		300: 'outline-green-300',
		400: 'outline-green-400',
		500: 'outline-green-500',
		600: 'outline-green-600',
		700: 'outline-green-700',
		800: 'outline-green-800',
		900: 'outline-green-900',
		950: 'outline-green-950'
	},
	light_green: {
		50: 'outline-light_green-50',
		100: 'outline-light_green-100',
		200: 'outline-light_green-200',
		300: 'outline-light_green-300',
		400: 'outline-light_green-400',
		500: 'outline-light_green-500',
		600: 'outline-light_green-600',
		700: 'outline-light_green-700',
		800: 'outline-light_green-800',
		900: 'outline-light_green-900',
		950: 'outline-light_green-950'
	},
	lime: {
		50: 'outline-lime-50',
		100: 'outline-lime-100',
		200: 'outline-lime-200',
		300: 'outline-lime-300',
		400: 'outline-lime-400',
		500: 'outline-lime-500',
		600: 'outline-lime-600',
		700: 'outline-lime-700',
		800: 'outline-lime-800',
		900: 'outline-lime-900',
		950: 'outline-lime-950'
	},
	yellow: {
		50: 'outline-yellow-50',
		100: 'outline-yellow-100',
		200: 'outline-yellow-200',
		300: 'outline-yellow-300',
		400: 'outline-yellow-400',
		500: 'outline-yellow-500',
		600: 'outline-yellow-600',
		700: 'outline-yellow-700',
		800: 'outline-yellow-800',
		900: 'outline-yellow-900',
		950: 'outline-yellow-950'
	},
	orange: {
		50: 'outline-orange-50',
		100: 'outline-orange-100',
		200: 'outline-orange-200',
		300: 'outline-orange-300',
		400: 'outline-orange-400',
		500: 'outline-orange-500',
		600: 'outline-orange-600',
		700: 'outline-orange-700',
		800: 'outline-orange-800',
		900: 'outline-orange-900',
		950: 'outline-orange-950'
	},
	deep_orange: {
		50: 'outline-deep_orange-50',
		100: 'outline-deep_orange-100',
		200: 'outline-deep_orange-200',
		300: 'outline-deep_orange-300',
		400: 'outline-deep_orange-400',
		500: 'outline-deep_orange-500',
		600: 'outline-deep_orange-600',
		700: 'outline-deep_orange-700',
		800: 'outline-deep_orange-800',
		900: 'outline-deep_orange-900',
		950: 'outline-deep_orange-950'
	}
};

export default {
	borderWidth,
	borderLeftWidth,
	borderTopWidth,
	borderRightWidth,
	borderBottomWidth,
	borderStyle,
	borderColor,
	borderRadius,
	outlineWidth,
	outlineStyle,
	outlineOffset,
	outlineColor
};
