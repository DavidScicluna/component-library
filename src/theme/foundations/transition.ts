import { Durations, Easings, Transition } from '../types';

const easings: Easings = {
	'ease-in': 'cubic-bezier(0.55,0.06,0.68,0.19)',
	'ease-out': 'cubic-bezier(0.22,0.61,0.36,1)',
	'ease-in-out': 'cubic-bezier(0.65,0.05,0.36,1)'
};

const durations: Durations = {
	'ultra-fast': '50ms',
	'faster': '100ms',
	'fast': '200ms',
	'normal': '250ms',
	'slow': '500ms',
	'slower': '750ms',
	'ultra-slow': '1000ms'
};

const transition: Transition = { easing: easings, duration: durations };

export default transition;
