import type { BoxShadowObj, OpacityObj } from '@common/types/classes';
import type { ColorsObj } from '@common/types/theme';

const color: ColorsObj = {
	transparent: 'shadow-transparent',
	black: 'shadow-black',
	white: 'shadow-white',
	gray: {
		50: 'shadow-gray-50',
		100: 'shadow-gray-100',
		200: 'shadow-gray-200',
		300: 'shadow-gray-300',
		400: 'shadow-gray-400',
		500: 'shadow-gray-500',
		600: 'shadow-gray-600',
		700: 'shadow-gray-700',
		800: 'shadow-gray-800',
		900: 'shadow-gray-900',
		950: 'shadow-gray-950'
	},
	red: {
		50: 'shadow-red-50',
		100: 'shadow-red-100',
		200: 'shadow-red-200',
		300: 'shadow-red-300',
		400: 'shadow-red-400',
		500: 'shadow-red-500',
		600: 'shadow-red-600',
		700: 'shadow-red-700',
		800: 'shadow-red-800',
		900: 'shadow-red-900',
		950: 'shadow-red-950'
	},
	pink: {
		50: 'shadow-pink-50',
		100: 'shadow-pink-100',
		200: 'shadow-pink-200',
		300: 'shadow-pink-300',
		400: 'shadow-pink-400',
		500: 'shadow-pink-500',
		600: 'shadow-pink-600',
		700: 'shadow-pink-700',
		800: 'shadow-pink-800',
		900: 'shadow-pink-900',
		950: 'shadow-pink-950'
	},
	purple: {
		50: 'shadow-purple-50',
		100: 'shadow-purple-100',
		200: 'shadow-purple-200',
		300: 'shadow-purple-300',
		400: 'shadow-purple-400',
		500: 'shadow-purple-500',
		600: 'shadow-purple-600',
		700: 'shadow-purple-700',
		800: 'shadow-purple-800',
		900: 'shadow-purple-900',
		950: 'shadow-purple-950'
	},
	deep_purple: {
		50: 'shadow-deep_purple-50',
		100: 'shadow-deep_purple-100',
		200: 'shadow-deep_purple-200',
		300: 'shadow-deep_purple-300',
		400: 'shadow-deep_purple-400',
		500: 'shadow-deep_purple-500',
		600: 'shadow-deep_purple-600',
		700: 'shadow-deep_purple-700',
		800: 'shadow-deep_purple-800',
		900: 'shadow-deep_purple-900',
		950: 'shadow-deep_purple-950'
	},
	indigo: {
		50: 'shadow-indigo-50',
		100: 'shadow-indigo-100',
		200: 'shadow-indigo-200',
		300: 'shadow-indigo-300',
		400: 'shadow-indigo-400',
		500: 'shadow-indigo-500',
		600: 'shadow-indigo-600',
		700: 'shadow-indigo-700',
		800: 'shadow-indigo-800',
		900: 'shadow-indigo-900',
		950: 'shadow-indigo-950'
	},
	blue: {
		50: 'shadow-blue-50',
		100: 'shadow-blue-100',
		200: 'shadow-blue-200',
		300: 'shadow-blue-300',
		400: 'shadow-blue-400',
		500: 'shadow-blue-500',
		600: 'shadow-blue-600',
		700: 'shadow-blue-700',
		800: 'shadow-blue-800',
		900: 'shadow-blue-900',
		950: 'shadow-blue-950'
	},
	light_blue: {
		50: 'shadow-light_blue-50',
		100: 'shadow-light_blue-100',
		200: 'shadow-light_blue-200',
		300: 'shadow-light_blue-300',
		400: 'shadow-light_blue-400',
		500: 'shadow-light_blue-500',
		600: 'shadow-light_blue-600',
		700: 'shadow-light_blue-700',
		800: 'shadow-light_blue-800',
		900: 'shadow-light_blue-900',
		950: 'shadow-light_blue-950'
	},
	cyan: {
		50: 'shadow-cyan-50',
		100: 'shadow-cyan-100',
		200: 'shadow-cyan-200',
		300: 'shadow-cyan-300',
		400: 'shadow-cyan-400',
		500: 'shadow-cyan-500',
		600: 'shadow-cyan-600',
		700: 'shadow-cyan-700',
		800: 'shadow-cyan-800',
		900: 'shadow-cyan-900',
		950: 'shadow-cyan-950'
	},
	teal: {
		50: 'shadow-teal-50',
		100: 'shadow-teal-100',
		200: 'shadow-teal-200',
		300: 'shadow-teal-300',
		400: 'shadow-teal-400',
		500: 'shadow-teal-500',
		600: 'shadow-teal-600',
		700: 'shadow-teal-700',
		800: 'shadow-teal-800',
		900: 'shadow-teal-900',
		950: 'shadow-teal-950'
	},
	green: {
		50: 'shadow-green-50',
		100: 'shadow-green-100',
		200: 'shadow-green-200',
		300: 'shadow-green-300',
		400: 'shadow-green-400',
		500: 'shadow-green-500',
		600: 'shadow-green-600',
		700: 'shadow-green-700',
		800: 'shadow-green-800',
		900: 'shadow-green-900',
		950: 'shadow-green-950'
	},
	light_green: {
		50: 'shadow-light_green-50',
		100: 'shadow-light_green-100',
		200: 'shadow-light_green-200',
		300: 'shadow-light_green-300',
		400: 'shadow-light_green-400',
		500: 'shadow-light_green-500',
		600: 'shadow-light_green-600',
		700: 'shadow-light_green-700',
		800: 'shadow-light_green-800',
		900: 'shadow-light_green-900',
		950: 'shadow-light_green-950'
	},
	lime: {
		50: 'shadow-lime-50',
		100: 'shadow-lime-100',
		200: 'shadow-lime-200',
		300: 'shadow-lime-300',
		400: 'shadow-lime-400',
		500: 'shadow-lime-500',
		600: 'shadow-lime-600',
		700: 'shadow-lime-700',
		800: 'shadow-lime-800',
		900: 'shadow-lime-900',
		950: 'shadow-lime-950'
	},
	yellow: {
		50: 'shadow-yellow-50',
		100: 'shadow-yellow-100',
		200: 'shadow-yellow-200',
		300: 'shadow-yellow-300',
		400: 'shadow-yellow-400',
		500: 'shadow-yellow-500',
		600: 'shadow-yellow-600',
		700: 'shadow-yellow-700',
		800: 'shadow-yellow-800',
		900: 'shadow-yellow-900',
		950: 'shadow-yellow-950'
	},
	orange: {
		50: 'shadow-orange-50',
		100: 'shadow-orange-100',
		200: 'shadow-orange-200',
		300: 'shadow-orange-300',
		400: 'shadow-orange-400',
		500: 'shadow-orange-500',
		600: 'shadow-orange-600',
		700: 'shadow-orange-700',
		800: 'shadow-orange-800',
		900: 'shadow-orange-900',
		950: 'shadow-orange-950'
	},
	deep_orange: {
		50: 'shadow-deep_orange-50',
		100: 'shadow-deep_orange-100',
		200: 'shadow-deep_orange-200',
		300: 'shadow-deep_orange-300',
		400: 'shadow-deep_orange-400',
		500: 'shadow-deep_orange-500',
		600: 'shadow-deep_orange-600',
		700: 'shadow-deep_orange-700',
		800: 'shadow-deep_orange-800',
		900: 'shadow-deep_orange-900',
		950: 'shadow-deep_orange-950'
	}
};

const shadow: BoxShadowObj = {
	'base': 'shadow',
	'sm': 'shadow-sm',
	'md': 'shadow-md',
	'lg': 'shadow-lg',
	'xl': 'shadow-xl',
	'2xl': 'shadow-2xl',
	'inner': 'shadow-inner',
	'none': 'shadow-none'
};

const opacity: OpacityObj = {
	0: 'opacity-0',
	5: 'opacity-5',
	10: 'opacity-10',
	20: 'opacity-20',
	25: 'opacity-25',
	30: 'opacity-30',
	40: 'opacity-40',
	50: 'opacity-50',
	60: 'opacity-60',
	70: 'opacity-70',
	75: 'opacity-75',
	80: 'opacity-80',
	90: 'opacity-90',
	95: 'opacity-95',
	100: 'opacity-100'
};

export default { color, shadow, opacity };
