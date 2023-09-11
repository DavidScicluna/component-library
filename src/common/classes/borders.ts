import type {
	BorderStyleClassObj,
	OutlineOffsetClassObj,
	OutlineStyleClassObj,
	OutlineWidthClassObj,
	ThemeBorderWidthObj,
	ThemeColorObj,
	ThemeRadiusObj
} from '@common/types';

const border_width: ThemeBorderWidthObj = {
	0: 'border-0',
	1: 'border',
	2: 'border-2',
	3: 'border-3',
	4: 'border-4',
	5: 'border-5',
	6: 'border-6',
	7: 'border-7',
	8: 'border-8'
};

const hover_border_width: ThemeBorderWidthObj = {
	0: 'hover:border-0',
	1: 'hover:border',
	2: 'hover:border-2',
	3: 'hover:border-3',
	4: 'hover:border-4',
	5: 'hover:border-5',
	6: 'hover:border-6',
	7: 'hover:border-7',
	8: 'hover:border-8'
};

const focus_border_width: ThemeBorderWidthObj = {
	0: 'focus:border-0',
	1: 'focus:border',
	2: 'focus:border-2',
	3: 'focus:border-3',
	4: 'focus:border-4',
	5: 'focus:border-5',
	6: 'focus:border-6',
	7: 'focus:border-7',
	8: 'focus:border-8'
};

const active_border_width: ThemeBorderWidthObj = {
	0: 'active:border-0',
	1: 'active:border',
	2: 'active:border-2',
	3: 'active:border-3',
	4: 'active:border-4',
	5: 'active:border-5',
	6: 'active:border-6',
	7: 'active:border-7',
	8: 'active:border-8'
};

const before_border_width: ThemeBorderWidthObj = {
	0: 'before:border-0',
	1: 'before:border',
	2: 'before:border-2',
	3: 'before:border-3',
	4: 'before:border-4',
	5: 'before:border-5',
	6: 'before:border-6',
	7: 'before:border-7',
	8: 'before:border-8'
};

const after_border_width: ThemeBorderWidthObj = {
	0: 'after:border-0',
	1: 'after:border',
	2: 'after:border-2',
	3: 'after:border-3',
	4: 'after:border-4',
	5: 'after:border-5',
	6: 'after:border-6',
	7: 'after:border-7',
	8: 'after:border-8'
};

const border_x_width: ThemeBorderWidthObj = {
	0: 'border-x-0',
	1: 'border-x',
	2: 'border-x-2',
	3: 'border-x-3',
	4: 'border-x-4',
	5: 'border-x-5',
	6: 'border-x-6',
	7: 'border-x-7',
	8: 'border-x-8'
};

const hover_border_x_width: ThemeBorderWidthObj = {
	0: 'hover:border-x-0',
	1: 'hover:border-x',
	2: 'hover:border-x-2',
	3: 'hover:border-x-3',
	4: 'hover:border-x-4',
	5: 'hover:border-x-5',
	6: 'hover:border-x-6',
	7: 'hover:border-x-7',
	8: 'hover:border-x-8'
};

const focus_border_x_width: ThemeBorderWidthObj = {
	0: 'focus:border-x-0',
	1: 'focus:border-x',
	2: 'focus:border-x-2',
	3: 'focus:border-x-3',
	4: 'focus:border-x-4',
	5: 'focus:border-x-5',
	6: 'focus:border-x-6',
	7: 'focus:border-x-7',
	8: 'focus:border-x-8'
};

const active_border_x_width: ThemeBorderWidthObj = {
	0: 'active:border-x-0',
	1: 'active:border-x',
	2: 'active:border-x-2',
	3: 'active:border-x-3',
	4: 'active:border-x-4',
	5: 'active:border-x-5',
	6: 'active:border-x-6',
	7: 'active:border-x-7',
	8: 'active:border-x-8'
};

const before_border_x_width: ThemeBorderWidthObj = {
	0: 'before:border-x-0',
	1: 'before:border-x',
	2: 'before:border-x-2',
	3: 'before:border-x-3',
	4: 'before:border-x-4',
	5: 'before:border-x-5',
	6: 'before:border-x-6',
	7: 'before:border-x-7',
	8: 'before:border-x-8'
};

const after_border_x_width: ThemeBorderWidthObj = {
	0: 'after:border-x-0',
	1: 'after:border-x',
	2: 'after:border-x-2',
	3: 'after:border-x-3',
	4: 'after:border-x-4',
	5: 'after:border-x-5',
	6: 'after:border-x-6',
	7: 'after:border-x-7',
	8: 'after:border-x-8'
};

const border_y_width: ThemeBorderWidthObj = {
	0: 'border-y-0',
	1: 'border-y',
	2: 'border-y-2',
	3: 'border-y-3',
	4: 'border-y-4',
	5: 'border-y-5',
	6: 'border-y-6',
	7: 'border-y-7',
	8: 'border-y-8'
};

const hover_border_y_width: ThemeBorderWidthObj = {
	0: 'hover:border-y-0',
	1: 'hover:border-y',
	2: 'hover:border-y-2',
	3: 'hover:border-y-3',
	4: 'hover:border-y-4',
	5: 'hover:border-y-5',
	6: 'hover:border-y-6',
	7: 'hover:border-y-7',
	8: 'hover:border-y-8'
};

const focus_border_y_width: ThemeBorderWidthObj = {
	0: 'focus:border-y-0',
	1: 'focus:border-y',
	2: 'focus:border-y-2',
	3: 'focus:border-y-3',
	4: 'focus:border-y-4',
	5: 'focus:border-y-5',
	6: 'focus:border-y-6',
	7: 'focus:border-y-7',
	8: 'focus:border-y-8'
};

const active_border_y_width: ThemeBorderWidthObj = {
	0: 'active:border-y-0',
	1: 'active:border-y',
	2: 'active:border-y-2',
	3: 'active:border-y-3',
	4: 'active:border-y-4',
	5: 'active:border-y-5',
	6: 'active:border-y-6',
	7: 'active:border-y-7',
	8: 'active:border-y-8'
};

const before_border_y_width: ThemeBorderWidthObj = {
	0: 'before:border-y-0',
	1: 'before:border-y',
	2: 'before:border-y-2',
	3: 'before:border-y-3',
	4: 'before:border-y-4',
	5: 'before:border-y-5',
	6: 'before:border-y-6',
	7: 'before:border-y-7',
	8: 'before:border-y-8'
};

const after_border_y_width: ThemeBorderWidthObj = {
	0: 'after:border-y-0',
	1: 'after:border-y',
	2: 'after:border-y-2',
	3: 'after:border-y-3',
	4: 'after:border-y-4',
	5: 'after:border-y-5',
	6: 'after:border-y-6',
	7: 'after:border-y-7',
	8: 'after:border-y-8'
};

const border_l_width: ThemeBorderWidthObj = {
	0: 'border-l-0',
	1: 'border-l',
	2: 'border-l-2',
	3: 'border-l-3',
	4: 'border-l-4',
	5: 'border-l-5',
	6: 'border-l-6',
	7: 'border-l-7',
	8: 'border-l-8'
};

const hover_border_l_width: ThemeBorderWidthObj = {
	0: 'hover:border-l-0',
	1: 'hover:border-l',
	2: 'hover:border-l-2',
	3: 'hover:border-l-3',
	4: 'hover:border-l-4',
	5: 'hover:border-l-5',
	6: 'hover:border-l-6',
	7: 'hover:border-l-7',
	8: 'hover:border-l-8'
};

const focus_border_l_width: ThemeBorderWidthObj = {
	0: 'focus:border-l-0',
	1: 'focus:border-l',
	2: 'focus:border-l-2',
	3: 'focus:border-l-3',
	4: 'focus:border-l-4',
	5: 'focus:border-l-5',
	6: 'focus:border-l-6',
	7: 'focus:border-l-7',
	8: 'focus:border-l-8'
};

const active_border_l_width: ThemeBorderWidthObj = {
	0: 'active:border-l-0',
	1: 'active:border-l',
	2: 'active:border-l-2',
	3: 'active:border-l-3',
	4: 'active:border-l-4',
	5: 'active:border-l-5',
	6: 'active:border-l-6',
	7: 'active:border-l-7',
	8: 'active:border-l-8'
};

const before_border_l_width: ThemeBorderWidthObj = {
	0: 'before:border-l-0',
	1: 'before:border-l',
	2: 'before:border-l-2',
	3: 'before:border-l-3',
	4: 'before:border-l-4',
	5: 'before:border-l-5',
	6: 'before:border-l-6',
	7: 'before:border-l-7',
	8: 'before:border-l-8'
};

const after_border_l_width: ThemeBorderWidthObj = {
	0: 'afterborder-l-0',
	1: 'afterborder-l',
	2: 'afterborder-l-2',
	3: 'afterborder-l-3',
	4: 'afterborder-l-4',
	5: 'afterborder-l-5',
	6: 'afterborder-l-6',
	7: 'afterborder-l-7',
	8: 'afterborder-l-8'
};

const border_t_width: ThemeBorderWidthObj = {
	0: 'border-t-0',
	1: 'border-t',
	2: 'border-t-2',
	3: 'border-t-3',
	4: 'border-t-4',
	5: 'border-t-5',
	6: 'border-t-6',
	7: 'border-t-7',
	8: 'border-t-8'
};

const hover_border_t_width: ThemeBorderWidthObj = {
	0: 'hover:border-t-0',
	1: 'hover:border-t',
	2: 'hover:border-t-2',
	3: 'hover:border-t-3',
	4: 'hover:border-t-4',
	5: 'hover:border-t-5',
	6: 'hover:border-t-6',
	7: 'hover:border-t-7',
	8: 'hover:border-t-8'
};

const focus_border_t_width: ThemeBorderWidthObj = {
	0: 'focus:border-t-0',
	1: 'focus:border-t',
	2: 'focus:border-t-2',
	3: 'focus:border-t-3',
	4: 'focus:border-t-4',
	5: 'focus:border-t-5',
	6: 'focus:border-t-6',
	7: 'focus:border-t-7',
	8: 'focus:border-t-8'
};

const active_border_t_width: ThemeBorderWidthObj = {
	0: 'active:border-t-0',
	1: 'active:border-t',
	2: 'active:border-t-2',
	3: 'active:border-t-3',
	4: 'active:border-t-4',
	5: 'active:border-t-5',
	6: 'active:border-t-6',
	7: 'active:border-t-7',
	8: 'active:border-t-8'
};

const before_border_t_width: ThemeBorderWidthObj = {
	0: 'before:border-t-0',
	1: 'before:border-t',
	2: 'before:border-t-2',
	3: 'before:border-t-3',
	4: 'before:border-t-4',
	5: 'before:border-t-5',
	6: 'before:border-t-6',
	7: 'before:border-t-7',
	8: 'before:border-t-8'
};

const after_border_t_width: ThemeBorderWidthObj = {
	0: 'after:border-t-0',
	1: 'after:border-t',
	2: 'after:border-t-2',
	3: 'after:border-t-3',
	4: 'after:border-t-4',
	5: 'after:border-t-5',
	6: 'after:border-t-6',
	7: 'after:border-t-7',
	8: 'after:border-t-8'
};

const border_r_width: ThemeBorderWidthObj = {
	0: 'border-r-0',
	1: 'border-r',
	2: 'border-r-2',
	3: 'border-r-3',
	4: 'border-r-4',
	5: 'border-r-5',
	6: 'border-r-6',
	7: 'border-r-7',
	8: 'border-r-8'
};

const hover_border_r_width: ThemeBorderWidthObj = {
	0: 'hover:border-r-0',
	1: 'hover:border-r',
	2: 'hover:border-r-2',
	3: 'hover:border-r-3',
	4: 'hover:border-r-4',
	5: 'hover:border-r-5',
	6: 'hover:border-r-6',
	7: 'hover:border-r-7',
	8: 'hover:border-r-8'
};

const focus_border_r_width: ThemeBorderWidthObj = {
	0: 'focus:border-r-0',
	1: 'focus:border-r',
	2: 'focus:border-r-2',
	3: 'focus:border-r-3',
	4: 'focus:border-r-4',
	5: 'focus:border-r-5',
	6: 'focus:border-r-6',
	7: 'focus:border-r-7',
	8: 'focus:border-r-8'
};

const active_border_r_width: ThemeBorderWidthObj = {
	0: 'active:border-r-0',
	1: 'active:border-r',
	2: 'active:border-r-2',
	3: 'active:border-r-3',
	4: 'active:border-r-4',
	5: 'active:border-r-5',
	6: 'active:border-r-6',
	7: 'active:border-r-7',
	8: 'active:border-r-8'
};

const before_border_r_width: ThemeBorderWidthObj = {
	0: 'before:border-r-0',
	1: 'before:border-r',
	2: 'before:border-r-2',
	3: 'before:border-r-3',
	4: 'before:border-r-4',
	5: 'before:border-r-5',
	6: 'before:border-r-6',
	7: 'before:border-r-7',
	8: 'before:border-r-8'
};

const after_border_r_width: ThemeBorderWidthObj = {
	0: 'after:border-r-0',
	1: 'after:border-r',
	2: 'after:border-r-2',
	3: 'after:border-r-3',
	4: 'after:border-r-4',
	5: 'after:border-r-5',
	6: 'after:border-r-6',
	7: 'after:border-r-7',
	8: 'after:border-r-8'
};

const border_b_width: ThemeBorderWidthObj = {
	0: 'border-b-0',
	1: 'border-b',
	2: 'border-b-2',
	3: 'border-b-3',
	4: 'border-b-4',
	5: 'border-b-5',
	6: 'border-b-6',
	7: 'border-b-7',
	8: 'border-b-8'
};

const hover_border_b_width: ThemeBorderWidthObj = {
	0: 'hover:border-b-0',
	1: 'hover:border-b',
	2: 'hover:border-b-2',
	3: 'hover:border-b-3',
	4: 'hover:border-b-4',
	5: 'hover:border-b-5',
	6: 'hover:border-b-6',
	7: 'hover:border-b-7',
	8: 'hover:border-b-8'
};

const focus_border_b_width: ThemeBorderWidthObj = {
	0: 'focus:border-b-0',
	1: 'focus:border-b',
	2: 'focus:border-b-2',
	3: 'focus:border-b-3',
	4: 'focus:border-b-4',
	5: 'focus:border-b-5',
	6: 'focus:border-b-6',
	7: 'focus:border-b-7',
	8: 'focus:border-b-8'
};

const active_border_b_width: ThemeBorderWidthObj = {
	0: 'active:border-b-0',
	1: 'active:border-b',
	2: 'active:border-b-2',
	3: 'active:border-b-3',
	4: 'active:border-b-4',
	5: 'active:border-b-5',
	6: 'active:border-b-6',
	7: 'active:border-b-7',
	8: 'active:border-b-8'
};

const before_border_b_width: ThemeBorderWidthObj = {
	0: 'before:border-b-0',
	1: 'before:border-b',
	2: 'before:border-b-2',
	3: 'before:border-b-3',
	4: 'before:border-b-4',
	5: 'before:border-b-5',
	6: 'before:border-b-6',
	7: 'before:border-b-7',
	8: 'before:border-b-8'
};

const after_border_b_width: ThemeBorderWidthObj = {
	0: 'after:border-b-0',
	1: 'after:border-b',
	2: 'after:border-b-2',
	3: 'after:border-b-3',
	4: 'after:border-b-4',
	5: 'after:border-b-5',
	6: 'after:border-b-6',
	7: 'after:border-b-7',
	8: 'after:border-b-8'
};

const border_style: BorderStyleClassObj = {
	solid: 'border-solid',
	dashed: 'border-dashed',
	dotted: 'border-dotted',
	double: 'border-double',
	hidden: 'border-hidden',
	none: 'border-none'
};

const hover_border_style: BorderStyleClassObj = {
	solid: 'hover:border-solid',
	dashed: 'hover:border-dashed',
	dotted: 'hover:border-dotted',
	double: 'hover:border-double',
	hidden: 'hover:border-hidden',
	none: 'hover:border-none'
};

const focus_border_style: BorderStyleClassObj = {
	solid: 'focus:border-solid',
	dashed: 'focus:border-dashed',
	dotted: 'focus:border-dotted',
	double: 'focus:border-double',
	hidden: 'focus:border-hidden',
	none: 'focus:border-none'
};

const active_border_style: BorderStyleClassObj = {
	solid: 'active:border-solid',
	dashed: 'active:border-dashed',
	dotted: 'active:border-dotted',
	double: 'active:border-double',
	hidden: 'active:border-hidden',
	none: 'active:border-none'
};

