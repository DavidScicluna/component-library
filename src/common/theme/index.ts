import { range } from 'lodash-es';

import { ColorsObj, DurationsObj, EasingsObj, RadiiObj, SpacingObj } from '../types/theme';

const borderRadius: RadiiObj = {
	none: '0',
	xs: '5px',
	sm: '7.5px',
	base: '10px',
	lg: '15px',
	xl: '20px',
	full: '9999px'
};

const colors: ColorsObj = {
	transparent: 'transparent',
	black: '#000000',
	white: '#FFFFFF',
	gray: {
		50: '#f8fafc',
		100: '#f1f5f9',
		200: '#e2e8f0',
		300: '#cbd5e1',
		400: '#94a3b8',
		500: '#64748b',
		600: '#475569',
		700: '#334155',
		800: '#1e293b',
		900: '#0f172a',
		950: '#020617'
	},
	red: {
		50: '#fef3f2',
		100: '#ffe3e1',
		200: '#ffccc8',
		300: '#ffa8a2',
		400: '#fc776d',
		500: '#f44336',
		600: '#e22d20',
		700: '#be2217',
		800: '#9d2017',
		900: '#82211a',
		950: '#470c08'
	},
	pink: {
		50: '#fff1f4',
		100: '#ffe3e8',
		200: '#ffcbd8',
		300: '#ffa1b8',
		400: '#ff6d94',
		500: '#fa3971',
		600: '#e91e63',
		700: '#c40c4f',
		800: '#a40d49',
		900: '#8c0f45',
		950: '#4e0321'
	},
	purple: {
		50: '#fcf5fe',
		100: '#f8e9fe',
		200: '#f1d3fb',
		300: '#e9b0f7',
		400: '#dc81f1',
		500: '#c850e5',
		600: '#af30c9',
		700: '#9c27b0',
		800: '#7a2088',
		900: '#661f70',
		950: '#42084a'
	},
	deep_purple: {
		50: '#f0effe',
		100: '#e4e2fd',
		200: '#cecafb',
		300: '#b3aaf7',
		400: '#9b87f2',
		500: '#8b6aea',
		600: '#7f4edd',
		700: '#673ab7',
		800: '#59369d',
		900: '#4a327d',
		950: '#2c1e48'
	},
	indigo: {
		50: '#f2f5fc',
		100: '#e1e8f8',
		200: '#cbd8f2',
		300: '#a6bfea',
		400: '#7c9dde',
		500: '#5d7dd4',
		600: '#4963c7',
		700: '#3f51b5',
		800: '#394494',
		900: '#323d76',
		950: '#222749'
	},
	blue: {
		50: '#eefaff',
		100: '#daf3ff',
		200: '#bdebff',
		300: '#8fe0ff',
		400: '#5accff',
		500: '#34b1fd',
		600: '#2196f3',
		700: '#167bdf',
		800: '#1863b5',
		900: '#1a548e',
		950: '#153456'
	},
	light_blue: {
		50: '#eff9ff',
		100: '#def2ff',
		200: '#b7e7ff',
		300: '#77d5ff',
		400: '#2ec1ff',
		500: '#03a9f4',
		600: '#0087d1',
		700: '#006ba9',
		800: '#015b8b',
		900: '#074b73',
		950: '#05304c'
	},
	cyan: {
		50: '#ebffff',
		100: '#cefdff',
		200: '#a2f8ff',
		300: '#63f0fd',
		400: '#1cdef4',
		500: '#00bcd4',
		600: '#039ab7',
		700: '#0a7a94',
		800: '#126278',
		900: '#145265',
		950: '#063646'
	},
	teal: {
		50: '#effefb',
		100: '#c7fff4',
		200: '#90ffe9',
		300: '#51f7dc',
		400: '#1de4ca',
		500: '#04c8b1',
		600: '#009688',
		700: '#058075',
		800: '#0a655f',
		900: '#0d544f',
		950: '#003332'
	},
	green: {
		50: '#f3faf3',
		100: '#e3f5e3',
		200: '#c8eac9',
		300: '#9dd89f',
		400: '#6bbd6e',
		500: '#4caf50',
		600: '#358438',
		700: '#2d6830',
		800: '#275429',
		900: '#224525',
		950: '#0e2510'
	},
	light_green: {
		50: '#f4faeb',
		100: '#e6f3d4',
		200: '#cfe9ad',
		300: '#afd97d',
		400: '#8bc34a',
		500: '#73ac36',
		600: '#588828',
		700: '#446922',
		800: '#395420',
		900: '#32481f',
		950: '#18270c'
	},
	lime: {
		50: '#fdfde8',
		100: '#f7f9ce',
		200: '#eff4a2',
		300: '#e1eb6b',
		400: '#cddc39',
		500: '#b1c31f',
		600: '#8a9b15',
		700: '#687615',
		800: '#535e16',
		900: '#465017',
		950: '#252c07'
	},
	yellow: {
		50: '#ffffea',
		100: '#fffbc5',
		200: '#fff885',
		300: '#ffee46',
		400: '#ffdf1b',
		500: '#ffc107',
		600: '#e29400',
		700: '#bb6902',
		800: '#985108',
		900: '#7c420b',
		950: '#482200'
	},
	orange: {
		50: '#fffbea',
		100: '#fff2c5',
		200: '#ffe585',
		300: '#ffd146',
		400: '#ffbc1b',
		500: '#ff9800',
		600: '#e27100',
		700: '#bb4c02',
		800: '#983a08',
		900: '#7c300b',
		950: '#481700'
	},
	deep_orange: {
		50: '#fff4ed',
		100: '#ffe6d4',
		200: '#ffc8a8',
		300: '#ffa270',
		400: '#ff6f37',
		500: '#ff5722',
		600: '#f02e06',
		700: '#c71e07',
		800: '#9e1a0e',
		900: '#7f190f',
		950: '#450805'
	}
};

const transitionTimingFunction: EasingsObj = {
	'ease-in': 'cubic-bezier(0.55,0.06,0.68,0.19)',
	'ease-out': 'cubic-bezier(0.22,0.61,0.36,1)',
	'ease-in-out': 'cubic-bezier(0.65,0.05,0.36,1)'
};

const transitionDuration: DurationsObj = {
	'ultra-fast': '50ms',
	'faster': '100ms',
	'fast': '200ms',
	'normal': '250ms',
	'slow': '500ms',
	'slower': '750ms',
	'ultra-slow': '1000ms'
};

const spacing: SpacingObj = range(0, 100, 0.25)
	.map((num) => ({ key: num, value: `${(1 / 16) * (num * 8)}rem` }))
	.reduce((obj, item) => ({ ...obj, [item.key || 0]: item.value }), {}) as SpacingObj;

export default {
	borderRadius,
	colors,
	fontFamily: {
		sans: ['Work Sans', 'sans-serif'],
		serif: ['Roboto Slab', 'serif'],
		monospace: ['Roboto Mono', 'monospace']
	},
	transitionTimingFunction,
	transitionDuration,
	transitionProperty: {
		common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
		colors: 'background-color, border-color, color, fill, stroke',
		dimensions: 'width, height',
		position: 'left, right, top, bottom',
		background: 'background-color, background-image, background-position'
	},
	spacing
};