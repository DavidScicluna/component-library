import type { MaxHeightObj, MaxWidthObj, MinHeightObj, MinWidthObj, ZIndexObj } from '@common/types/classes';
import type { BreakpointsObj } from '@common/types/theme';

const minWidth: MinWidthObj = {
	0: 'min-w-0',
	full: 'min-w-full',
	min: 'min-w-min',
	max: 'min-w-max',
	fit: 'min-w-fit'
};

const maxWidth: MaxWidthObj = {
	0: 'max-w-0',
	'full': 'max-w-full',
	'min': 'max-w-min',
	'max': 'max-w-max',
	'fit': 'max-w-fit',
	'none': 'max-w-none',
	'xs': 'max-w-xs',
	'sm': 'max-w-sm',
	'md': 'max-w-md',
	'lg': 'max-w-lg',
	'xl': 'max-w-xl',
	'2xl': 'max-w-2xl',
	'3xl': 'max-w-3xl',
	'4xl': 'max-w-4xl',
	'5xl': 'max-w-5xl',
	'6xl': 'max-w-6xl',
	'7xl': 'max-w-7xl',
	'prose': 'max-w-prose'
};

const maxWidthContainer: BreakpointsObj = {
	'xs': 'max-w-screen-xs',
	'sm': 'max-w-screen-sm',
	'md': 'max-w-screen-md',
	'lg': 'max-w-screen-lg',
	'xl': 'max-w-screen-xl',
	'2xl': 'max-w-screen-2xl'
};

const minHeight: MinHeightObj = {
	0: 'min-h-0',
	full: 'min-h-full',
	screen: 'min-h-screen',
	min: 'min-h-min',
	max: 'min-h-max',
	fit: 'min-h-fit'
};

const maxHeight: MaxHeightObj = {
	0: 'max-h-0',
	none: 'max-h-none',
	full: 'max-h-full',
	screen: 'max-h-screen',
	min: 'max-h-min',
	max: 'max-h-max',
	fit: 'max-h-fit'
};

const zIndex: ZIndexObj = {
	0: 'z-0',
	1: 'z-1',
	2: 'z-2',
	3: 'z-3',
	4: 'z-4',
	5: 'z-5',
	6: 'z-6',
	7: 'z-7',
	8: 'z-8',
	9: 'z-9',
	10: 'z-10',
	11: 'z-11',
	12: 'z-12',
	13: 'z-13',
	14: 'z-14',
	15: 'z-15',
	16: 'z-16',
	17: 'z-17',
	18: 'z-18',
	19: 'z-19',
	20: 'z-20',
	21: 'z-21',
	22: 'z-22',
	23: 'z-23',
	24: 'z-24',
	25: 'z-25',
	30: 'z-30',
	40: 'z-40',
	50: 'z-50',
	75: 'z-75',
	100: 'z-100',
	250: 'z-250',
	500: 'z-500',
	1000: 'z-1000',
	dropdown: 'z-dropdown',
	sticky: 'z-sticky',
	banner: 'z-banner',
	overlay: 'z-overlay',
	modal: 'z-modal',
	popover: 'z-popover',
	skipLink: 'z-skipLink',
	toast: 'z-toast',
	tooltip: 'z-tooltip',
	auto: 'z-auto'
};

export default {
	minWidth,
	maxWidth,
	maxWidthContainer,
	minHeight,
	maxHeight,
	zIndex
};
