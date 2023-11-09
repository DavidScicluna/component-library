import theme from '@common/theme';

import type { TransitionVariants } from '../types';

const transitions: TransitionVariants = {
	'fade': {
		enter: {
			opacity: 1,
			transitionProperty: 'opacity'
		},
		exit: {
			opacity: 0,
			transitionProperty: 'opacity'
		}
	},

	'collapse': {
		enter: {
			height: '100%',
			opacity: 1,
			transitionProperty: 'height, opacity'
		},
		exit: {
			height: 0,
			opacity: 0,
			transitionProperty: 'height, opacity'
		}
	},

	'scale': {
		enter: {
			opacity: 1,
			transform: 'scale(1)',
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: 'scale(0)',
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		}
	},

	'scale-y': {
		enter: {
			opacity: 1,
			transform: 'scaleY(1)',
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: 'scaleY(0)',
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		}
	},

	'scale-x': {
		enter: {
			opacity: 1,
			transform: 'scaleX(1)',
			transformOrigin: 'left',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: 'scaleX(0)',
			transformOrigin: 'left',
			transitionProperty: 'transform, opacity'
		}
	},

	'skew-up': {
		enter: {
			opacity: 1,
			transform: 'translateY(0) skew(0deg, 0deg)',
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: `translateY(-${theme.spacing[2]}) skew(-10deg, -5deg)`,
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		}
	},

	'skew-down': {
		enter: {
			opacity: 1,
			transform: 'translateY(0) skew(0deg, 0deg)',
			transformOrigin: 'bottom',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: `translateY(${theme.spacing[2]}) skew(-10deg, -5deg)`,
			transformOrigin: 'bottom',
			transitionProperty: 'transform, opacity'
		}
	},

	'rotate-left': {
		enter: {
			opacity: 1,
			transform: 'translateY(0) rotate(0deg)',
			transformOrigin: 'bottom',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: `translateY(${theme.spacing[2]}) rotate(-5deg)`,
			transformOrigin: 'bottom',
			transitionProperty: 'transform, opacity'
		}
	},

	'rotate-right': {
		enter: {
			opacity: 1,
			transform: 'translateY(0) rotate(0deg)',
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: `translateY(${theme.spacing[2]}) rotate(5deg)`,
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		}
	},

	'slide-down': {
		enter: {
			opacity: 1,
			transform: 'translateY(0)',
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: 'translateY(-100%)',
			transformOrigin: 'top',
			transitionProperty: 'transform, opacity'
		}
	},

	'slide-up': {
		enter: {
			opacity: 1,
			transform: 'translateY(0)',
			transformOrigin: 'bottom',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: 'translateY(100%)',
			transformOrigin: 'bottom',
			transitionProperty: 'transform, opacity'
		}
	},

	'slide-left': {
		enter: {
			opacity: 1,
			transform: 'translateX(0)',
			transformOrigin: 'left',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: 'translateX(100%)',
			transformOrigin: 'left',
			transitionProperty: 'transform, opacity'
		}
	},

	'slide-right': {
		enter: {
			opacity: 1,
			transform: 'translateX(0)',
			transformOrigin: 'right',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: 'translateX(-100%)',
			transformOrigin: 'right',
			transitionProperty: 'transform, opacity'
		}
	},

	'pop': {
		enter: {
			opacity: 1,
			transform: 'scale(1)',
			transformOrigin: 'center center',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(${theme.spacing[1]})`,
			transformOrigin: 'center center',
			transitionProperty: 'transform, opacity'
		}
	},

	'pop-bottom-left': {
		enter: {
			opacity: 1,
			transform: 'scale(1)',
			transformOrigin: 'bottom left',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(${theme.spacing[1]})`,
			transformOrigin: 'bottom left',
			transitionProperty: 'transform, opacity'
		}
	},

	'pop-bottom-right': {
		enter: {
			opacity: 1,
			transform: 'scale(1)',
			transformOrigin: 'bottom right',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(${theme.spacing[1]})`,
			transformOrigin: 'bottom right',
			transitionProperty: 'transform, opacity'
		}
	},

	'pop-top-left': {
		enter: {
			opacity: 1,
			transform: 'scale(1)',
			transformOrigin: 'top left',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(-${theme.spacing[1]})`,
			transformOrigin: 'top left',
			transitionProperty: 'transform, opacity'
		}
	},

	'pop-top-right': {
		enter: {
			opacity: 1,
			transform: 'scale(1)',
			transformOrigin: 'top right',
			transitionProperty: 'transform, opacity'
		},
		exit: {
			opacity: 0,
			transform: `scale(.9) translateY(-${theme.spacing[1]})`,
			transformOrigin: 'top right',
			transitionProperty: 'transform, opacity'
		}
	}
};

export default transitions;
