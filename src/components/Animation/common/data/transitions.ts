import { convertPixelsToREM } from '../../../../common/utils';
import { Transitions } from '../types';

const transitions: Transitions = {
	'fade': {
		enter: { opacity: 1 },
		exit: { opacity: 0 }
	},

	'scale': {
		enter: { opacity: 1, transform: 'scale(1)', transformOrigin: 'top' },
		exit: { opacity: 0, transform: 'scale(0)', transformOrigin: 'top' }
	},

	'scale-y': {
		enter: { opacity: 1, transform: 'scaleY(1)', transformOrigin: 'top' },
		exit: { opacity: 0, transform: 'scaleY(0)', transformOrigin: 'top' }
	},

	'scale-x': {
		enter: { opacity: 1, transform: 'scaleX(1)', transformOrigin: 'left' },
		exit: { opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left' }
	},

	'skew-up': {
		enter: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)', transformOrigin: 'top' },
		exit: {
			opacity: 0,
			transform: `translateY(-${convertPixelsToREM(20)}rem) skew(-10deg, -5deg)`,
			transformOrigin: 'top'
		}
	},

	'skew-down': {
		enter: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)', transformOrigin: 'bottom' },
		exit: {
			opacity: 0,
			transform: `translateY(${convertPixelsToREM(20)}rem) skew(-10deg, -5deg)`,
			transformOrigin: 'bottom'
		}
	},

	'rotate-left': {
		enter: { opacity: 1, transform: 'translateY(0) rotate(0deg)', transformOrigin: 'bottom' },
		exit: {
			opacity: 0,
			transform: `translateY(${convertPixelsToREM(20)}rem) rotate(-5deg)`,
			transformOrigin: 'bottom'
		}
	},

	'rotate-right': {
		enter: { opacity: 1, transform: 'translateY(0) rotate(0deg)', transformOrigin: 'top' },
		exit: { opacity: 0, transform: `translateY(${convertPixelsToREM(20)}rem) rotate(5deg)`, transformOrigin: 'top' }
	},

	'slide-down': {
		enter: { opacity: 1, transform: 'translateY(0)', transformOrigin: 'top' },
		exit: { opacity: 0, transform: 'translateY(-100%)', transformOrigin: 'top' }
	},

	'slide-up': {
		enter: { opacity: 1, transform: 'translateY(0)', transformOrigin: 'bottom' },
		exit: { opacity: 0, transform: 'translateY(100%)', transformOrigin: 'bottom' }
	},

	'slide-left': {
		enter: { opacity: 1, transform: 'translateX(0)', transformOrigin: 'left' },
		exit: { opacity: 0, transform: 'translateX(100%)', transformOrigin: 'left' }
	},

	'slide-right': {
		enter: { opacity: 1, transform: 'translateX(0)', transformOrigin: 'right' },
		exit: { opacity: 0, transform: 'translateX(-100%)', transformOrigin: 'right' }
	},

	'pop': {
		enter: { opacity: 1, transform: 'scale(1)', transformOrigin: 'center center' },
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(${convertPixelsToREM(10)}rem)`,
			transformOrigin: 'center center'
		}
	},

	'pop-bottom-left': {
		enter: { opacity: 1, transform: 'scale(1)', transformOrigin: 'bottom left' },
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(${convertPixelsToREM(10)}rem)`,
			transformOrigin: 'bottom left'
		}
	},

	'pop-bottom-right': {
		enter: { opacity: 1, transform: 'scale(1)', transformOrigin: 'bottom right' },
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(${convertPixelsToREM(10)}rem)`,
			transformOrigin: 'bottom right'
		}
	},

	'pop-top-left': {
		enter: { opacity: 1, transform: 'scale(1)', transformOrigin: 'top left' },
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(${convertPixelsToREM(10)}rem)`,
			transformOrigin: 'top left'
		}
	},

	'pop-top-right': {
		enter: { opacity: 1, transform: 'scale(1)', transformOrigin: 'top right' },
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(${convertPixelsToREM(10)}rem)`,
			transformOrigin: 'top right'
		}
	}
};

export default transitions;
