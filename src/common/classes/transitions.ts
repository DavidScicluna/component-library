import type { ThemeDelayObj, ThemeDurationObj, ThemeEaseObj } from '@common/types';

const ease: ThemeEaseObj = {
	'linear': 'ease-linear',
	'ease-in': 'ease-in',
	'ease-out': 'ease-out',
	'ease-in-out': 'ease-in-out'
};

const delay: ThemeDelayObj = {
	'ultra-fast': 'delay-ultra-fast',
	'faster': 'delay-faster',
	'fast': 'delay-fast',
	'normal': 'delay-normal',
	'slow': 'delay-slow',
	'slower': 'delay-slower',
	'ultra-slow': 'delay-ultra-slow'
};

const duration: ThemeDurationObj = {
	'ultra-fast': 'duration-ultra-fast',
	'faster': 'duration-faster',
	'fast': 'duration-fast',
	'normal': 'duration-normal',
	'slow': 'duration-slow',
	'slower': 'duration-slower',
	'ultra-slow': 'duration-ultra-slow'
};

export default { ease, delay, duration };
