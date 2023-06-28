import { Style } from '../../../../../../../../common/types';

import { RatingIconStyleProps } from './types';

export default ({ theme }: RatingIconStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'pointer',

		'width': 'auto',
		'height': 'auto',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'userSelect': 'none',
		'willChange': 'auto',

		'pointerEvents': 'auto',

		'opacity': 1,

		'background': 'none',
		'border': 'none',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		transition,
		transitionProperty,
		transitionDuration,
		transitionTimingFunction,

		'&:hover': {
			transform: 'scale(1.15)'
		},

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
