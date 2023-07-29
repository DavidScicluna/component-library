import type {
	ColorsObj,
	FontSizesObj,
	FontWeightsObj,
	LineHeightsObj,
	TextAlignsObj,
	TextTransformsObj,
	WhitespacesObj,
	WordBreaksObj
} from '@common/types/theme';

const align: TextAlignsObj = {
	center: 'text-center',
	left: 'text-left',
	right: 'text-right',
	justify: 'text-justify',
	start: 'text-start',
	end: 'text-end'
};

const color: ColorsObj = {
	transparent: 'text-transparent',
	black: 'text-black',
	white: 'text-white',
	gray: {
		50: 'text-gray-50',
		100: 'text-gray-100',
		200: 'text-gray-200',
		300: 'text-gray-300',
		400: 'text-gray-400',
		500: 'text-gray-500',
		600: 'text-gray-600',
		700: 'text-gray-700',
		800: 'text-gray-800',
		900: 'text-gray-900',
		950: 'text-gray-950'
	},
	red: {
		50: 'text-red-50',
		100: 'text-red-100',
		200: 'text-red-200',
		300: 'text-red-300',
		400: 'text-red-400',
		500: 'text-red-500',
		600: 'text-red-600',
		700: 'text-red-700',
		800: 'text-red-800',
		900: 'text-red-900',
		950: 'text-red-950'
	},
	pink: {
		50: 'text-pink-50',
		100: 'text-pink-100',
		200: 'text-pink-200',
		300: 'text-pink-300',
		400: 'text-pink-400',
		500: 'text-pink-500',
		600: 'text-pink-600',
		700: 'text-pink-700',
		800: 'text-pink-800',
		900: 'text-pink-900',
		950: 'text-pink-950'
	},
	purple: {
		50: 'text-purple-50',
		100: 'text-purple-100',
		200: 'text-purple-200',
		300: 'text-purple-300',
		400: 'text-purple-400',
		500: 'text-purple-500',
		600: 'text-purple-600',
		700: 'text-purple-700',
		800: 'text-purple-800',
		900: 'text-purple-900',
		950: 'text-purple-950'
	},
	deep_purple: {
		50: 'text-deep_purple-50',
		100: 'text-deep_purple-100',
		200: 'text-deep_purple-200',
		300: 'text-deep_purple-300',
		400: 'text-deep_purple-400',
		500: 'text-deep_purple-500',
		600: 'text-deep_purple-600',
		700: 'text-deep_purple-700',
		800: 'text-deep_purple-800',
		900: 'text-deep_purple-900',
		950: 'text-deep_purple-950'
	},
	indigo: {
		50: 'text-indigo-50',
		100: 'text-indigo-100',
		200: 'text-indigo-200',
		300: 'text-indigo-300',
		400: 'text-indigo-400',
		500: 'text-indigo-500',
		600: 'text-indigo-600',
		700: 'text-indigo-700',
		800: 'text-indigo-800',
		900: 'text-indigo-900',
		950: 'text-indigo-950'
	},
	blue: {
		50: 'text-blue-50',
		100: 'text-blue-100',
		200: 'text-blue-200',
		300: 'text-blue-300',
		400: 'text-blue-400',
		500: 'text-blue-500',
		600: 'text-blue-600',
		700: 'text-blue-700',
		800: 'text-blue-800',
		900: 'text-blue-900',
		950: 'text-blue-950'
	},
	light_blue: {
		50: 'text-light_blue-50',
		100: 'text-light_blue-100',
		200: 'text-light_blue-200',
		300: 'text-light_blue-300',
		400: 'text-light_blue-400',
		500: 'text-light_blue-500',
		600: 'text-light_blue-600',
		700: 'text-light_blue-700',
		800: 'text-light_blue-800',
		900: 'text-light_blue-900',
		950: 'text-light_blue-950'
	},
	cyan: {
		50: 'text-cyan-50',
		100: 'text-cyan-100',
		200: 'text-cyan-200',
		300: 'text-cyan-300',
		400: 'text-cyan-400',
		500: 'text-cyan-500',
		600: 'text-cyan-600',
		700: 'text-cyan-700',
		800: 'text-cyan-800',
		900: 'text-cyan-900',
		950: 'text-cyan-950'
	},
	teal: {
		50: 'text-teal-50',
		100: 'text-teal-100',
		200: 'text-teal-200',
		300: 'text-teal-300',
		400: 'text-teal-400',
		500: 'text-teal-500',
		600: 'text-teal-600',
		700: 'text-teal-700',
		800: 'text-teal-800',
		900: 'text-teal-900',
		950: 'text-teal-950'
	},
	green: {
		50: 'text-green-50',
		100: 'text-green-100',
		200: 'text-green-200',
		300: 'text-green-300',
		400: 'text-green-400',
		500: 'text-green-500',
		600: 'text-green-600',
		700: 'text-green-700',
		800: 'text-green-800',
		900: 'text-green-900',
		950: 'text-green-950'
	},
	light_green: {
		50: 'text-light_green-50',
		100: 'text-light_green-100',
		200: 'text-light_green-200',
		300: 'text-light_green-300',
		400: 'text-light_green-400',
		500: 'text-light_green-500',
		600: 'text-light_green-600',
		700: 'text-light_green-700',
		800: 'text-light_green-800',
		900: 'text-light_green-900',
		950: 'text-light_green-950'
	},
	lime: {
		50: 'text-lime-50',
		100: 'text-lime-100',
		200: 'text-lime-200',
		300: 'text-lime-300',
		400: 'text-lime-400',
		500: 'text-lime-500',
		600: 'text-lime-600',
		700: 'text-lime-700',
		800: 'text-lime-800',
		900: 'text-lime-900',
		950: 'text-lime-950'
	},
	yellow: {
		50: 'text-yellow-50',
		100: 'text-yellow-100',
		200: 'text-yellow-200',
		300: 'text-yellow-300',
		400: 'text-yellow-400',
		500: 'text-yellow-500',
		600: 'text-yellow-600',
		700: 'text-yellow-700',
		800: 'text-yellow-800',
		900: 'text-yellow-900',
		950: 'text-yellow-950'
	},
	orange: {
		50: 'text-orange-50',
		100: 'text-orange-100',
		200: 'text-orange-200',
		300: 'text-orange-300',
		400: 'text-orange-400',
		500: 'text-orange-500',
		600: 'text-orange-600',
		700: 'text-orange-700',
		800: 'text-orange-800',
		900: 'text-orange-900',
		950: 'text-orange-950'
	},
	deep_orange: {
		50: 'text-deep_orange-50',
		100: 'text-deep_orange-100',
		200: 'text-deep_orange-200',
		300: 'text-deep_orange-300',
		400: 'text-deep_orange-400',
		500: 'text-deep_orange-500',
		600: 'text-deep_orange-600',
		700: 'text-deep_orange-700',
		800: 'text-deep_orange-800',
		900: 'text-deep_orange-900',
		950: 'text-deep_orange-950'
	}
};

