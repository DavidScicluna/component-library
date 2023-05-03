import { Style } from '../../../../../../common/types';
import { isClickable as defaultIsClickable, isFixed as defaultIsFixed } from '../../default/props';

import { CollapsibleCardStyleProps } from './types';

export default ({
	theme,
	isClickable = defaultIsClickable,
	isFixed = defaultIsFixed
}: CollapsibleCardStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': isClickable && !isFixed ? 'pointer' : 'default',

		'pointerEvents': 'auto',

		'position': 'relative',

		'display': 'inline-flex',

		'userSelect': 'none',
		'willChange': 'auto',

		'opacity': 1,

		'background': 'none',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		transition,
		transitionProperty,
		transitionDuration,
		transitionTimingFunction,

		'&:focus': {
			boxShadow: 'none'
		},

		'*, *::before, *::after': {
			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		}
	};
};
