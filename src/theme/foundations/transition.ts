import { Durations, Easings, Transition } from '../types';

const easings: Easings = {
	'ease-in': 'cubic-bezier(0.5, 0, 0.75, 0)',
	'ease-out': 'cubic-bezier(0.25, 1, 0.5, 1)',
	'ease-in-out': 'cubic-bezier(0.76, 0, 0.24, 1)'
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
