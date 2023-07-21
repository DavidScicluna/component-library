import { TRANSITION_VARIANTS } from '../constants';
import { SlideDirection } from '../types';

export function getSlideTransition(options?: { direction?: SlideDirection }) {
	const side = options?.direction ?? 'right';
	switch (side) {
		case 'right':
			return TRANSITION_VARIANTS.slideRight;
		case 'left':
			return TRANSITION_VARIANTS.slideLeft;
		case 'bottom':
			return TRANSITION_VARIANTS.slideDown;
		case 'top':
			return TRANSITION_VARIANTS.slideUp;
		default:
			return TRANSITION_VARIANTS.slideRight;
	}
}