const before_border_style: BorderStyleClassObj = {
	solid: 'before:border-solid',
	dashed: 'before:border-dashed',
	dotted: 'before:border-dotted',
	double: 'before:border-double',
	hidden: 'before:border-hidden',
	none: 'before:border-none'
};

const after_border_style: BorderStyleClassObj = {
	solid: 'after:border-solid',
	dashed: 'after:border-dashed',
	dotted: 'after:border-dotted',
	double: 'after:border-double',
	hidden: 'after:border-hidden',
	none: 'after:border-none'
};

const border_color: ThemeColorObj = {
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

const hover_border_color: ThemeColorObj = {
	transparent: 'hover:border-transparent',
	black: 'hover:border-black',
	white: 'hover:border-white',
	gray: {
		50: 'hover:border-gray-50',
		100: 'hover:border-gray-100',
		200: 'hover:border-gray-200',
		300: 'hover:border-gray-300',
		400: 'hover:border-gray-400',
		500: 'hover:border-gray-500',
		600: 'hover:border-gray-600',
		700: 'hover:border-gray-700',
		800: 'hover:border-gray-800',
		900: 'hover:border-gray-900',
		950: 'hover:border-gray-950'
	},
	red: {
		50: 'hover:border-red-50',
		100: 'hover:border-red-100',
		200: 'hover:border-red-200',
		300: 'hover:border-red-300',
		400: 'hover:border-red-400',
		500: 'hover:border-red-500',
		600: 'hover:border-red-600',
		700: 'hover:border-red-700',
		800: 'hover:border-red-800',
		900: 'hover:border-red-900',
		950: 'hover:border-red-950'
	},
	pink: {
		50: 'hover:border-pink-50',
		100: 'hover:border-pink-100',
		200: 'hover:border-pink-200',
		300: 'hover:border-pink-300',
		400: 'hover:border-pink-400',
		500: 'hover:border-pink-500',
		600: 'hover:border-pink-600',
		700: 'hover:border-pink-700',
		800: 'hover:border-pink-800',
		900: 'hover:border-pink-900',
		950: 'hover:border-pink-950'
	},
	purple: {
		50: 'hover:border-purple-50',
		100: 'hover:border-purple-100',
		200: 'hover:border-purple-200',
		300: 'hover:border-purple-300',
		400: 'hover:border-purple-400',
		500: 'hover:border-purple-500',
		600: 'hover:border-purple-600',
		700: 'hover:border-purple-700',
		800: 'hover:border-purple-800',
		900: 'hover:border-purple-900',
		950: 'hover:border-purple-950'
	},
	deep_purple: {
		50: 'hover:border-deep_purple-50',
		100: 'hover:border-deep_purple-100',
		200: 'hover:border-deep_purple-200',
		300: 'hover:border-deep_purple-300',
		400: 'hover:border-deep_purple-400',
		500: 'hover:border-deep_purple-500',
		600: 'hover:border-deep_purple-600',
		700: 'hover:border-deep_purple-700',
		800: 'hover:border-deep_purple-800',
		900: 'hover:border-deep_purple-900',
		950: 'hover:border-deep_purple-950'
	},
	indigo: {
		50: 'hover:border-indigo-50',
		100: 'hover:border-indigo-100',
		200: 'hover:border-indigo-200',
		300: 'hover:border-indigo-300',
		400: 'hover:border-indigo-400',
		500: 'hover:border-indigo-500',
		600: 'hover:border-indigo-600',
		700: 'hover:border-indigo-700',
		800: 'hover:border-indigo-800',
		900: 'hover:border-indigo-900',
		950: 'hover:border-indigo-950'
	},
	blue: {
		50: 'hover:border-blue-50',
		100: 'hover:border-blue-100',
		200: 'hover:border-blue-200',
		300: 'hover:border-blue-300',
		400: 'hover:border-blue-400',
		500: 'hover:border-blue-500',
		600: 'hover:border-blue-600',
		700: 'hover:border-blue-700',
		800: 'hover:border-blue-800',
		900: 'hover:border-blue-900',
		950: 'hover:border-blue-950'
	},
	light_blue: {
		50: 'hover:border-light_blue-50',
		100: 'hover:border-light_blue-100',
		200: 'hover:border-light_blue-200',
		300: 'hover:border-light_blue-300',
		400: 'hover:border-light_blue-400',
		500: 'hover:border-light_blue-500',
		600: 'hover:border-light_blue-600',
		700: 'hover:border-light_blue-700',
		800: 'hover:border-light_blue-800',
		900: 'hover:border-light_blue-900',
		950: 'hover:border-light_blue-950'
	},
	cyan: {
		50: 'hover:border-cyan-50',
		100: 'hover:border-cyan-100',
		200: 'hover:border-cyan-200',
		300: 'hover:border-cyan-300',
		400: 'hover:border-cyan-400',
		500: 'hover:border-cyan-500',
		600: 'hover:border-cyan-600',
		700: 'hover:border-cyan-700',
		800: 'hover:border-cyan-800',
		900: 'hover:border-cyan-900',
		950: 'hover:border-cyan-950'
	},
	teal: {
		50: 'hover:border-teal-50',
		100: 'hover:border-teal-100',
		200: 'hover:border-teal-200',
		300: 'hover:border-teal-300',
		400: 'hover:border-teal-400',
		500: 'hover:border-teal-500',
		600: 'hover:border-teal-600',
		700: 'hover:border-teal-700',
		800: 'hover:border-teal-800',
		900: 'hover:border-teal-900',
		950: 'hover:border-teal-950'
	},
	green: {
		50: 'hover:border-green-50',
		100: 'hover:border-green-100',
		200: 'hover:border-green-200',
		300: 'hover:border-green-300',
		400: 'hover:border-green-400',
		500: 'hover:border-green-500',
		600: 'hover:border-green-600',
		700: 'hover:border-green-700',
		800: 'hover:border-green-800',
		900: 'hover:border-green-900',
		950: 'hover:border-green-950'
	},
	light_green: {
		50: 'hover:border-light_green-50',
		100: 'hover:border-light_green-100',
		200: 'hover:border-light_green-200',
		300: 'hover:border-light_green-300',
		400: 'hover:border-light_green-400',
		500: 'hover:border-light_green-500',
		600: 'hover:border-light_green-600',
		700: 'hover:border-light_green-700',
		800: 'hover:border-light_green-800',
		900: 'hover:border-light_green-900',
		950: 'hover:border-light_green-950'
	},
	lime: {
		50: 'hover:border-lime-50',
		100: 'hover:border-lime-100',
		200: 'hover:border-lime-200',
		300: 'hover:border-lime-300',
		400: 'hover:border-lime-400',
		500: 'hover:border-lime-500',
		600: 'hover:border-lime-600',
		700: 'hover:border-lime-700',
		800: 'hover:border-lime-800',
		900: 'hover:border-lime-900',
		950: 'hover:border-lime-950'
	},
	yellow: {
		50: 'hover:border-yellow-50',
		100: 'hover:border-yellow-100',
		200: 'hover:border-yellow-200',
		300: 'hover:border-yellow-300',
		400: 'hover:border-yellow-400',
		500: 'hover:border-yellow-500',
		600: 'hover:border-yellow-600',
		700: 'hover:border-yellow-700',
		800: 'hover:border-yellow-800',
		900: 'hover:border-yellow-900',
		950: 'hover:border-yellow-950'
	},
	orange: {
		50: 'hover:border-orange-50',
		100: 'hover:border-orange-100',
		200: 'hover:border-orange-200',
		300: 'hover:border-orange-300',
		400: 'hover:border-orange-400',
		500: 'hover:border-orange-500',
		600: 'hover:border-orange-600',
		700: 'hover:border-orange-700',
		800: 'hover:border-orange-800',
		900: 'hover:border-orange-900',
		950: 'hover:border-orange-950'
	},
	deep_orange: {
		50: 'hover:border-deep_orange-50',
		100: 'hover:border-deep_orange-100',
		200: 'hover:border-deep_orange-200',
		300: 'hover:border-deep_orange-300',
		400: 'hover:border-deep_orange-400',
		500: 'hover:border-deep_orange-500',
		600: 'hover:border-deep_orange-600',
		700: 'hover:border-deep_orange-700',
		800: 'hover:border-deep_orange-800',
		900: 'hover:border-deep_orange-900',
		950: 'hover:border-deep_orange-950'
	}
};

const focus_border_color: ThemeColorObj = {
	transparent: 'focus:border-transparent',
	black: 'focus:border-black',
	white: 'focus:border-white',
	gray: {
		50: 'focus:border-gray-50',
		100: 'focus:border-gray-100',
		200: 'focus:border-gray-200',
		300: 'focus:border-gray-300',
		400: 'focus:border-gray-400',
		500: 'focus:border-gray-500',
		600: 'focus:border-gray-600',
		700: 'focus:border-gray-700',
		800: 'focus:border-gray-800',
		900: 'focus:border-gray-900',
		950: 'focus:border-gray-950'
	},
	red: {
		50: 'focus:border-red-50',
		100: 'focus:border-red-100',
		200: 'focus:border-red-200',
		300: 'focus:border-red-300',
		400: 'focus:border-red-400',
		500: 'focus:border-red-500',
		600: 'focus:border-red-600',
		700: 'focus:border-red-700',
		800: 'focus:border-red-800',
		900: 'focus:border-red-900',
		950: 'focus:border-red-950'
	},
	pink: {
		50: 'focus:border-pink-50',
		100: 'focus:border-pink-100',
		200: 'focus:border-pink-200',
		300: 'focus:border-pink-300',
		400: 'focus:border-pink-400',
		500: 'focus:border-pink-500',
		600: 'focus:border-pink-600',
		700: 'focus:border-pink-700',
		800: 'focus:border-pink-800',
		900: 'focus:border-pink-900',
		950: 'focus:border-pink-950'
	},
	purple: {
		50: 'focus:border-purple-50',
		100: 'focus:border-purple-100',
		200: 'focus:border-purple-200',
		300: 'focus:border-purple-300',
		400: 'focus:border-purple-400',
		500: 'focus:border-purple-500',
		600: 'focus:border-purple-600',
		700: 'focus:border-purple-700',
		800: 'focus:border-purple-800',
		900: 'focus:border-purple-900',
		950: 'focus:border-purple-950'
	},
	deep_purple: {
		50: 'focus:border-deep_purple-50',
		100: 'focus:border-deep_purple-100',
		200: 'focus:border-deep_purple-200',
		300: 'focus:border-deep_purple-300',
		400: 'focus:border-deep_purple-400',
		500: 'focus:border-deep_purple-500',
		600: 'focus:border-deep_purple-600',
		700: 'focus:border-deep_purple-700',
		800: 'focus:border-deep_purple-800',
		900: 'focus:border-deep_purple-900',
		950: 'focus:border-deep_purple-950'
	},
	indigo: {
		50: 'focus:border-indigo-50',
		100: 'focus:border-indigo-100',
		200: 'focus:border-indigo-200',
		300: 'focus:border-indigo-300',
		400: 'focus:border-indigo-400',
		500: 'focus:border-indigo-500',
		600: 'focus:border-indigo-600',
		700: 'focus:border-indigo-700',
		800: 'focus:border-indigo-800',
		900: 'focus:border-indigo-900',
		950: 'focus:border-indigo-950'
	},
	blue: {
		50: 'focus:border-blue-50',
		100: 'focus:border-blue-100',
		200: 'focus:border-blue-200',
		300: 'focus:border-blue-300',
		400: 'focus:border-blue-400',
		500: 'focus:border-blue-500',
		600: 'focus:border-blue-600',
		700: 'focus:border-blue-700',
		800: 'focus:border-blue-800',
		900: 'focus:border-blue-900',
		950: 'focus:border-blue-950'
	},
	light_blue: {
		50: 'focus:border-light_blue-50',
		100: 'focus:border-light_blue-100',
		200: 'focus:border-light_blue-200',
		300: 'focus:border-light_blue-300',
		400: 'focus:border-light_blue-400',
		500: 'focus:border-light_blue-500',
		600: 'focus:border-light_blue-600',
		700: 'focus:border-light_blue-700',
		800: 'focus:border-light_blue-800',
		900: 'focus:border-light_blue-900',
		950: 'focus:border-light_blue-950'
	},
	cyan: {
		50: 'focus:border-cyan-50',
		100: 'focus:border-cyan-100',
		200: 'focus:border-cyan-200',
		300: 'focus:border-cyan-300',
		400: 'focus:border-cyan-400',
		500: 'focus:border-cyan-500',
		600: 'focus:border-cyan-600',
		700: 'focus:border-cyan-700',
		800: 'focus:border-cyan-800',
		900: 'focus:border-cyan-900',
		950: 'focus:border-cyan-950'
	},
	teal: {
		50: 'focus:border-teal-50',
		100: 'focus:border-teal-100',
		200: 'focus:border-teal-200',
		300: 'focus:border-teal-300',
		400: 'focus:border-teal-400',
		500: 'focus:border-teal-500',
		600: 'focus:border-teal-600',
		700: 'focus:border-teal-700',
		800: 'focus:border-teal-800',
		900: 'focus:border-teal-900',
		950: 'focus:border-teal-950'
	},
	green: {
		50: 'focus:border-green-50',
		100: 'focus:border-green-100',
		200: 'focus:border-green-200',
		300: 'focus:border-green-300',
		400: 'focus:border-green-400',
		500: 'focus:border-green-500',
		600: 'focus:border-green-600',
		700: 'focus:border-green-700',
		800: 'focus:border-green-800',
		900: 'focus:border-green-900',
		950: 'focus:border-green-950'
	},
	light_green: {
		50: 'focus:border-light_green-50',
		100: 'focus:border-light_green-100',
		200: 'focus:border-light_green-200',
		300: 'focus:border-light_green-300',
		400: 'focus:border-light_green-400',
		500: 'focus:border-light_green-500',
		600: 'focus:border-light_green-600',
		700: 'focus:border-light_green-700',
		800: 'focus:border-light_green-800',
		900: 'focus:border-light_green-900',
		950: 'focus:border-light_green-950'
	},
	lime: {
		50: 'focus:border-lime-50',
		100: 'focus:border-lime-100',
		200: 'focus:border-lime-200',
		300: 'focus:border-lime-300',
		400: 'focus:border-lime-400',
		500: 'focus:border-lime-500',
		600: 'focus:border-lime-600',
		700: 'focus:border-lime-700',
		800: 'focus:border-lime-800',
		900: 'focus:border-lime-900',
		950: 'focus:border-lime-950'
	},
	yellow: {
		50: 'focus:border-yellow-50',
		100: 'focus:border-yellow-100',
		200: 'focus:border-yellow-200',
		300: 'focus:border-yellow-300',
		400: 'focus:border-yellow-400',
		500: 'focus:border-yellow-500',
		600: 'focus:border-yellow-600',
		700: 'focus:border-yellow-700',
		800: 'focus:border-yellow-800',
		900: 'focus:border-yellow-900',
		950: 'focus:border-yellow-950'
	},
	orange: {
		50: 'focus:border-orange-50',
		100: 'focus:border-orange-100',
		200: 'focus:border-orange-200',
		300: 'focus:border-orange-300',
		400: 'focus:border-orange-400',
		500: 'focus:border-orange-500',
		600: 'focus:border-orange-600',
		700: 'focus:border-orange-700',
		800: 'focus:border-orange-800',
		900: 'focus:border-orange-900',
		950: 'focus:border-orange-950'
	},
	deep_orange: {
		50: 'focus:border-deep_orange-50',
		100: 'focus:border-deep_orange-100',
		200: 'focus:border-deep_orange-200',
		300: 'focus:border-deep_orange-300',
		400: 'focus:border-deep_orange-400',
		500: 'focus:border-deep_orange-500',
		600: 'focus:border-deep_orange-600',
		700: 'focus:border-deep_orange-700',
		800: 'focus:border-deep_orange-800',
		900: 'focus:border-deep_orange-900',
		950: 'focus:border-deep_orange-950'
	}
};

const active_border_color: ThemeColorObj = {
	transparent: 'active:border-transparent',
	black: 'active:border-black',
	white: 'active:border-white',
	gray: {
		50: 'active:border-gray-50',
		100: 'active:border-gray-100',
		200: 'active:border-gray-200',
		300: 'active:border-gray-300',
		400: 'active:border-gray-400',
		500: 'active:border-gray-500',
		600: 'active:border-gray-600',
		700: 'active:border-gray-700',
		800: 'active:border-gray-800',
		900: 'active:border-gray-900',
		950: 'active:border-gray-950'
	},
	red: {
		50: 'active:border-red-50',
		100: 'active:border-red-100',
		200: 'active:border-red-200',
		300: 'active:border-red-300',
		400: 'active:border-red-400',
		500: 'active:border-red-500',
		600: 'active:border-red-600',
		700: 'active:border-red-700',
		800: 'active:border-red-800',
		900: 'active:border-red-900',
		950: 'active:border-red-950'
	},
	pink: {
		50: 'active:border-pink-50',
		100: 'active:border-pink-100',
		200: 'active:border-pink-200',
		300: 'active:border-pink-300',
		400: 'active:border-pink-400',
		500: 'active:border-pink-500',
		600: 'active:border-pink-600',
		700: 'active:border-pink-700',
		800: 'active:border-pink-800',
		900: 'active:border-pink-900',
		950: 'active:border-pink-950'
	},
	purple: {
		50: 'active:border-purple-50',
		100: 'active:border-purple-100',
		200: 'active:border-purple-200',
		300: 'active:border-purple-300',
		400: 'active:border-purple-400',
		500: 'active:border-purple-500',
		600: 'active:border-purple-600',
		700: 'active:border-purple-700',
		800: 'active:border-purple-800',
		900: 'active:border-purple-900',
		950: 'active:border-purple-950'
	},
	deep_purple: {
		50: 'active:border-deep_purple-50',
		100: 'active:border-deep_purple-100',
		200: 'active:border-deep_purple-200',
		300: 'active:border-deep_purple-300',
		400: 'active:border-deep_purple-400',
		500: 'active:border-deep_purple-500',
		600: 'active:border-deep_purple-600',
		700: 'active:border-deep_purple-700',
		800: 'active:border-deep_purple-800',
		900: 'active:border-deep_purple-900',
		950: 'active:border-deep_purple-950'
	},
	indigo: {
		50: 'active:border-indigo-50',
		100: 'active:border-indigo-100',
		200: 'active:border-indigo-200',
		300: 'active:border-indigo-300',
		400: 'active:border-indigo-400',
		500: 'active:border-indigo-500',
		600: 'active:border-indigo-600',
		700: 'active:border-indigo-700',
		800: 'active:border-indigo-800',
		900: 'active:border-indigo-900',
		950: 'active:border-indigo-950'
	},
	blue: {
		50: 'active:border-blue-50',
		100: 'active:border-blue-100',
		200: 'active:border-blue-200',
		300: 'active:border-blue-300',
		400: 'active:border-blue-400',
		500: 'active:border-blue-500',
		600: 'active:border-blue-600',
		700: 'active:border-blue-700',
		800: 'active:border-blue-800',
		900: 'active:border-blue-900',
		950: 'active:border-blue-950'
	},
	light_blue: {
		50: 'active:border-light_blue-50',
		100: 'active:border-light_blue-100',
		200: 'active:border-light_blue-200',
		300: 'active:border-light_blue-300',
		400: 'active:border-light_blue-400',
		500: 'active:border-light_blue-500',
		600: 'active:border-light_blue-600',
		700: 'active:border-light_blue-700',
		800: 'active:border-light_blue-800',
		900: 'active:border-light_blue-900',
		950: 'active:border-light_blue-950'
	},
	cyan: {
		50: 'active:border-cyan-50',
		100: 'active:border-cyan-100',
		200: 'active:border-cyan-200',
		300: 'active:border-cyan-300',
		400: 'active:border-cyan-400',
		500: 'active:border-cyan-500',
		600: 'active:border-cyan-600',
		700: 'active:border-cyan-700',
		800: 'active:border-cyan-800',
		900: 'active:border-cyan-900',
		950: 'active:border-cyan-950'
	},
	teal: {
		50: 'active:border-teal-50',
		100: 'active:border-teal-100',
		200: 'active:border-teal-200',
		300: 'active:border-teal-300',
		400: 'active:border-teal-400',
		500: 'active:border-teal-500',
		600: 'active:border-teal-600',
		700: 'active:border-teal-700',
		800: 'active:border-teal-800',
		900: 'active:border-teal-900',
		950: 'active:border-teal-950'
	},
	green: {
		50: 'active:border-green-50',
		100: 'active:border-green-100',
		200: 'active:border-green-200',
		300: 'active:border-green-300',
		400: 'active:border-green-400',
		500: 'active:border-green-500',
		600: 'active:border-green-600',
		700: 'active:border-green-700',
		800: 'active:border-green-800',
		900: 'active:border-green-900',
		950: 'active:border-green-950'
	},
	light_green: {
		50: 'active:border-light_green-50',
		100: 'active:border-light_green-100',
		200: 'active:border-light_green-200',
		300: 'active:border-light_green-300',
		400: 'active:border-light_green-400',
		500: 'active:border-light_green-500',
		600: 'active:border-light_green-600',
		700: 'active:border-light_green-700',
		800: 'active:border-light_green-800',
		900: 'active:border-light_green-900',
		950: 'active:border-light_green-950'
	},
	lime: {
		50: 'active:border-lime-50',
		100: 'active:border-lime-100',
		200: 'active:border-lime-200',
		300: 'active:border-lime-300',
		400: 'active:border-lime-400',
		500: 'active:border-lime-500',
		600: 'active:border-lime-600',
		700: 'active:border-lime-700',
		800: 'active:border-lime-800',
		900: 'active:border-lime-900',
		950: 'active:border-lime-950'
	},
	yellow: {
		50: 'active:border-yellow-50',
		100: 'active:border-yellow-100',
		200: 'active:border-yellow-200',
		300: 'active:border-yellow-300',
		400: 'active:border-yellow-400',
		500: 'active:border-yellow-500',
		600: 'active:border-yellow-600',
		700: 'active:border-yellow-700',
		800: 'active:border-yellow-800',
		900: 'active:border-yellow-900',
		950: 'active:border-yellow-950'
	},
	orange: {
		50: 'active:border-orange-50',
		100: 'active:border-orange-100',
		200: 'active:border-orange-200',
		300: 'active:border-orange-300',
		400: 'active:border-orange-400',
		500: 'active:border-orange-500',
		600: 'active:border-orange-600',
		700: 'active:border-orange-700',
		800: 'active:border-orange-800',
		900: 'active:border-orange-900',
		950: 'active:border-orange-950'
	},
	deep_orange: {
		50: 'active:border-deep_orange-50',
		100: 'active:border-deep_orange-100',
		200: 'active:border-deep_orange-200',
		300: 'active:border-deep_orange-300',
		400: 'active:border-deep_orange-400',
		500: 'active:border-deep_orange-500',
		600: 'active:border-deep_orange-600',
		700: 'active:border-deep_orange-700',
		800: 'active:border-deep_orange-800',
		900: 'active:border-deep_orange-900',
		950: 'active:border-deep_orange-950'
	}
};

const before_border_color: ThemeColorObj = {
	transparent: 'before:border-transparent',
	black: 'before:border-black',
	white: 'before:border-white',
	gray: {
		50: 'before:border-gray-50',
		100: 'before:border-gray-100',
		200: 'before:border-gray-200',
		300: 'before:border-gray-300',
		400: 'before:border-gray-400',
		500: 'before:border-gray-500',
		600: 'before:border-gray-600',
		700: 'before:border-gray-700',
		800: 'before:border-gray-800',
		900: 'before:border-gray-900',
		950: 'before:border-gray-950'
	},
	red: {
		50: 'before:border-red-50',
		100: 'before:border-red-100',
		200: 'before:border-red-200',
		300: 'before:border-red-300',
		400: 'before:border-red-400',
		500: 'before:border-red-500',
		600: 'before:border-red-600',
		700: 'before:border-red-700',
		800: 'before:border-red-800',
		900: 'before:border-red-900',
		950: 'before:border-red-950'
	},
	pink: {
		50: 'before:border-pink-50',
		100: 'before:border-pink-100',
		200: 'before:border-pink-200',
		300: 'before:border-pink-300',
		400: 'before:border-pink-400',
		500: 'before:border-pink-500',
		600: 'before:border-pink-600',
		700: 'before:border-pink-700',
		800: 'before:border-pink-800',
		900: 'before:border-pink-900',
		950: 'before:border-pink-950'
	},
	purple: {
		50: 'before:border-purple-50',
		100: 'before:border-purple-100',
		200: 'before:border-purple-200',
		300: 'before:border-purple-300',
		400: 'before:border-purple-400',
		500: 'before:border-purple-500',
		600: 'before:border-purple-600',
		700: 'before:border-purple-700',
		800: 'before:border-purple-800',
		900: 'before:border-purple-900',
		950: 'before:border-purple-950'
	},
	deep_purple: {
		50: 'before:border-deep_purple-50',
		100: 'before:border-deep_purple-100',
		200: 'before:border-deep_purple-200',
		300: 'before:border-deep_purple-300',
		400: 'before:border-deep_purple-400',
		500: 'before:border-deep_purple-500',
		600: 'before:border-deep_purple-600',
		700: 'before:border-deep_purple-700',
		800: 'before:border-deep_purple-800',
		900: 'before:border-deep_purple-900',
		950: 'before:border-deep_purple-950'
	},
	indigo: {
		50: 'before:border-indigo-50',
		100: 'before:border-indigo-100',
		200: 'before:border-indigo-200',
		300: 'before:border-indigo-300',
		400: 'before:border-indigo-400',
		500: 'before:border-indigo-500',
		600: 'before:border-indigo-600',
		700: 'before:border-indigo-700',
		800: 'before:border-indigo-800',
		900: 'before:border-indigo-900',
		950: 'before:border-indigo-950'
	},
	blue: {
		50: 'before:border-blue-50',
		100: 'before:border-blue-100',
		200: 'before:border-blue-200',
		300: 'before:border-blue-300',
		400: 'before:border-blue-400',
		500: 'before:border-blue-500',
		600: 'before:border-blue-600',
		700: 'before:border-blue-700',
		800: 'before:border-blue-800',
		900: 'before:border-blue-900',
		950: 'before:border-blue-950'
	},
	light_blue: {
		50: 'before:border-light_blue-50',
		100: 'before:border-light_blue-100',
		200: 'before:border-light_blue-200',
		300: 'before:border-light_blue-300',
		400: 'before:border-light_blue-400',
		500: 'before:border-light_blue-500',
		600: 'before:border-light_blue-600',
		700: 'before:border-light_blue-700',
		800: 'before:border-light_blue-800',
		900: 'before:border-light_blue-900',
		950: 'before:border-light_blue-950'
	},
	cyan: {
		50: 'before:border-cyan-50',
		100: 'before:border-cyan-100',
		200: 'before:border-cyan-200',
		300: 'before:border-cyan-300',
		400: 'before:border-cyan-400',
		500: 'before:border-cyan-500',
		600: 'before:border-cyan-600',
		700: 'before:border-cyan-700',
		800: 'before:border-cyan-800',
		900: 'before:border-cyan-900',
		950: 'before:border-cyan-950'
	},
	teal: {
		50: 'before:border-teal-50',
		100: 'before:border-teal-100',
		200: 'before:border-teal-200',
		300: 'before:border-teal-300',
		400: 'before:border-teal-400',
		500: 'before:border-teal-500',
		600: 'before:border-teal-600',
		700: 'before:border-teal-700',
		800: 'before:border-teal-800',
		900: 'before:border-teal-900',
		950: 'before:border-teal-950'
	},
	green: {
		50: 'before:border-green-50',
		100: 'before:border-green-100',
		200: 'before:border-green-200',
		300: 'before:border-green-300',
		400: 'before:border-green-400',
		500: 'before:border-green-500',
		600: 'before:border-green-600',
		700: 'before:border-green-700',
		800: 'before:border-green-800',
		900: 'before:border-green-900',
		950: 'before:border-green-950'
	},
	light_green: {
		50: 'before:border-light_green-50',
		100: 'before:border-light_green-100',
		200: 'before:border-light_green-200',
		300: 'before:border-light_green-300',
		400: 'before:border-light_green-400',
		500: 'before:border-light_green-500',
		600: 'before:border-light_green-600',
		700: 'before:border-light_green-700',
		800: 'before:border-light_green-800',
		900: 'before:border-light_green-900',
		950: 'before:border-light_green-950'
	},
	lime: {
		50: 'before:border-lime-50',
		100: 'before:border-lime-100',
		200: 'before:border-lime-200',
		300: 'before:border-lime-300',
		400: 'before:border-lime-400',
		500: 'before:border-lime-500',
		600: 'before:border-lime-600',
		700: 'before:border-lime-700',
		800: 'before:border-lime-800',
		900: 'before:border-lime-900',
		950: 'before:border-lime-950'
	},
	yellow: {
		50: 'before:border-yellow-50',
		100: 'before:border-yellow-100',
		200: 'before:border-yellow-200',
		300: 'before:border-yellow-300',
		400: 'before:border-yellow-400',
		500: 'before:border-yellow-500',
		600: 'before:border-yellow-600',
		700: 'before:border-yellow-700',
		800: 'before:border-yellow-800',
		900: 'before:border-yellow-900',
		950: 'before:border-yellow-950'
	},
	orange: {
		50: 'before:border-orange-50',
		100: 'before:border-orange-100',
		200: 'before:border-orange-200',
		300: 'before:border-orange-300',
		400: 'before:border-orange-400',
		500: 'before:border-orange-500',
		600: 'before:border-orange-600',
		700: 'before:border-orange-700',
		800: 'before:border-orange-800',
		900: 'before:border-orange-900',
		950: 'before:border-orange-950'
	},
	deep_orange: {
		50: 'before:border-deep_orange-50',
		100: 'before:border-deep_orange-100',
		200: 'before:border-deep_orange-200',
		300: 'before:border-deep_orange-300',
		400: 'before:border-deep_orange-400',
		500: 'before:border-deep_orange-500',
		600: 'before:border-deep_orange-600',
		700: 'before:border-deep_orange-700',
		800: 'before:border-deep_orange-800',
		900: 'before:border-deep_orange-900',
		950: 'before:border-deep_orange-950'
	}
};

const after_border_color: ThemeColorObj = {
	transparent: 'after:border-transparent',
	black: 'after:border-black',
	white: 'after:border-white',
	gray: {
		50: 'after:border-gray-50',
		100: 'after:border-gray-100',
		200: 'after:border-gray-200',
		300: 'after:border-gray-300',
		400: 'after:border-gray-400',
		500: 'after:border-gray-500',
		600: 'after:border-gray-600',
		700: 'after:border-gray-700',
		800: 'after:border-gray-800',
		900: 'after:border-gray-900',
		950: 'after:border-gray-950'
	},
	red: {
		50: 'after:border-red-50',
		100: 'after:border-red-100',
		200: 'after:border-red-200',
		300: 'after:border-red-300',
		400: 'after:border-red-400',
		500: 'after:border-red-500',
		600: 'after:border-red-600',
		700: 'after:border-red-700',
		800: 'after:border-red-800',
		900: 'after:border-red-900',
		950: 'after:border-red-950'
	},
	pink: {
		50: 'after:border-pink-50',
		100: 'after:border-pink-100',
		200: 'after:border-pink-200',
		300: 'after:border-pink-300',
		400: 'after:border-pink-400',
		500: 'after:border-pink-500',
		600: 'after:border-pink-600',
		700: 'after:border-pink-700',
		800: 'after:border-pink-800',
		900: 'after:border-pink-900',
		950: 'after:border-pink-950'
	},
	purple: {
		50: 'after:border-purple-50',
		100: 'after:border-purple-100',
		200: 'after:border-purple-200',
		300: 'after:border-purple-300',
		400: 'after:border-purple-400',
		500: 'after:border-purple-500',
		600: 'after:border-purple-600',
		700: 'after:border-purple-700',
		800: 'after:border-purple-800',
		900: 'after:border-purple-900',
		950: 'after:border-purple-950'
	},
	deep_purple: {
		50: 'after:border-deep_purple-50',
		100: 'after:border-deep_purple-100',
		200: 'after:border-deep_purple-200',
		300: 'after:border-deep_purple-300',
		400: 'after:border-deep_purple-400',
		500: 'after:border-deep_purple-500',
		600: 'after:border-deep_purple-600',
		700: 'after:border-deep_purple-700',
		800: 'after:border-deep_purple-800',
		900: 'after:border-deep_purple-900',
		950: 'after:border-deep_purple-950'
	},
	indigo: {
		50: 'after:border-indigo-50',
		100: 'after:border-indigo-100',
		200: 'after:border-indigo-200',
		300: 'after:border-indigo-300',
		400: 'after:border-indigo-400',
		500: 'after:border-indigo-500',
		600: 'after:border-indigo-600',
		700: 'after:border-indigo-700',
		800: 'after:border-indigo-800',
		900: 'after:border-indigo-900',
		950: 'after:border-indigo-950'
	},
	blue: {
		50: 'after:border-blue-50',
		100: 'after:border-blue-100',
		200: 'after:border-blue-200',
		300: 'after:border-blue-300',
		400: 'after:border-blue-400',
		500: 'after:border-blue-500',
		600: 'after:border-blue-600',
		700: 'after:border-blue-700',
		800: 'after:border-blue-800',
		900: 'after:border-blue-900',
		950: 'after:border-blue-950'
	},
	light_blue: {
		50: 'after:border-light_blue-50',
		100: 'after:border-light_blue-100',
		200: 'after:border-light_blue-200',
		300: 'after:border-light_blue-300',
		400: 'after:border-light_blue-400',
		500: 'after:border-light_blue-500',
		600: 'after:border-light_blue-600',
		700: 'after:border-light_blue-700',
		800: 'after:border-light_blue-800',
		900: 'after:border-light_blue-900',
		950: 'after:border-light_blue-950'
	},
	cyan: {
		50: 'after:border-cyan-50',
		100: 'after:border-cyan-100',
		200: 'after:border-cyan-200',
		300: 'after:border-cyan-300',
		400: 'after:border-cyan-400',
		500: 'after:border-cyan-500',
		600: 'after:border-cyan-600',
		700: 'after:border-cyan-700',
		800: 'after:border-cyan-800',
		900: 'after:border-cyan-900',
		950: 'after:border-cyan-950'
	},
	teal: {
		50: 'after:border-teal-50',
		100: 'after:border-teal-100',
		200: 'after:border-teal-200',
		300: 'after:border-teal-300',
		400: 'after:border-teal-400',
		500: 'after:border-teal-500',
		600: 'after:border-teal-600',
		700: 'after:border-teal-700',
		800: 'after:border-teal-800',
		900: 'after:border-teal-900',
		950: 'after:border-teal-950'
	},
	green: {
		50: 'after:border-green-50',
		100: 'after:border-green-100',
		200: 'after:border-green-200',
		300: 'after:border-green-300',
		400: 'after:border-green-400',
		500: 'after:border-green-500',
		600: 'after:border-green-600',
		700: 'after:border-green-700',
		800: 'after:border-green-800',
		900: 'after:border-green-900',
		950: 'after:border-green-950'
	},
	light_green: {
		50: 'after:border-light_green-50',
		100: 'after:border-light_green-100',
		200: 'after:border-light_green-200',
		300: 'after:border-light_green-300',
		400: 'after:border-light_green-400',
		500: 'after:border-light_green-500',
		600: 'after:border-light_green-600',
		700: 'after:border-light_green-700',
		800: 'after:border-light_green-800',
		900: 'after:border-light_green-900',
		950: 'after:border-light_green-950'
	},
	lime: {
		50: 'after:border-lime-50',
		100: 'after:border-lime-100',
		200: 'after:border-lime-200',
		300: 'after:border-lime-300',
		400: 'after:border-lime-400',
		500: 'after:border-lime-500',
		600: 'after:border-lime-600',
		700: 'after:border-lime-700',
		800: 'after:border-lime-800',
		900: 'after:border-lime-900',
		950: 'after:border-lime-950'
	},
	yellow: {
		50: 'after:border-yellow-50',
		100: 'after:border-yellow-100',
		200: 'after:border-yellow-200',
		300: 'after:border-yellow-300',
		400: 'after:border-yellow-400',
		500: 'after:border-yellow-500',
		600: 'after:border-yellow-600',
		700: 'after:border-yellow-700',
		800: 'after:border-yellow-800',
		900: 'after:border-yellow-900',
		950: 'after:border-yellow-950'
	},
	orange: {
		50: 'after:border-orange-50',
		100: 'after:border-orange-100',
		200: 'after:border-orange-200',
		300: 'after:border-orange-300',
		400: 'after:border-orange-400',
		500: 'after:border-orange-500',
		600: 'after:border-orange-600',
		700: 'after:border-orange-700',
		800: 'after:border-orange-800',
		900: 'after:border-orange-900',
		950: 'after:border-orange-950'
	},
	deep_orange: {
		50: 'after:border-deep_orange-50',
		100: 'after:border-deep_orange-100',
		200: 'after:border-deep_orange-200',
		300: 'after:border-deep_orange-300',
		400: 'after:border-deep_orange-400',
		500: 'after:border-deep_orange-500',
		600: 'after:border-deep_orange-600',
		700: 'after:border-deep_orange-700',
		800: 'after:border-deep_orange-800',
		900: 'after:border-deep_orange-900',
		950: 'after:border-deep_orange-950'
	}
};

const border_radius: ThemeRadiusObj = {
	none: 'rounded-none',
	xs: 'rounded-xs',
	sm: 'rounded-sm',
	base: 'rounded-base',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	full: 'rounded-full'
};

const hover_border_radius: ThemeRadiusObj = {
	none: 'hover:rounded-none',
	xs: 'hover:rounded-xs',
	sm: 'hover:rounded-sm',
	base: 'hover:rounded-base',
	lg: 'hover:rounded-lg',
	xl: 'hover:rounded-xl',
	full: 'hover:rounded-full'
};

const focus_border_radius: ThemeRadiusObj = {
	none: 'focus:rounded-none',
	xs: 'focus:rounded-xs',
	sm: 'focus:rounded-sm',
	base: 'focus:rounded-base',
	lg: 'focus:rounded-lg',
	xl: 'focus:rounded-xl',
	full: 'focus:rounded-full'
};

const active_border_radius: ThemeRadiusObj = {
	none: 'active:rounded-none',
	xs: 'active:rounded-xs',
	sm: 'active:rounded-sm',
	base: 'active:rounded-base',
	lg: 'active:rounded-lg',
	xl: 'active:rounded-xl',
	full: 'active:rounded-full'
};

const before_border_radius: ThemeRadiusObj = {
	none: 'before:rounded-none',
	xs: 'before:rounded-xs',
	sm: 'before:rounded-sm',
	base: 'before:rounded-base',
	lg: 'before:rounded-lg',
	xl: 'before:rounded-xl',
	full: 'before:rounded-full'
};

const after_border_radius: ThemeRadiusObj = {
	none: 'after:rounded-none',
	xs: 'after:rounded-xs',
	sm: 'after:rounded-sm',
	base: 'after:rounded-base',
	lg: 'after:rounded-lg',
	xl: 'after:rounded-xl',
	full: 'after:rounded-full'
};

const border_radius_t: ThemeRadiusObj = {
	none: 'rounded-t-none',
	xs: 'rounded-t-xs',
	sm: 'rounded-t-sm',
	base: 'rounded-t-base',
	lg: 'rounded-t-lg',
	xl: 'rounded-t-xl',
	full: 'rounded-t-full'
};

const hover_border_radius_t: ThemeRadiusObj = {
	none: 'hover:rounded-t-none',
	xs: 'hover:rounded-t-xs',
	sm: 'hover:rounded-t-sm',
	base: 'hover:rounded-t-base',
	lg: 'hover:rounded-t-lg',
	xl: 'hover:rounded-t-xl',
	full: 'hover:rounded-t-full'
};

const focus_border_radius_t: ThemeRadiusObj = {
	none: 'focus:rounded-t-none',
	xs: 'focus:rounded-t-xs',
	sm: 'focus:rounded-t-sm',
	base: 'focus:rounded-t-base',
	lg: 'focus:rounded-t-lg',
	xl: 'focus:rounded-t-xl',
	full: 'focus:rounded-t-full'
};

const active_border_radius_t: ThemeRadiusObj = {
	none: 'active:rounded-t-none',
	xs: 'active:rounded-t-xs',
	sm: 'active:rounded-t-sm',
	base: 'active:rounded-t-base',
	lg: 'active:rounded-t-lg',
	xl: 'active:rounded-t-xl',
	full: 'active:rounded-t-full'
};

const before_border_radius_t: ThemeRadiusObj = {
	none: 'before:rounded-t-none',
	xs: 'before:rounded-t-xs',
	sm: 'before:rounded-t-sm',
	base: 'before:rounded-t-base',
	lg: 'before:rounded-t-lg',
	xl: 'before:rounded-t-xl',
	full: 'before:rounded-t-full'
};

const after_border_radius_t: ThemeRadiusObj = {
	none: 'after:rounded-t-none',
	xs: 'after:rounded-t-xs',
	sm: 'after:rounded-t-sm',
	base: 'after:rounded-t-base',
	lg: 'after:rounded-t-lg',
	xl: 'after:rounded-t-xl',
	full: 'after:rounded-t-full'
};

const border_radius_r: ThemeRadiusObj = {
	none: 'rounded-r-none',
	xs: 'rounded-r-xs',
	sm: 'rounded-r-sm',
	base: 'rounded-r-base',
	lg: 'rounded-r-lg',
	xl: 'rounded-r-xl',
	full: 'rounded-r-full'
};

const hover_border_radius_r: ThemeRadiusObj = {
	none: 'hover:rounded-r-none',
	xs: 'hover:rounded-r-xs',
	sm: 'hover:rounded-r-sm',
	base: 'hover:rounded-r-base',
	lg: 'hover:rounded-r-lg',
	xl: 'hover:rounded-r-xl',
	full: 'hover:rounded-r-full'
};

const focus_border_radius_r: ThemeRadiusObj = {
	none: 'focus:rounded-r-none',
	xs: 'focus:rounded-r-xs',
	sm: 'focus:rounded-r-sm',
	base: 'focus:rounded-r-base',
	lg: 'focus:rounded-r-lg',
	xl: 'focus:rounded-r-xl',
	full: 'focus:rounded-r-full'
};

const active_border_radius_r: ThemeRadiusObj = {
	none: 'active:rounded-r-none',
	xs: 'active:rounded-r-xs',
	sm: 'active:rounded-r-sm',
	base: 'active:rounded-r-base',
	lg: 'active:rounded-r-lg',
	xl: 'active:rounded-r-xl',
	full: 'active:rounded-r-full'
};

const before_border_radius_r: ThemeRadiusObj = {
	none: 'before:rounded-r-none',
	xs: 'before:rounded-r-xs',
	sm: 'before:rounded-r-sm',
	base: 'before:rounded-r-base',
	lg: 'before:rounded-r-lg',
	xl: 'before:rounded-r-xl',
	full: 'before:rounded-r-full'
};

const after_border_radius_r: ThemeRadiusObj = {
	none: 'after:rounded-r-none',
	xs: 'after:rounded-r-xs',
	sm: 'after:rounded-r-sm',
	base: 'after:rounded-r-base',
	lg: 'after:rounded-r-lg',
	xl: 'after:rounded-r-xl',
	full: 'after:rounded-r-full'
};

const border_radius_b: ThemeRadiusObj = {
	none: 'rounded-b-none',
	xs: 'rounded-b-xs',
	sm: 'rounded-b-sm',
	base: 'rounded-b-base',
	lg: 'rounded-b-lg',
	xl: 'rounded-b-xl',
	full: 'rounded-b-full'
};

const hover_border_radius_b: ThemeRadiusObj = {
	none: 'hover:rounded-b-none',
	xs: 'hover:rounded-b-xs',
	sm: 'hover:rounded-b-sm',
	base: 'hover:rounded-b-base',
	lg: 'hover:rounded-b-lg',
	xl: 'hover:rounded-b-xl',
	full: 'hover:rounded-b-full'
};

const focus_border_radius_b: ThemeRadiusObj = {
	none: 'focus:rounded-b-none',
	xs: 'focus:rounded-b-xs',
	sm: 'focus:rounded-b-sm',
	base: 'focus:rounded-b-base',
	lg: 'focus:rounded-b-lg',
	xl: 'focus:rounded-b-xl',
	full: 'focus:rounded-b-full'
};

const active_border_radius_b: ThemeRadiusObj = {
	none: 'active:rounded-b-none',
	xs: 'active:rounded-b-xs',
	sm: 'active:rounded-b-sm',
	base: 'active:rounded-b-base',
	lg: 'active:rounded-b-lg',
	xl: 'active:rounded-b-xl',
	full: 'active:rounded-b-full'
};

const before_border_radius_b: ThemeRadiusObj = {
	none: 'before:rounded-b-none',
	xs: 'before:rounded-b-xs',
	sm: 'before:rounded-b-sm',
	base: 'before:rounded-b-base',
	lg: 'before:rounded-b-lg',
	xl: 'before:rounded-b-xl',
	full: 'before:rounded-b-full'
};

const after_border_radius_b: ThemeRadiusObj = {
	none: 'after:rounded-b-none',
	xs: 'after:rounded-b-xs',
	sm: 'after:rounded-b-sm',
	base: 'after:rounded-b-base',
	lg: 'after:rounded-b-lg',
	xl: 'after:rounded-b-xl',
	full: 'after:rounded-b-full'
};

const border_radius_l: ThemeRadiusObj = {
	none: 'rounded-l-none',
	xs: 'rounded-l-xs',
	sm: 'rounded-l-sm',
	base: 'rounded-l-base',
	lg: 'rounded-l-lg',
	xl: 'rounded-l-xl',
	full: 'rounded-l-full'
};

const hover_border_radius_l: ThemeRadiusObj = {
	none: 'hover:rounded-l-none',
	xs: 'hover:rounded-l-xs',
	sm: 'hover:rounded-l-sm',
	base: 'hover:rounded-l-base',
	lg: 'hover:rounded-l-lg',
	xl: 'hover:rounded-l-xl',
	full: 'hover:rounded-l-full'
};

const focus_border_radius_l: ThemeRadiusObj = {
	none: 'focus:rounded-l-none',
	xs: 'focus:rounded-l-xs',
	sm: 'focus:rounded-l-sm',
	base: 'focus:rounded-l-base',
	lg: 'focus:rounded-l-lg',
	xl: 'focus:rounded-l-xl',
	full: 'focus:rounded-l-full'
};

const active_border_radius_l: ThemeRadiusObj = {
	none: 'active:rounded-l-none',
	xs: 'active:rounded-l-xs',
	sm: 'active:rounded-l-sm',
	base: 'active:rounded-l-base',
	lg: 'active:rounded-l-lg',
	xl: 'active:rounded-l-xl',
	full: 'active:rounded-l-full'
};

const before_border_radius_l: ThemeRadiusObj = {
	none: 'before:rounded-l-none',
	xs: 'before:rounded-l-xs',
	sm: 'before:rounded-l-sm',
	base: 'before:rounded-l-base',
	lg: 'before:rounded-l-lg',
	xl: 'before:rounded-l-xl',
	full: 'before:rounded-l-full'
};

const after_border_radius_l: ThemeRadiusObj = {
	none: 'after:rounded-l-none',
	xs: 'after:rounded-l-xs',
	sm: 'after:rounded-l-sm',
	base: 'after:rounded-l-base',
	lg: 'after:rounded-l-lg',
	xl: 'after:rounded-l-xl',
	full: 'after:rounded-l-full'
};

const border_radius_tl: ThemeRadiusObj = {
	none: 'rounded-tl-none',
	xs: 'rounded-tl-xs',
	sm: 'rounded-tl-sm',
	base: 'rounded-tl-base',
	lg: 'rounded-tl-lg',
	xl: 'rounded-tl-xl',
	full: 'rounded-tl-full'
};

const hover_border_radius_tl: ThemeRadiusObj = {
	none: 'hover:rounded-tl-none',
	xs: 'hover:rounded-tl-xs',
	sm: 'hover:rounded-tl-sm',
	base: 'hover:rounded-tl-base',
	lg: 'hover:rounded-tl-lg',
	xl: 'hover:rounded-tl-xl',
	full: 'hover:rounded-tl-full'
};

const focus_border_radius_tl: ThemeRadiusObj = {
	none: 'focus:rounded-tl-none',
	xs: 'focus:rounded-tl-xs',
	sm: 'focus:rounded-tl-sm',
	base: 'focus:rounded-tl-base',
	lg: 'focus:rounded-tl-lg',
	xl: 'focus:rounded-tl-xl',
	full: 'focus:rounded-tl-full'
};

const active_border_radius_tl: ThemeRadiusObj = {
	none: 'active:rounded-tl-none',
	xs: 'active:rounded-tl-xs',
	sm: 'active:rounded-tl-sm',
	base: 'active:rounded-tl-base',
	lg: 'active:rounded-tl-lg',
	xl: 'active:rounded-tl-xl',
	full: 'active:rounded-tl-full'
};

const before_border_radius_tl: ThemeRadiusObj = {
	none: 'before:rounded-tl-none',
	xs: 'before:rounded-tl-xs',
	sm: 'before:rounded-tl-sm',
	base: 'before:rounded-tl-base',
	lg: 'before:rounded-tl-lg',
	xl: 'before:rounded-tl-xl',
	full: 'before:rounded-tl-full'
};

const after_border_radius_tl: ThemeRadiusObj = {
	none: 'after:rounded-tl-none',
	xs: 'after:rounded-tl-xs',
	sm: 'after:rounded-tl-sm',
	base: 'after:rounded-tl-base',
	lg: 'after:rounded-tl-lg',
	xl: 'after:rounded-tl-xl',
	full: 'after:rounded-tl-full'
};

const border_radius_tr: ThemeRadiusObj = {
	none: 'rounded-tr-none',
	xs: 'rounded-tr-xs',
	sm: 'rounded-tr-sm',
	base: 'rounded-tr-base',
	lg: 'rounded-tr-lg',
	xl: 'rounded-tr-xl',
	full: 'rounded-tr-full'
};

const hover_border_radius_tr: ThemeRadiusObj = {
	none: 'hover:rounded-tr-none',
	xs: 'hover:rounded-tr-xs',
	sm: 'hover:rounded-tr-sm',
	base: 'hover:rounded-tr-base',
	lg: 'hover:rounded-tr-lg',
	xl: 'hover:rounded-tr-xl',
	full: 'hover:rounded-tr-full'
};

const focus_border_radius_tr: ThemeRadiusObj = {
	none: 'focus:rounded-tr-none',
	xs: 'focus:rounded-tr-xs',
	sm: 'focus:rounded-tr-sm',
	base: 'focus:rounded-tr-base',
	lg: 'focus:rounded-tr-lg',
	xl: 'focus:rounded-tr-xl',
	full: 'focus:rounded-tr-full'
};

const active_border_radius_tr: ThemeRadiusObj = {
	none: 'active:rounded-tr-none',
	xs: 'active:rounded-tr-xs',
	sm: 'active:rounded-tr-sm',
	base: 'active:rounded-tr-base',
	lg: 'active:rounded-tr-lg',
	xl: 'active:rounded-tr-xl',
	full: 'active:rounded-tr-full'
};

const before_border_radius_tr: ThemeRadiusObj = {
	none: 'before:rounded-tr-none',
	xs: 'before:rounded-tr-xs',
	sm: 'before:rounded-tr-sm',
	base: 'before:rounded-tr-base',
	lg: 'before:rounded-tr-lg',
	xl: 'before:rounded-tr-xl',
	full: 'before:rounded-tr-full'
};

const after_border_radius_tr: ThemeRadiusObj = {
	none: 'after:rounded-tr-none',
	xs: 'after:rounded-tr-xs',
	sm: 'after:rounded-tr-sm',
	base: 'after:rounded-tr-base',
	lg: 'after:rounded-tr-lg',
	xl: 'after:rounded-tr-xl',
	full: 'after:rounded-tr-full'
};

const border_radius_br: ThemeRadiusObj = {
	none: 'rounded-br-none',
	xs: 'rounded-br-xs',
	sm: 'rounded-br-sm',
	base: 'rounded-br-base',
	lg: 'rounded-br-lg',
	xl: 'rounded-br-xl',
	full: 'rounded-br-full'
};

const hover_border_radius_br: ThemeRadiusObj = {
	none: 'hover:rounded-br-none',
	xs: 'hover:rounded-br-xs',
	sm: 'hover:rounded-br-sm',
	base: 'hover:rounded-br-base',
	lg: 'hover:rounded-br-lg',
	xl: 'hover:rounded-br-xl',
	full: 'hover:rounded-br-full'
};

const focus_border_radius_br: ThemeRadiusObj = {
	none: 'focus:rounded-br-none',
	xs: 'focus:rounded-br-xs',
	sm: 'focus:rounded-br-sm',
	base: 'focus:rounded-br-base',
	lg: 'focus:rounded-br-lg',
	xl: 'focus:rounded-br-xl',
	full: 'focus:rounded-br-full'
};

const active_border_radius_br: ThemeRadiusObj = {
	none: 'active:rounded-br-none',
	xs: 'active:rounded-br-xs',
	sm: 'active:rounded-br-sm',
	base: 'active:rounded-br-base',
	lg: 'active:rounded-br-lg',
	xl: 'active:rounded-br-xl',
	full: 'active:rounded-br-full'
};

const before_border_radius_br: ThemeRadiusObj = {
	none: 'before:rounded-br-none',
	xs: 'before:rounded-br-xs',
	sm: 'before:rounded-br-sm',
	base: 'before:rounded-br-base',
	lg: 'before:rounded-br-lg',
	xl: 'before:rounded-br-xl',
	full: 'before:rounded-br-full'
};

const after_border_radius_br: ThemeRadiusObj = {
	none: 'after:rounded-br-none',
	xs: 'after:rounded-br-xs',
	sm: 'after:rounded-br-sm',
	base: 'after:rounded-br-base',
	lg: 'after:rounded-br-lg',
	xl: 'after:rounded-br-xl',
	full: 'after:rounded-br-full'
};

const border_radius_bl: ThemeRadiusObj = {
	none: 'rounded-bl-none',
	xs: 'rounded-bl-xs',
	sm: 'rounded-bl-sm',
	base: 'rounded-bl-base',
	lg: 'rounded-bl-lg',
	xl: 'rounded-bl-xl',
	full: 'rounded-bl-full'
};

const hover_border_radius_bl: ThemeRadiusObj = {
	none: 'hover:rounded-bl-none',
	xs: 'hover:rounded-bl-xs',
	sm: 'hover:rounded-bl-sm',
	base: 'hover:rounded-bl-base',
	lg: 'hover:rounded-bl-lg',
	xl: 'hover:rounded-bl-xl',
	full: 'hover:rounded-bl-full'
};

const focus_border_radius_bl: ThemeRadiusObj = {
	none: 'focus:rounded-bl-none',
	xs: 'focus:rounded-bl-xs',
	sm: 'focus:rounded-bl-sm',
	base: 'focus:rounded-bl-base',
	lg: 'focus:rounded-bl-lg',
	xl: 'focus:rounded-bl-xl',
	full: 'focus:rounded-bl-full'
};

const active_border_radius_bl: ThemeRadiusObj = {
	none: 'active:rounded-bl-none',
	xs: 'active:rounded-bl-xs',
	sm: 'active:rounded-bl-sm',
	base: 'active:rounded-bl-base',
	lg: 'active:rounded-bl-lg',
	xl: 'active:rounded-bl-xl',
	full: 'active:rounded-bl-full'
};

const before_border_radius_bl: ThemeRadiusObj = {
	none: 'before:rounded-bl-none',
	xs: 'before:rounded-bl-xs',
	sm: 'before:rounded-bl-sm',
	base: 'before:rounded-bl-base',
	lg: 'before:rounded-bl-lg',
	xl: 'before:rounded-bl-xl',
	full: 'before:rounded-bl-full'
};

const after_border_radius_bl: ThemeRadiusObj = {
	none: 'after:rounded-bl-none',
	xs: 'after:rounded-bl-xs',
	sm: 'after:rounded-bl-sm',
	base: 'after:rounded-bl-base',
	lg: 'after:rounded-bl-lg',
	xl: 'after:rounded-bl-xl',
	full: 'after:rounded-bl-full'
};

const outline_width: OutlineWidthClassObj = {
	0: 'outline-0',
	1: 'outline-1',
	2: 'outline-2',
	4: 'outline-4',
	8: 'outline-8'
};

const hover_outline_width: OutlineWidthClassObj = {
	0: 'hover:outline-0',
	1: 'hover:outline-1',
	2: 'hover:outline-2',
	4: 'hover:outline-4',
	8: 'hover:outline-8'
};

const focus_outline_width: OutlineWidthClassObj = {
	0: 'focus:outline-0',
	1: 'focus:outline-1',
	2: 'focus:outline-2',
	4: 'focus:outline-4',
	8: 'focus:outline-8'
};

const focus_visible_outline_width: OutlineWidthClassObj = {
	0: 'focus-visible:outline-0',
	1: 'focus-visible:outline-1',
	2: 'focus-visible:outline-2',
	4: 'focus-visible:outline-4',
	8: 'focus-visible:outline-8'
};

const active_outline_width: OutlineWidthClassObj = {
	0: 'active:outline-0',
	1: 'active:outline-1',
	2: 'active:outline-2',
	4: 'active:outline-4',
	8: 'active:outline-8'
};

const before_outline_width: OutlineWidthClassObj = {
	0: 'before:outline-0',
	1: 'before:outline-1',
	2: 'before:outline-2',
	4: 'before:outline-4',
	8: 'before:outline-8'
};

const after_outline_width: OutlineWidthClassObj = {
	0: 'after:outline-0',
	1: 'after:outline-1',
	2: 'after:outline-2',
	4: 'after:outline-4',
	8: 'after:outline-8'
};

const outline_style: OutlineStyleClassObj = {
	none: 'outline-none',
	solid: 'outline',
	dashed: 'outline-dashed',
	dotted: 'outline-dotted',
	double: 'outline-double'
};

const hover_outline_style: OutlineStyleClassObj = {
	none: 'hover:outline-none',
	solid: 'hover:outline',
	dashed: 'hover:outline-dashed',
	dotted: 'hover:outline-dotted',
	double: 'hover:outline-double'
};

const focus_outline_style: OutlineStyleClassObj = {
	none: 'focus:outline-none',
	solid: 'focus:outline',
	dashed: 'focus:outline-dashed',
	dotted: 'focus:outline-dotted',
	double: 'focus:outline-double'
};

const focus_visible_outline_style: OutlineStyleClassObj = {
	none: 'focus-visible:outline-none',
	solid: 'focus-visible:outline',
	dashed: 'focus-visible:outline-dashed',
	dotted: 'focus-visible:outline-dotted',
	double: 'focus-visible:outline-double'
};

const active_outline_style: OutlineStyleClassObj = {
	none: 'active:outline-none',
	solid: 'active:outline',
	dashed: 'active:outline-dashed',
	dotted: 'active:outline-dotted',
	double: 'active:outline-double'
};

const before_outline_style: OutlineStyleClassObj = {
	none: 'before:outline-none',
	solid: 'before:outline',
	dashed: 'before:outline-dashed',
	dotted: 'before:outline-dotted',
	double: 'before:outline-double'
};

const after_outline_style: OutlineStyleClassObj = {
	none: 'after:outline-none',
	solid: 'after:outline',
	dashed: 'after:outline-dashed',
	dotted: 'after:outline-dotted',
	double: 'after:outline-double'
};

const outline_offset: OutlineOffsetClassObj = {
	0: 'outline-offset-0',
	1: 'outline-offset-1',
	2: 'outline-offset-2',
	4: 'outline-offset-4',
	8: 'outline-offset-8'
};

const hover_outline_offset: OutlineOffsetClassObj = {
	0: 'hover:outline-offset-0',
	1: 'hover:outline-offset-1',
	2: 'hover:outline-offset-2',
	4: 'hover:outline-offset-4',
	8: 'hover:outline-offset-8'
};

const focus_outline_offset: OutlineOffsetClassObj = {
	0: 'focus:outline-offset-0',
	1: 'focus:outline-offset-1',
	2: 'focus:outline-offset-2',
	4: 'focus:outline-offset-4',
	8: 'focus:outline-offset-8'
};

const focus_visible_outline_offset: OutlineOffsetClassObj = {
	0: 'focus-visible:outline-offset-0',
	1: 'focus-visible:outline-offset-1',
	2: 'focus-visible:outline-offset-2',
	4: 'focus-visible:outline-offset-4',
	8: 'focus-visible:outline-offset-8'
};

const active_outline_offset: OutlineOffsetClassObj = {
	0: 'active:outline-offset-0',
	1: 'active:outline-offset-1',
	2: 'active:outline-offset-2',
	4: 'active:outline-offset-4',
	8: 'active:outline-offset-8'
};

const before_outline_offset: OutlineOffsetClassObj = {
	0: 'before:outline-offset-0',
	1: 'before:outline-offset-1',
	2: 'before:outline-offset-2',
	4: 'before:outline-offset-4',
	8: 'before:outline-offset-8'
};

const after_outline_offset: OutlineOffsetClassObj = {
	0: 'after:outline-offset-0',
	1: 'after:outline-offset-1',
	2: 'after:outline-offset-2',
	4: 'after:outline-offset-4',
	8: 'after:outline-offset-8'
};

const outline_color: ThemeColorObj = {
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

const hover_outline_color: ThemeColorObj = {
	transparent: 'hover:outline-transparent',
	black: 'hover:outline-black',
	white: 'hover:outline-white',
	gray: {
		50: 'hover:outline-gray-50',
		100: 'hover:outline-gray-100',
		200: 'hover:outline-gray-200',
		300: 'hover:outline-gray-300',
		400: 'hover:outline-gray-400',
		500: 'hover:outline-gray-500',
		600: 'hover:outline-gray-600',
		700: 'hover:outline-gray-700',
		800: 'hover:outline-gray-800',
		900: 'hover:outline-gray-900',
		950: 'hover:outline-gray-950'
	},
	red: {
		50: 'hover:outline-red-50',
		100: 'hover:outline-red-100',
		200: 'hover:outline-red-200',
		300: 'hover:outline-red-300',
		400: 'hover:outline-red-400',
		500: 'hover:outline-red-500',
		600: 'hover:outline-red-600',
		700: 'hover:outline-red-700',
		800: 'hover:outline-red-800',
		900: 'hover:outline-red-900',
		950: 'hover:outline-red-950'
	},
	pink: {
		50: 'hover:outline-pink-50',
		100: 'hover:outline-pink-100',
		200: 'hover:outline-pink-200',
		300: 'hover:outline-pink-300',
		400: 'hover:outline-pink-400',
		500: 'hover:outline-pink-500',
		600: 'hover:outline-pink-600',
		700: 'hover:outline-pink-700',
		800: 'hover:outline-pink-800',
		900: 'hover:outline-pink-900',
		950: 'hover:outline-pink-950'
	},
	purple: {
		50: 'hover:outline-purple-50',
		100: 'hover:outline-purple-100',
		200: 'hover:outline-purple-200',
		300: 'hover:outline-purple-300',
		400: 'hover:outline-purple-400',
		500: 'hover:outline-purple-500',
		600: 'hover:outline-purple-600',
		700: 'hover:outline-purple-700',
		800: 'hover:outline-purple-800',
		900: 'hover:outline-purple-900',
		950: 'hover:outline-purple-950'
	},
	deep_purple: {
		50: 'hover:outline-deep_purple-50',
		100: 'hover:outline-deep_purple-100',
		200: 'hover:outline-deep_purple-200',
		300: 'hover:outline-deep_purple-300',
		400: 'hover:outline-deep_purple-400',
		500: 'hover:outline-deep_purple-500',
		600: 'hover:outline-deep_purple-600',
		700: 'hover:outline-deep_purple-700',
		800: 'hover:outline-deep_purple-800',
		900: 'hover:outline-deep_purple-900',
		950: 'hover:outline-deep_purple-950'
	},
	indigo: {
		50: 'hover:outline-indigo-50',
		100: 'hover:outline-indigo-100',
		200: 'hover:outline-indigo-200',
		300: 'hover:outline-indigo-300',
		400: 'hover:outline-indigo-400',
		500: 'hover:outline-indigo-500',
		600: 'hover:outline-indigo-600',
		700: 'hover:outline-indigo-700',
		800: 'hover:outline-indigo-800',
		900: 'hover:outline-indigo-900',
		950: 'hover:outline-indigo-950'
	},
	blue: {
		50: 'hover:outline-blue-50',
		100: 'hover:outline-blue-100',
		200: 'hover:outline-blue-200',
		300: 'hover:outline-blue-300',
		400: 'hover:outline-blue-400',
		500: 'hover:outline-blue-500',
		600: 'hover:outline-blue-600',
		700: 'hover:outline-blue-700',
		800: 'hover:outline-blue-800',
		900: 'hover:outline-blue-900',
		950: 'hover:outline-blue-950'
	},
	light_blue: {
		50: 'hover:outline-light_blue-50',
		100: 'hover:outline-light_blue-100',
		200: 'hover:outline-light_blue-200',
		300: 'hover:outline-light_blue-300',
		400: 'hover:outline-light_blue-400',
		500: 'hover:outline-light_blue-500',
		600: 'hover:outline-light_blue-600',
		700: 'hover:outline-light_blue-700',
		800: 'hover:outline-light_blue-800',
		900: 'hover:outline-light_blue-900',
		950: 'hover:outline-light_blue-950'
	},
	cyan: {
		50: 'hover:outline-cyan-50',
		100: 'hover:outline-cyan-100',
		200: 'hover:outline-cyan-200',
		300: 'hover:outline-cyan-300',
		400: 'hover:outline-cyan-400',
		500: 'hover:outline-cyan-500',
		600: 'hover:outline-cyan-600',
		700: 'hover:outline-cyan-700',
		800: 'hover:outline-cyan-800',
		900: 'hover:outline-cyan-900',
		950: 'hover:outline-cyan-950'
	},
	teal: {
		50: 'hover:outline-teal-50',
		100: 'hover:outline-teal-100',
		200: 'hover:outline-teal-200',
		300: 'hover:outline-teal-300',
		400: 'hover:outline-teal-400',
		500: 'hover:outline-teal-500',
		600: 'hover:outline-teal-600',
		700: 'hover:outline-teal-700',
		800: 'hover:outline-teal-800',
		900: 'hover:outline-teal-900',
		950: 'hover:outline-teal-950'
	},
	green: {
		50: 'hover:outline-green-50',
		100: 'hover:outline-green-100',
		200: 'hover:outline-green-200',
		300: 'hover:outline-green-300',
		400: 'hover:outline-green-400',
		500: 'hover:outline-green-500',
		600: 'hover:outline-green-600',
		700: 'hover:outline-green-700',
		800: 'hover:outline-green-800',
		900: 'hover:outline-green-900',
		950: 'hover:outline-green-950'
	},
	light_green: {
		50: 'hover:outline-light_green-50',
		100: 'hover:outline-light_green-100',
		200: 'hover:outline-light_green-200',
		300: 'hover:outline-light_green-300',
		400: 'hover:outline-light_green-400',
		500: 'hover:outline-light_green-500',
		600: 'hover:outline-light_green-600',
		700: 'hover:outline-light_green-700',
		800: 'hover:outline-light_green-800',
		900: 'hover:outline-light_green-900',
		950: 'hover:outline-light_green-950'
	},
	lime: {
		50: 'hover:outline-lime-50',
		100: 'hover:outline-lime-100',
		200: 'hover:outline-lime-200',
		300: 'hover:outline-lime-300',
		400: 'hover:outline-lime-400',
		500: 'hover:outline-lime-500',
		600: 'hover:outline-lime-600',
		700: 'hover:outline-lime-700',
		800: 'hover:outline-lime-800',
		900: 'hover:outline-lime-900',
		950: 'hover:outline-lime-950'
	},
	yellow: {
		50: 'hover:outline-yellow-50',
		100: 'hover:outline-yellow-100',
		200: 'hover:outline-yellow-200',
		300: 'hover:outline-yellow-300',
		400: 'hover:outline-yellow-400',
		500: 'hover:outline-yellow-500',
		600: 'hover:outline-yellow-600',
		700: 'hover:outline-yellow-700',
		800: 'hover:outline-yellow-800',
		900: 'hover:outline-yellow-900',
		950: 'hover:outline-yellow-950'
	},
	orange: {
		50: 'hover:outline-orange-50',
		100: 'hover:outline-orange-100',
		200: 'hover:outline-orange-200',
		300: 'hover:outline-orange-300',
		400: 'hover:outline-orange-400',
		500: 'hover:outline-orange-500',
		600: 'hover:outline-orange-600',
		700: 'hover:outline-orange-700',
		800: 'hover:outline-orange-800',
		900: 'hover:outline-orange-900',
		950: 'hover:outline-orange-950'
	},
	deep_orange: {
		50: 'hover:outline-deep_orange-50',
		100: 'hover:outline-deep_orange-100',
		200: 'hover:outline-deep_orange-200',
		300: 'hover:outline-deep_orange-300',
		400: 'hover:outline-deep_orange-400',
		500: 'hover:outline-deep_orange-500',
		600: 'hover:outline-deep_orange-600',
		700: 'hover:outline-deep_orange-700',
		800: 'hover:outline-deep_orange-800',
		900: 'hover:outline-deep_orange-900',
		950: 'hover:outline-deep_orange-950'
	}
};

const focus_outline_color: ThemeColorObj = {
	transparent: 'focus-visible:outline-transparent',
	black: 'focus-visible:outline-black',
	white: 'focus-visible:outline-white',
	gray: {
		50: 'focus-visible:outline-gray-50',
		100: 'focus-visible:outline-gray-100',
		200: 'focus-visible:outline-gray-200',
		300: 'focus-visible:outline-gray-300',
		400: 'focus-visible:outline-gray-400',
		500: 'focus-visible:outline-gray-500',
		600: 'focus-visible:outline-gray-600',
		700: 'focus-visible:outline-gray-700',
		800: 'focus-visible:outline-gray-800',
		900: 'focus-visible:outline-gray-900',
		950: 'focus-visible:outline-gray-950'
	},
	red: {
		50: 'focus-visible:outline-red-50',
		100: 'focus-visible:outline-red-100',
		200: 'focus-visible:outline-red-200',
		300: 'focus-visible:outline-red-300',
		400: 'focus-visible:outline-red-400',
		500: 'focus-visible:outline-red-500',
		600: 'focus-visible:outline-red-600',
		700: 'focus-visible:outline-red-700',
		800: 'focus-visible:outline-red-800',
		900: 'focus-visible:outline-red-900',
		950: 'focus-visible:outline-red-950'
	},
	pink: {
		50: 'focus-visible:outline-pink-50',
		100: 'focus-visible:outline-pink-100',
		200: 'focus-visible:outline-pink-200',
		300: 'focus-visible:outline-pink-300',
		400: 'focus-visible:outline-pink-400',
		500: 'focus-visible:outline-pink-500',
		600: 'focus-visible:outline-pink-600',
		700: 'focus-visible:outline-pink-700',
		800: 'focus-visible:outline-pink-800',
		900: 'focus-visible:outline-pink-900',
		950: 'focus-visible:outline-pink-950'
	},
	purple: {
		50: 'focus-visible:outline-purple-50',
		100: 'focus-visible:outline-purple-100',
		200: 'focus-visible:outline-purple-200',
		300: 'focus-visible:outline-purple-300',
		400: 'focus-visible:outline-purple-400',
		500: 'focus-visible:outline-purple-500',
		600: 'focus-visible:outline-purple-600',
		700: 'focus-visible:outline-purple-700',
		800: 'focus-visible:outline-purple-800',
		900: 'focus-visible:outline-purple-900',
		950: 'focus-visible:outline-purple-950'
	},
	deep_purple: {
		50: 'focus-visible:outline-deep_purple-50',
		100: 'focus-visible:outline-deep_purple-100',
		200: 'focus-visible:outline-deep_purple-200',
		300: 'focus-visible:outline-deep_purple-300',
		400: 'focus-visible:outline-deep_purple-400',
		500: 'focus-visible:outline-deep_purple-500',
		600: 'focus-visible:outline-deep_purple-600',
		700: 'focus-visible:outline-deep_purple-700',
		800: 'focus-visible:outline-deep_purple-800',
		900: 'focus-visible:outline-deep_purple-900',
		950: 'focus-visible:outline-deep_purple-950'
	},
	indigo: {
		50: 'focus-visible:outline-indigo-50',
		100: 'focus-visible:outline-indigo-100',
		200: 'focus-visible:outline-indigo-200',
		300: 'focus-visible:outline-indigo-300',
		400: 'focus-visible:outline-indigo-400',
		500: 'focus-visible:outline-indigo-500',
		600: 'focus-visible:outline-indigo-600',
		700: 'focus-visible:outline-indigo-700',
		800: 'focus-visible:outline-indigo-800',
		900: 'focus-visible:outline-indigo-900',
		950: 'focus-visible:outline-indigo-950'
	},
	blue: {
		50: 'focus-visible:outline-blue-50',
		100: 'focus-visible:outline-blue-100',
		200: 'focus-visible:outline-blue-200',
		300: 'focus-visible:outline-blue-300',
		400: 'focus-visible:outline-blue-400',
		500: 'focus-visible:outline-blue-500',
		600: 'focus-visible:outline-blue-600',
		700: 'focus-visible:outline-blue-700',
		800: 'focus-visible:outline-blue-800',
		900: 'focus-visible:outline-blue-900',
		950: 'focus-visible:outline-blue-950'
	},
	light_blue: {
		50: 'focus-visible:outline-light_blue-50',
		100: 'focus-visible:outline-light_blue-100',
		200: 'focus-visible:outline-light_blue-200',
		300: 'focus-visible:outline-light_blue-300',
		400: 'focus-visible:outline-light_blue-400',
		500: 'focus-visible:outline-light_blue-500',
		600: 'focus-visible:outline-light_blue-600',
		700: 'focus-visible:outline-light_blue-700',
		800: 'focus-visible:outline-light_blue-800',
		900: 'focus-visible:outline-light_blue-900',
		950: 'focus-visible:outline-light_blue-950'
	},
	cyan: {
		50: 'focus-visible:outline-cyan-50',
		100: 'focus-visible:outline-cyan-100',
		200: 'focus-visible:outline-cyan-200',
		300: 'focus-visible:outline-cyan-300',
		400: 'focus-visible:outline-cyan-400',
		500: 'focus-visible:outline-cyan-500',
		600: 'focus-visible:outline-cyan-600',
		700: 'focus-visible:outline-cyan-700',
		800: 'focus-visible:outline-cyan-800',
		900: 'focus-visible:outline-cyan-900',
		950: 'focus-visible:outline-cyan-950'
	},
	teal: {
		50: 'focus-visible:outline-teal-50',
		100: 'focus-visible:outline-teal-100',
		200: 'focus-visible:outline-teal-200',
		300: 'focus-visible:outline-teal-300',
		400: 'focus-visible:outline-teal-400',
		500: 'focus-visible:outline-teal-500',
		600: 'focus-visible:outline-teal-600',
		700: 'focus-visible:outline-teal-700',
		800: 'focus-visible:outline-teal-800',
		900: 'focus-visible:outline-teal-900',
		950: 'focus-visible:outline-teal-950'
	},
	green: {
		50: 'focus-visible:outline-green-50',
		100: 'focus-visible:outline-green-100',
		200: 'focus-visible:outline-green-200',
		300: 'focus-visible:outline-green-300',
		400: 'focus-visible:outline-green-400',
		500: 'focus-visible:outline-green-500',
		600: 'focus-visible:outline-green-600',
		700: 'focus-visible:outline-green-700',
		800: 'focus-visible:outline-green-800',
		900: 'focus-visible:outline-green-900',
		950: 'focus-visible:outline-green-950'
	},
	light_green: {
		50: 'focus-visible:outline-light_green-50',
		100: 'focus-visible:outline-light_green-100',
		200: 'focus-visible:outline-light_green-200',
		300: 'focus-visible:outline-light_green-300',
		400: 'focus-visible:outline-light_green-400',
		500: 'focus-visible:outline-light_green-500',
		600: 'focus-visible:outline-light_green-600',
		700: 'focus-visible:outline-light_green-700',
		800: 'focus-visible:outline-light_green-800',
		900: 'focus-visible:outline-light_green-900',
		950: 'focus-visible:outline-light_green-950'
	},
	lime: {
		50: 'focus-visible:outline-lime-50',
		100: 'focus-visible:outline-lime-100',
		200: 'focus-visible:outline-lime-200',
		300: 'focus-visible:outline-lime-300',
		400: 'focus-visible:outline-lime-400',
		500: 'focus-visible:outline-lime-500',
		600: 'focus-visible:outline-lime-600',
		700: 'focus-visible:outline-lime-700',
		800: 'focus-visible:outline-lime-800',
		900: 'focus-visible:outline-lime-900',
		950: 'focus-visible:outline-lime-950'
	},
	yellow: {
		50: 'focus-visible:outline-yellow-50',
		100: 'focus-visible:outline-yellow-100',
		200: 'focus-visible:outline-yellow-200',
		300: 'focus-visible:outline-yellow-300',
		400: 'focus-visible:outline-yellow-400',
		500: 'focus-visible:outline-yellow-500',
		600: 'focus-visible:outline-yellow-600',
		700: 'focus-visible:outline-yellow-700',
		800: 'focus-visible:outline-yellow-800',
		900: 'focus-visible:outline-yellow-900',
		950: 'focus-visible:outline-yellow-950'
	},
	orange: {
		50: 'focus-visible:outline-orange-50',
		100: 'focus-visible:outline-orange-100',
		200: 'focus-visible:outline-orange-200',
		300: 'focus-visible:outline-orange-300',
		400: 'focus-visible:outline-orange-400',
		500: 'focus-visible:outline-orange-500',
		600: 'focus-visible:outline-orange-600',
		700: 'focus-visible:outline-orange-700',
		800: 'focus-visible:outline-orange-800',
		900: 'focus-visible:outline-orange-900',
		950: 'focus-visible:outline-orange-950'
	},
	deep_orange: {
		50: 'focus-visible:outline-deep_orange-50',
		100: 'focus-visible:outline-deep_orange-100',
		200: 'focus-visible:outline-deep_orange-200',
		300: 'focus-visible:outline-deep_orange-300',
		400: 'focus-visible:outline-deep_orange-400',
		500: 'focus-visible:outline-deep_orange-500',
		600: 'focus-visible:outline-deep_orange-600',
		700: 'focus-visible:outline-deep_orange-700',
		800: 'focus-visible:outline-deep_orange-800',
		900: 'focus-visible:outline-deep_orange-900',
		950: 'focus-visible:outline-deep_orange-950'
	}
};

const focus_visible_outline_color: ThemeColorObj = {
	transparent: 'focus:outline-transparent',
	black: 'focus:outline-black',
	white: 'focus:outline-white',
	gray: {
		50: 'focus:outline-gray-50',
		100: 'focus:outline-gray-100',
		200: 'focus:outline-gray-200',
		300: 'focus:outline-gray-300',
		400: 'focus:outline-gray-400',
		500: 'focus:outline-gray-500',
		600: 'focus:outline-gray-600',
		700: 'focus:outline-gray-700',
		800: 'focus:outline-gray-800',
		900: 'focus:outline-gray-900',
		950: 'focus:outline-gray-950'
	},
	red: {
		50: 'focus:outline-red-50',
		100: 'focus:outline-red-100',
		200: 'focus:outline-red-200',
		300: 'focus:outline-red-300',
		400: 'focus:outline-red-400',
		500: 'focus:outline-red-500',
		600: 'focus:outline-red-600',
		700: 'focus:outline-red-700',
		800: 'focus:outline-red-800',
		900: 'focus:outline-red-900',
		950: 'focus:outline-red-950'
	},
	pink: {
		50: 'focus:outline-pink-50',
		100: 'focus:outline-pink-100',
		200: 'focus:outline-pink-200',
		300: 'focus:outline-pink-300',
		400: 'focus:outline-pink-400',
		500: 'focus:outline-pink-500',
		600: 'focus:outline-pink-600',
		700: 'focus:outline-pink-700',
		800: 'focus:outline-pink-800',
		900: 'focus:outline-pink-900',
		950: 'focus:outline-pink-950'
	},
	purple: {
		50: 'focus:outline-purple-50',
		100: 'focus:outline-purple-100',
		200: 'focus:outline-purple-200',
		300: 'focus:outline-purple-300',
		400: 'focus:outline-purple-400',
		500: 'focus:outline-purple-500',
		600: 'focus:outline-purple-600',
		700: 'focus:outline-purple-700',
		800: 'focus:outline-purple-800',
		900: 'focus:outline-purple-900',
		950: 'focus:outline-purple-950'
	},
	deep_purple: {
		50: 'focus:outline-deep_purple-50',
		100: 'focus:outline-deep_purple-100',
		200: 'focus:outline-deep_purple-200',
		300: 'focus:outline-deep_purple-300',
		400: 'focus:outline-deep_purple-400',
		500: 'focus:outline-deep_purple-500',
		600: 'focus:outline-deep_purple-600',
		700: 'focus:outline-deep_purple-700',
		800: 'focus:outline-deep_purple-800',
		900: 'focus:outline-deep_purple-900',
		950: 'focus:outline-deep_purple-950'
	},
	indigo: {
		50: 'focus:outline-indigo-50',
		100: 'focus:outline-indigo-100',
		200: 'focus:outline-indigo-200',
		300: 'focus:outline-indigo-300',
		400: 'focus:outline-indigo-400',
		500: 'focus:outline-indigo-500',
		600: 'focus:outline-indigo-600',
		700: 'focus:outline-indigo-700',
		800: 'focus:outline-indigo-800',
		900: 'focus:outline-indigo-900',
		950: 'focus:outline-indigo-950'
	},
	blue: {
		50: 'focus:outline-blue-50',
		100: 'focus:outline-blue-100',
		200: 'focus:outline-blue-200',
		300: 'focus:outline-blue-300',
		400: 'focus:outline-blue-400',
		500: 'focus:outline-blue-500',
		600: 'focus:outline-blue-600',
		700: 'focus:outline-blue-700',
		800: 'focus:outline-blue-800',
		900: 'focus:outline-blue-900',
		950: 'focus:outline-blue-950'
	},
	light_blue: {
		50: 'focus:outline-light_blue-50',
		100: 'focus:outline-light_blue-100',
		200: 'focus:outline-light_blue-200',
		300: 'focus:outline-light_blue-300',
		400: 'focus:outline-light_blue-400',
		500: 'focus:outline-light_blue-500',
		600: 'focus:outline-light_blue-600',
		700: 'focus:outline-light_blue-700',
		800: 'focus:outline-light_blue-800',
		900: 'focus:outline-light_blue-900',
		950: 'focus:outline-light_blue-950'
	},
	cyan: {
		50: 'focus:outline-cyan-50',
		100: 'focus:outline-cyan-100',
		200: 'focus:outline-cyan-200',
		300: 'focus:outline-cyan-300',
		400: 'focus:outline-cyan-400',
		500: 'focus:outline-cyan-500',
		600: 'focus:outline-cyan-600',
		700: 'focus:outline-cyan-700',
		800: 'focus:outline-cyan-800',
		900: 'focus:outline-cyan-900',
		950: 'focus:outline-cyan-950'
	},
	teal: {
		50: 'focus:outline-teal-50',
		100: 'focus:outline-teal-100',
		200: 'focus:outline-teal-200',
		300: 'focus:outline-teal-300',
		400: 'focus:outline-teal-400',
		500: 'focus:outline-teal-500',
		600: 'focus:outline-teal-600',
		700: 'focus:outline-teal-700',
		800: 'focus:outline-teal-800',
		900: 'focus:outline-teal-900',
		950: 'focus:outline-teal-950'
	},
	green: {
		50: 'focus:outline-green-50',
		100: 'focus:outline-green-100',
		200: 'focus:outline-green-200',
		300: 'focus:outline-green-300',
		400: 'focus:outline-green-400',
		500: 'focus:outline-green-500',
		600: 'focus:outline-green-600',
		700: 'focus:outline-green-700',
		800: 'focus:outline-green-800',
		900: 'focus:outline-green-900',
		950: 'focus:outline-green-950'
	},
	light_green: {
		50: 'focus:outline-light_green-50',
		100: 'focus:outline-light_green-100',
		200: 'focus:outline-light_green-200',
		300: 'focus:outline-light_green-300',
		400: 'focus:outline-light_green-400',
		500: 'focus:outline-light_green-500',
		600: 'focus:outline-light_green-600',
		700: 'focus:outline-light_green-700',
		800: 'focus:outline-light_green-800',
		900: 'focus:outline-light_green-900',
		950: 'focus:outline-light_green-950'
	},
	lime: {
		50: 'focus:outline-lime-50',
		100: 'focus:outline-lime-100',
		200: 'focus:outline-lime-200',
		300: 'focus:outline-lime-300',
		400: 'focus:outline-lime-400',
		500: 'focus:outline-lime-500',
		600: 'focus:outline-lime-600',
		700: 'focus:outline-lime-700',
		800: 'focus:outline-lime-800',
		900: 'focus:outline-lime-900',
		950: 'focus:outline-lime-950'
	},
	yellow: {
		50: 'focus:outline-yellow-50',
		100: 'focus:outline-yellow-100',
		200: 'focus:outline-yellow-200',
		300: 'focus:outline-yellow-300',
		400: 'focus:outline-yellow-400',
		500: 'focus:outline-yellow-500',
		600: 'focus:outline-yellow-600',
		700: 'focus:outline-yellow-700',
		800: 'focus:outline-yellow-800',
		900: 'focus:outline-yellow-900',
		950: 'focus:outline-yellow-950'
	},
	orange: {
		50: 'focus:outline-orange-50',
		100: 'focus:outline-orange-100',
		200: 'focus:outline-orange-200',
		300: 'focus:outline-orange-300',
		400: 'focus:outline-orange-400',
		500: 'focus:outline-orange-500',
		600: 'focus:outline-orange-600',
		700: 'focus:outline-orange-700',
		800: 'focus:outline-orange-800',
		900: 'focus:outline-orange-900',
		950: 'focus:outline-orange-950'
	},
	deep_orange: {
		50: 'focus:outline-deep_orange-50',
		100: 'focus:outline-deep_orange-100',
		200: 'focus:outline-deep_orange-200',
		300: 'focus:outline-deep_orange-300',
		400: 'focus:outline-deep_orange-400',
		500: 'focus:outline-deep_orange-500',
		600: 'focus:outline-deep_orange-600',
		700: 'focus:outline-deep_orange-700',
		800: 'focus:outline-deep_orange-800',
		900: 'focus:outline-deep_orange-900',
		950: 'focus:outline-deep_orange-950'
	}
};

const active_outline_color: ThemeColorObj = {
	transparent: 'active:outline-transparent',
	black: 'active:outline-black',
	white: 'active:outline-white',
	gray: {
		50: 'active:outline-gray-50',
		100: 'active:outline-gray-100',
		200: 'active:outline-gray-200',
		300: 'active:outline-gray-300',
		400: 'active:outline-gray-400',
		500: 'active:outline-gray-500',
		600: 'active:outline-gray-600',
		700: 'active:outline-gray-700',
		800: 'active:outline-gray-800',
		900: 'active:outline-gray-900',
		950: 'active:outline-gray-950'
	},
	red: {
		50: 'active:outline-red-50',
		100: 'active:outline-red-100',
		200: 'active:outline-red-200',
		300: 'active:outline-red-300',
		400: 'active:outline-red-400',
		500: 'active:outline-red-500',
		600: 'active:outline-red-600',
		700: 'active:outline-red-700',
		800: 'active:outline-red-800',
		900: 'active:outline-red-900',
		950: 'active:outline-red-950'
	},
	pink: {
		50: 'active:outline-pink-50',
		100: 'active:outline-pink-100',
		200: 'active:outline-pink-200',
		300: 'active:outline-pink-300',
		400: 'active:outline-pink-400',
		500: 'active:outline-pink-500',
		600: 'active:outline-pink-600',
		700: 'active:outline-pink-700',
		800: 'active:outline-pink-800',
		900: 'active:outline-pink-900',
		950: 'active:outline-pink-950'
	},
	purple: {
		50: 'active:outline-purple-50',
		100: 'active:outline-purple-100',
		200: 'active:outline-purple-200',
		300: 'active:outline-purple-300',
		400: 'active:outline-purple-400',
		500: 'active:outline-purple-500',
		600: 'active:outline-purple-600',
		700: 'active:outline-purple-700',
		800: 'active:outline-purple-800',
		900: 'active:outline-purple-900',
		950: 'active:outline-purple-950'
	},
	deep_purple: {
		50: 'active:outline-deep_purple-50',
		100: 'active:outline-deep_purple-100',
		200: 'active:outline-deep_purple-200',
		300: 'active:outline-deep_purple-300',
		400: 'active:outline-deep_purple-400',
		500: 'active:outline-deep_purple-500',
		600: 'active:outline-deep_purple-600',
		700: 'active:outline-deep_purple-700',
		800: 'active:outline-deep_purple-800',
		900: 'active:outline-deep_purple-900',
		950: 'active:outline-deep_purple-950'
	},
	indigo: {
		50: 'active:outline-indigo-50',
		100: 'active:outline-indigo-100',
		200: 'active:outline-indigo-200',
		300: 'active:outline-indigo-300',
		400: 'active:outline-indigo-400',
		500: 'active:outline-indigo-500',
		600: 'active:outline-indigo-600',
		700: 'active:outline-indigo-700',
		800: 'active:outline-indigo-800',
		900: 'active:outline-indigo-900',
		950: 'active:outline-indigo-950'
	},
	blue: {
		50: 'active:outline-blue-50',
		100: 'active:outline-blue-100',
		200: 'active:outline-blue-200',
		300: 'active:outline-blue-300',
		400: 'active:outline-blue-400',
		500: 'active:outline-blue-500',
		600: 'active:outline-blue-600',
		700: 'active:outline-blue-700',
		800: 'active:outline-blue-800',
		900: 'active:outline-blue-900',
		950: 'active:outline-blue-950'
	},
	light_blue: {
		50: 'active:outline-light_blue-50',
		100: 'active:outline-light_blue-100',
		200: 'active:outline-light_blue-200',
		300: 'active:outline-light_blue-300',
		400: 'active:outline-light_blue-400',
		500: 'active:outline-light_blue-500',
		600: 'active:outline-light_blue-600',
		700: 'active:outline-light_blue-700',
		800: 'active:outline-light_blue-800',
		900: 'active:outline-light_blue-900',
		950: 'active:outline-light_blue-950'
	},
	cyan: {
		50: 'active:outline-cyan-50',
		100: 'active:outline-cyan-100',
		200: 'active:outline-cyan-200',
		300: 'active:outline-cyan-300',
		400: 'active:outline-cyan-400',
		500: 'active:outline-cyan-500',
		600: 'active:outline-cyan-600',
		700: 'active:outline-cyan-700',
		800: 'active:outline-cyan-800',
		900: 'active:outline-cyan-900',
		950: 'active:outline-cyan-950'
	},
	teal: {
		50: 'active:outline-teal-50',
		100: 'active:outline-teal-100',
		200: 'active:outline-teal-200',
		300: 'active:outline-teal-300',
		400: 'active:outline-teal-400',
		500: 'active:outline-teal-500',
		600: 'active:outline-teal-600',
		700: 'active:outline-teal-700',
		800: 'active:outline-teal-800',
		900: 'active:outline-teal-900',
		950: 'active:outline-teal-950'
	},
	green: {
		50: 'active:outline-green-50',
		100: 'active:outline-green-100',
		200: 'active:outline-green-200',
		300: 'active:outline-green-300',
		400: 'active:outline-green-400',
		500: 'active:outline-green-500',
		600: 'active:outline-green-600',
		700: 'active:outline-green-700',
		800: 'active:outline-green-800',
		900: 'active:outline-green-900',
		950: 'active:outline-green-950'
	},
	light_green: {
		50: 'active:outline-light_green-50',
		100: 'active:outline-light_green-100',
		200: 'active:outline-light_green-200',
		300: 'active:outline-light_green-300',
		400: 'active:outline-light_green-400',
		500: 'active:outline-light_green-500',
		600: 'active:outline-light_green-600',
		700: 'active:outline-light_green-700',
		800: 'active:outline-light_green-800',
		900: 'active:outline-light_green-900',
		950: 'active:outline-light_green-950'
	},
	lime: {
		50: 'active:outline-lime-50',
		100: 'active:outline-lime-100',
		200: 'active:outline-lime-200',
		300: 'active:outline-lime-300',
		400: 'active:outline-lime-400',
		500: 'active:outline-lime-500',
		600: 'active:outline-lime-600',
		700: 'active:outline-lime-700',
		800: 'active:outline-lime-800',
		900: 'active:outline-lime-900',
		950: 'active:outline-lime-950'
	},
	yellow: {
		50: 'active:outline-yellow-50',
		100: 'active:outline-yellow-100',
		200: 'active:outline-yellow-200',
		300: 'active:outline-yellow-300',
		400: 'active:outline-yellow-400',
		500: 'active:outline-yellow-500',
		600: 'active:outline-yellow-600',
		700: 'active:outline-yellow-700',
		800: 'active:outline-yellow-800',
		900: 'active:outline-yellow-900',
		950: 'active:outline-yellow-950'
	},
	orange: {
		50: 'active:outline-orange-50',
		100: 'active:outline-orange-100',
		200: 'active:outline-orange-200',
		300: 'active:outline-orange-300',
		400: 'active:outline-orange-400',
		500: 'active:outline-orange-500',
		600: 'active:outline-orange-600',
		700: 'active:outline-orange-700',
		800: 'active:outline-orange-800',
		900: 'active:outline-orange-900',
		950: 'active:outline-orange-950'
	},
	deep_orange: {
		50: 'active:outline-deep_orange-50',
		100: 'active:outline-deep_orange-100',
		200: 'active:outline-deep_orange-200',
		300: 'active:outline-deep_orange-300',
		400: 'active:outline-deep_orange-400',
		500: 'active:outline-deep_orange-500',
		600: 'active:outline-deep_orange-600',
		700: 'active:outline-deep_orange-700',
		800: 'active:outline-deep_orange-800',
		900: 'active:outline-deep_orange-900',
		950: 'active:outline-deep_orange-950'
	}
};

const before_outline_color: ThemeColorObj = {
	transparent: 'before:outline-transparent',
	black: 'before:outline-black',
	white: 'before:outline-white',
	gray: {
		50: 'before:outline-gray-50',
		100: 'before:outline-gray-100',
		200: 'before:outline-gray-200',
		300: 'before:outline-gray-300',
		400: 'before:outline-gray-400',
		500: 'before:outline-gray-500',
		600: 'before:outline-gray-600',
		700: 'before:outline-gray-700',
		800: 'before:outline-gray-800',
		900: 'before:outline-gray-900',
		950: 'before:outline-gray-950'
	},
	red: {
		50: 'before:outline-red-50',
		100: 'before:outline-red-100',
		200: 'before:outline-red-200',
		300: 'before:outline-red-300',
		400: 'before:outline-red-400',
		500: 'before:outline-red-500',
		600: 'before:outline-red-600',
		700: 'before:outline-red-700',
		800: 'before:outline-red-800',
		900: 'before:outline-red-900',
		950: 'before:outline-red-950'
	},
	pink: {
		50: 'before:outline-pink-50',
		100: 'before:outline-pink-100',
		200: 'before:outline-pink-200',
		300: 'before:outline-pink-300',
		400: 'before:outline-pink-400',
		500: 'before:outline-pink-500',
		600: 'before:outline-pink-600',
		700: 'before:outline-pink-700',
		800: 'before:outline-pink-800',
		900: 'before:outline-pink-900',
		950: 'before:outline-pink-950'
	},
	purple: {
		50: 'before:outline-purple-50',
		100: 'before:outline-purple-100',
		200: 'before:outline-purple-200',
		300: 'before:outline-purple-300',
		400: 'before:outline-purple-400',
		500: 'before:outline-purple-500',
		600: 'before:outline-purple-600',
		700: 'before:outline-purple-700',
		800: 'before:outline-purple-800',
		900: 'before:outline-purple-900',
		950: 'before:outline-purple-950'
	},
	deep_purple: {
		50: 'before:outline-deep_purple-50',
		100: 'before:outline-deep_purple-100',
		200: 'before:outline-deep_purple-200',
		300: 'before:outline-deep_purple-300',
		400: 'before:outline-deep_purple-400',
		500: 'before:outline-deep_purple-500',
		600: 'before:outline-deep_purple-600',
		700: 'before:outline-deep_purple-700',
		800: 'before:outline-deep_purple-800',
		900: 'before:outline-deep_purple-900',
		950: 'before:outline-deep_purple-950'
	},
	indigo: {
		50: 'before:outline-indigo-50',
		100: 'before:outline-indigo-100',
		200: 'before:outline-indigo-200',
		300: 'before:outline-indigo-300',
		400: 'before:outline-indigo-400',
		500: 'before:outline-indigo-500',
		600: 'before:outline-indigo-600',
		700: 'before:outline-indigo-700',
		800: 'before:outline-indigo-800',
		900: 'before:outline-indigo-900',
		950: 'before:outline-indigo-950'
	},
	blue: {
		50: 'before:outline-blue-50',
		100: 'before:outline-blue-100',
		200: 'before:outline-blue-200',
		300: 'before:outline-blue-300',
		400: 'before:outline-blue-400',
		500: 'before:outline-blue-500',
		600: 'before:outline-blue-600',
		700: 'before:outline-blue-700',
		800: 'before:outline-blue-800',
		900: 'before:outline-blue-900',
		950: 'before:outline-blue-950'
	},
	light_blue: {
		50: 'before:outline-light_blue-50',
		100: 'before:outline-light_blue-100',
		200: 'before:outline-light_blue-200',
		300: 'before:outline-light_blue-300',
		400: 'before:outline-light_blue-400',
		500: 'before:outline-light_blue-500',
		600: 'before:outline-light_blue-600',
		700: 'before:outline-light_blue-700',
		800: 'before:outline-light_blue-800',
		900: 'before:outline-light_blue-900',
		950: 'before:outline-light_blue-950'
	},
	cyan: {
		50: 'before:outline-cyan-50',
		100: 'before:outline-cyan-100',
		200: 'before:outline-cyan-200',
		300: 'before:outline-cyan-300',
		400: 'before:outline-cyan-400',
		500: 'before:outline-cyan-500',
		600: 'before:outline-cyan-600',
		700: 'before:outline-cyan-700',
		800: 'before:outline-cyan-800',
		900: 'before:outline-cyan-900',
		950: 'before:outline-cyan-950'
	},
	teal: {
		50: 'before:outline-teal-50',
		100: 'before:outline-teal-100',
		200: 'before:outline-teal-200',
		300: 'before:outline-teal-300',
		400: 'before:outline-teal-400',
		500: 'before:outline-teal-500',
		600: 'before:outline-teal-600',
		700: 'before:outline-teal-700',
		800: 'before:outline-teal-800',
		900: 'before:outline-teal-900',
		950: 'before:outline-teal-950'
	},
	green: {
		50: 'before:outline-green-50',
		100: 'before:outline-green-100',
		200: 'before:outline-green-200',
		300: 'before:outline-green-300',
		400: 'before:outline-green-400',
		500: 'before:outline-green-500',
		600: 'before:outline-green-600',
		700: 'before:outline-green-700',
		800: 'before:outline-green-800',
		900: 'before:outline-green-900',
		950: 'before:outline-green-950'
	},
	light_green: {
		50: 'before:outline-light_green-50',
		100: 'before:outline-light_green-100',
		200: 'before:outline-light_green-200',
		300: 'before:outline-light_green-300',
		400: 'before:outline-light_green-400',
		500: 'before:outline-light_green-500',
		600: 'before:outline-light_green-600',
		700: 'before:outline-light_green-700',
		800: 'before:outline-light_green-800',
		900: 'before:outline-light_green-900',
		950: 'before:outline-light_green-950'
	},
	lime: {
		50: 'before:outline-lime-50',
		100: 'before:outline-lime-100',
		200: 'before:outline-lime-200',
		300: 'before:outline-lime-300',
		400: 'before:outline-lime-400',
		500: 'before:outline-lime-500',
		600: 'before:outline-lime-600',
		700: 'before:outline-lime-700',
		800: 'before:outline-lime-800',
		900: 'before:outline-lime-900',
		950: 'before:outline-lime-950'
	},
	yellow: {
		50: 'before:outline-yellow-50',
		100: 'before:outline-yellow-100',
		200: 'before:outline-yellow-200',
		300: 'before:outline-yellow-300',
		400: 'before:outline-yellow-400',
		500: 'before:outline-yellow-500',
		600: 'before:outline-yellow-600',
		700: 'before:outline-yellow-700',
		800: 'before:outline-yellow-800',
		900: 'before:outline-yellow-900',
		950: 'before:outline-yellow-950'
	},
	orange: {
		50: 'before:outline-orange-50',
		100: 'before:outline-orange-100',
		200: 'before:outline-orange-200',
		300: 'before:outline-orange-300',
		400: 'before:outline-orange-400',
		500: 'before:outline-orange-500',
		600: 'before:outline-orange-600',
		700: 'before:outline-orange-700',
		800: 'before:outline-orange-800',
		900: 'before:outline-orange-900',
		950: 'before:outline-orange-950'
	},
	deep_orange: {
		50: 'before:outline-deep_orange-50',
		100: 'before:outline-deep_orange-100',
		200: 'before:outline-deep_orange-200',
		300: 'before:outline-deep_orange-300',
		400: 'before:outline-deep_orange-400',
		500: 'before:outline-deep_orange-500',
		600: 'before:outline-deep_orange-600',
		700: 'before:outline-deep_orange-700',
		800: 'before:outline-deep_orange-800',
		900: 'before:outline-deep_orange-900',
		950: 'before:outline-deep_orange-950'
	}
};

const after_outline_color: ThemeColorObj = {
	transparent: 'after:outline-transparent',
	black: 'after:outline-black',
	white: 'after:outline-white',
	gray: {
		50: 'after:outline-gray-50',
		100: 'after:outline-gray-100',
		200: 'after:outline-gray-200',
		300: 'after:outline-gray-300',
		400: 'after:outline-gray-400',
		500: 'after:outline-gray-500',
		600: 'after:outline-gray-600',
		700: 'after:outline-gray-700',
		800: 'after:outline-gray-800',
		900: 'after:outline-gray-900',
		950: 'after:outline-gray-950'
	},
	red: {
		50: 'after:outline-red-50',
		100: 'after:outline-red-100',
		200: 'after:outline-red-200',
		300: 'after:outline-red-300',
		400: 'after:outline-red-400',
		500: 'after:outline-red-500',
		600: 'after:outline-red-600',
		700: 'after:outline-red-700',
		800: 'after:outline-red-800',
		900: 'after:outline-red-900',
		950: 'after:outline-red-950'
	},
	pink: {
		50: 'after:outline-pink-50',
		100: 'after:outline-pink-100',
		200: 'after:outline-pink-200',
		300: 'after:outline-pink-300',
		400: 'after:outline-pink-400',
		500: 'after:outline-pink-500',
		600: 'after:outline-pink-600',
		700: 'after:outline-pink-700',
		800: 'after:outline-pink-800',
		900: 'after:outline-pink-900',
		950: 'after:outline-pink-950'
	},
	purple: {
		50: 'after:outline-purple-50',
		100: 'after:outline-purple-100',
		200: 'after:outline-purple-200',
		300: 'after:outline-purple-300',
		400: 'after:outline-purple-400',
		500: 'after:outline-purple-500',
		600: 'after:outline-purple-600',
		700: 'after:outline-purple-700',
		800: 'after:outline-purple-800',
		900: 'after:outline-purple-900',
		950: 'after:outline-purple-950'
	},
	deep_purple: {
		50: 'after:outline-deep_purple-50',
		100: 'after:outline-deep_purple-100',
		200: 'after:outline-deep_purple-200',
		300: 'after:outline-deep_purple-300',
		400: 'after:outline-deep_purple-400',
		500: 'after:outline-deep_purple-500',
		600: 'after:outline-deep_purple-600',
		700: 'after:outline-deep_purple-700',
		800: 'after:outline-deep_purple-800',
		900: 'after:outline-deep_purple-900',
		950: 'after:outline-deep_purple-950'
	},
	indigo: {
		50: 'after:outline-indigo-50',
		100: 'after:outline-indigo-100',
		200: 'after:outline-indigo-200',
		300: 'after:outline-indigo-300',
		400: 'after:outline-indigo-400',
		500: 'after:outline-indigo-500',
		600: 'after:outline-indigo-600',
		700: 'after:outline-indigo-700',
		800: 'after:outline-indigo-800',
		900: 'after:outline-indigo-900',
		950: 'after:outline-indigo-950'
	},
	blue: {
		50: 'after:outline-blue-50',
		100: 'after:outline-blue-100',
		200: 'after:outline-blue-200',
		300: 'after:outline-blue-300',
		400: 'after:outline-blue-400',
		500: 'after:outline-blue-500',
		600: 'after:outline-blue-600',
		700: 'after:outline-blue-700',
		800: 'after:outline-blue-800',
		900: 'after:outline-blue-900',
		950: 'after:outline-blue-950'
	},
	light_blue: {
		50: 'after:outline-light_blue-50',
		100: 'after:outline-light_blue-100',
		200: 'after:outline-light_blue-200',
		300: 'after:outline-light_blue-300',
		400: 'after:outline-light_blue-400',
		500: 'after:outline-light_blue-500',
		600: 'after:outline-light_blue-600',
		700: 'after:outline-light_blue-700',
		800: 'after:outline-light_blue-800',
		900: 'after:outline-light_blue-900',
		950: 'after:outline-light_blue-950'
	},
	cyan: {
		50: 'after:outline-cyan-50',
		100: 'after:outline-cyan-100',
		200: 'after:outline-cyan-200',
		300: 'after:outline-cyan-300',
		400: 'after:outline-cyan-400',
		500: 'after:outline-cyan-500',
		600: 'after:outline-cyan-600',
		700: 'after:outline-cyan-700',
		800: 'after:outline-cyan-800',
		900: 'after:outline-cyan-900',
		950: 'after:outline-cyan-950'
	},
	teal: {
		50: 'after:outline-teal-50',
		100: 'after:outline-teal-100',
		200: 'after:outline-teal-200',
		300: 'after:outline-teal-300',
		400: 'after:outline-teal-400',
		500: 'after:outline-teal-500',
		600: 'after:outline-teal-600',
		700: 'after:outline-teal-700',
		800: 'after:outline-teal-800',
		900: 'after:outline-teal-900',
		950: 'after:outline-teal-950'
	},
	green: {
		50: 'after:outline-green-50',
		100: 'after:outline-green-100',
		200: 'after:outline-green-200',
		300: 'after:outline-green-300',
		400: 'after:outline-green-400',
		500: 'after:outline-green-500',
		600: 'after:outline-green-600',
		700: 'after:outline-green-700',
		800: 'after:outline-green-800',
		900: 'after:outline-green-900',
		950: 'after:outline-green-950'
	},
	light_green: {
		50: 'after:outline-light_green-50',
		100: 'after:outline-light_green-100',
		200: 'after:outline-light_green-200',
		300: 'after:outline-light_green-300',
		400: 'after:outline-light_green-400',
		500: 'after:outline-light_green-500',
		600: 'after:outline-light_green-600',
		700: 'after:outline-light_green-700',
		800: 'after:outline-light_green-800',
		900: 'after:outline-light_green-900',
		950: 'after:outline-light_green-950'
	},
	lime: {
		50: 'after:outline-lime-50',
		100: 'after:outline-lime-100',
		200: 'after:outline-lime-200',
		300: 'after:outline-lime-300',
		400: 'after:outline-lime-400',
		500: 'after:outline-lime-500',
		600: 'after:outline-lime-600',
		700: 'after:outline-lime-700',
		800: 'after:outline-lime-800',
		900: 'after:outline-lime-900',
		950: 'after:outline-lime-950'
	},
	yellow: {
		50: 'after:outline-yellow-50',
		100: 'after:outline-yellow-100',
		200: 'after:outline-yellow-200',
		300: 'after:outline-yellow-300',
		400: 'after:outline-yellow-400',
		500: 'after:outline-yellow-500',
		600: 'after:outline-yellow-600',
		700: 'after:outline-yellow-700',
		800: 'after:outline-yellow-800',
		900: 'after:outline-yellow-900',
		950: 'after:outline-yellow-950'
	},
	orange: {
		50: 'after:outline-orange-50',
		100: 'after:outline-orange-100',
		200: 'after:outline-orange-200',
		300: 'after:outline-orange-300',
		400: 'after:outline-orange-400',
		500: 'after:outline-orange-500',
		600: 'after:outline-orange-600',
		700: 'after:outline-orange-700',
		800: 'after:outline-orange-800',
		900: 'after:outline-orange-900',
		950: 'after:outline-orange-950'
	},
	deep_orange: {
		50: 'after:outline-deep_orange-50',
		100: 'after:outline-deep_orange-100',
		200: 'after:outline-deep_orange-200',
		300: 'after:outline-deep_orange-300',
		400: 'after:outline-deep_orange-400',
		500: 'after:outline-deep_orange-500',
		600: 'after:outline-deep_orange-600',
		700: 'after:outline-deep_orange-700',
		800: 'after:outline-deep_orange-800',
		900: 'after:outline-deep_orange-900',
		950: 'after:outline-deep_orange-950'
	}
};

export default {
	border_width: {
		...border_width,
		hover: hover_border_width,
		focus: focus_border_width,
		active: active_border_width,
		before: before_border_width,
		after: after_border_width
	},
	border_x_width: {
		...border_x_width,
		hover: hover_border_x_width,
		focus: focus_border_x_width,
		active: active_border_x_width,
		before: before_border_x_width,
		after: after_border_x_width
	},
	border_y_width: {
		...border_y_width,
		hover: hover_border_y_width,
		focus: focus_border_y_width,
		active: active_border_y_width,
		before: before_border_y_width,
		after: after_border_y_width
	},
	border_l_width: {
		...border_l_width,
		hover: hover_border_l_width,
		focus: focus_border_l_width,
		active: active_border_l_width,
		before: before_border_l_width,
		after: after_border_l_width
	},
	border_t_width: {
		...border_t_width,
		hover: hover_border_t_width,
		focus: focus_border_t_width,
		active: active_border_t_width,
		before: before_border_t_width,
		after: after_border_t_width
	},
	border_r_width: {
		...border_r_width,
		hover: hover_border_r_width,
		focus: focus_border_r_width,
		active: active_border_r_width,
		before: before_border_r_width,
		after: after_border_r_width
	},
	border_b_width: {
		...border_b_width,
		hover: hover_border_b_width,
		focus: focus_border_b_width,
		active: active_border_b_width,
		before: before_border_b_width,
		after: after_border_b_width
	},
	border_style: {
		...border_style,
		hover: hover_border_style,
		focus: focus_border_style,
		active: active_border_style,
		before: before_border_style,
		after: after_border_style
	},
	border_color: {
		...border_color,
		hover: hover_border_color,
		focus: focus_border_color,
		active: active_border_color,
		before: before_border_color,
		after: after_border_color
	},
	border_radius: {
		...border_radius,
		hover: hover_border_radius,
		focus: focus_border_radius,
		active: active_border_radius,
		before: before_border_radius,
		after: after_border_radius
	},
	border_radius_t: {
		...border_radius_t,
		hover: hover_border_radius_t,
		focus: focus_border_radius_t,
		active: active_border_radius_t,
		before: before_border_radius_t,
		after: after_border_radius_t
	},
	border_radius_r: {
		...border_radius_r,
		hover: hover_border_radius_r,
		focus: focus_border_radius_r,
		active: active_border_radius_r,
		before: before_border_radius_r,
		after: after_border_radius_r
	},
	border_radius_b: {
		...border_radius_b,
		hover: hover_border_radius_b,
		focus: focus_border_radius_b,
		active: active_border_radius_b,
		before: before_border_radius_b,
		after: after_border_radius_b
	},
	border_radius_l: {
		...border_radius_l,
		hover: hover_border_radius_l,
		focus: focus_border_radius_l,
		active: active_border_radius_l,
		before: before_border_radius_l,
		after: after_border_radius_l
	},
	border_radius_tl: {
		...border_radius_tl,
		hover: hover_border_radius_tl,
		focus: focus_border_radius_tl,
		active: active_border_radius_tl,
		before: before_border_radius_tl,
		after: after_border_radius_tl
	},
	border_radius_tr: {
		...border_radius_tr,
		hover: hover_border_radius_tr,
		focus: focus_border_radius_tr,
		active: active_border_radius_tr,
		before: before_border_radius_tr,
		after: after_border_radius_tr
	},
	border_radius_br: {
		...border_radius_br,
		hover: hover_border_radius_br,
		focus: focus_border_radius_br,
		active: active_border_radius_br,
		before: before_border_radius_br,
		after: after_border_radius_br
	},
	border_radius_bl: {
		...border_radius_bl,
		hover: hover_border_radius_bl,
		focus: focus_border_radius_bl,
		active: active_border_radius_bl,
		before: before_border_radius_bl,
		after: after_border_radius_bl
	},
	outline_width: {
		...outline_width,
		hover: hover_outline_width,
		focus: focus_outline_width,
		focus_visible: focus_visible_outline_width,
		active: active_outline_width,
		before: before_outline_width,
		after: after_outline_width
	},
	outline_style: {
		...outline_style,
		hover: hover_outline_style,
		focus: focus_outline_style,
		focus_visible: focus_visible_outline_style,
		active: active_outline_style,
		before: before_outline_style,
		after: after_outline_style
	},
	outline_offset: {
		...outline_offset,
		hover: hover_outline_offset,
		focus: focus_outline_offset,
		focus_visible: focus_visible_outline_offset,
		active: active_outline_offset,
		before: before_outline_offset,
		after: after_outline_offset
	},
	outline_color: {
		...outline_color,
		hover: hover_outline_color,
		focus: focus_outline_color,
		focus_visible: focus_visible_outline_color,
		active: active_outline_color,
		before: before_outline_color,
		after: after_outline_color
	}
};
