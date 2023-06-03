import { Style } from '../../../../../../common/types';
import { isClickable as defaultIsClickable, isFullWidth as defaultIsFullWidth } from '../../default/props';

import { BadgeStyleProps } from './types';

export default ({
	theme,
	isClickable = defaultIsClickable,
	isFullWidth = defaultIsFullWidth
}: BadgeStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': isClickable ? 'pointer' : 'default',

		'width': isFullWidth ? '100%' : 'auto',
		'height': 'auto',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'userSelect': 'none',
		'willChange': 'auto',

		'pointerEvents': isClickable ? 'auto' : 'none',

		'opacity': 1,

		'background': 'none',
		'border': 'none',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'p': 0,
		'm': 0,

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'&:focus': {
			boxShadow: 'none'
		},

		'& svg, .ds-cl-icon': {
			userSelect: 'none',

			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		},

		'*, *::before, *::after': {
			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		}
	};
};
