import { Style } from '../../../../../../common/types';
import {
	isCompact as defaultIsCompact,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize
} from '../../default/props';
import { getSizeConfig } from '../../utils';

import { ButtonStyleProps } from './types';

export default ({
	theme,
	isCompact = defaultIsCompact,
	isFullWidth = defaultIsFullWidth,
	size = defaultSize
}: ButtonStyleProps): Style => {
	const config = getSizeConfig({ isCompact, size });
	const fontSize = config.fontSize;

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'pointer',

		'width': isFullWidth ? '100%' : 'auto',
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

		'fontSize': theme.fontSizes[fontSize],
		'fontWeight': theme.fontWeights.semibold,
		'textTransform': 'uppercase',
		'whiteSpace': 'nowrap',
		'textOverflow': 'ellipses',
		'lineHeight': theme.lineHeights.shorter,
		'letterSpacing': '.6px',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

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