const fontSize: FontSizesObj = {
	'xs': 'text-xs',
	'sm': 'text-sm',
	'md': 'text-base',
	'lg': 'text-lg',
	'xl': 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl',
	'9xl': 'text-9xl'
};

const fontWeight: FontWeightsObj = {
	black: 'font-black',
	bold: 'font-bold',
	thin: 'font-thin',
	extralight: 'font-extralight',
	light: 'font-light',
	normal: 'font-normal',
	medium: 'font-medium',
	semibold: 'font-semibold',
	extrabold: 'font-extrabold'
};

const lineHeight: LineHeightsObj = {
	3: 'leading-3',
	4: 'leading-4',
	5: 'leading-5',
	6: 'leading-6',
	7: 'leading-7',
	8: 'leading-8',
	9: 'leading-9',
	10: 'leading-10',
	none: 'leading-none',
	tight: 'leading-tight',
	snug: 'leading-snug',
	normal: 'leading-normal',
	relaxed: 'leading-relaxed',
	loose: 'leading-loose'
};

const transform: TextTransformsObj = {
	uppercase: 'uppercase',
	lowercase: 'lowercase',
	capitalize: 'capitalize',
	normal: 'normal-case'
};

const whitespace: WhitespacesObj = {
	'normal': 'whitespace-normal',
	'nowrap': 'whitespace-nowrap',
	'pre': 'whitespace-pre',
	'pre-line': 'whitespace-pre-line',
	'pre-wrap': 'whitespace-pre-wrap',
	'break-spaces': 'whitespace-break-spaces'
};

const wordBreak: WordBreaksObj = {
	normal: 'break-normal',
	words: 'break-words',
	all: 'break-all',
	keep: 'break-keep'
};

export default { align, color, fontSize, fontWeight, lineHeight, transform, whitespace, wordBreak };
