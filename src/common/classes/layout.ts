import type { PositionObj, ZIndexObj } from '@common/types/classes';
import type { BreakpointsObj } from '@common/types/theme';

const container: BreakpointsObj = {
	'xs': 'max-w-screen-xs',
	'sm': 'max-w-screen-sm',
	'md': 'max-w-screen-md',
	'lg': 'max-w-screen-lg',
	'xl': 'max-w-screen-xl',
	'2xl': 'max-w-screen-2xl'
};

const position: PositionObj = {
	static: 'static',
	fixed: 'fixed',
	absolute: 'absolute',
	relative: 'relative',
	sticky: 'sticky'
};

const before_position: PositionObj = {
	static: 'before:static',
	fixed: 'before:fixed',
	absolute: 'before:absolute',
	relative: 'before:relative',
	sticky: 'before:sticky'
};

const after_position: PositionObj = {
	static: 'after:static',
	fixed: 'after:fixed',
	absolute: 'after:absolute',
	relative: 'after:relative',
	sticky: 'after:sticky'
};

const z_index: ZIndexObj = {
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
	container,
	position: { ...position, before: before_position, after: after_position },
	z_index
};
