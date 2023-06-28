import { Style } from '../../../../../../../../../../../common/types';
import { isFitted as defaultIsFitted, size as defaultSize } from '../../../../../../../../common/default/props';

import { DummyTabStyleProps } from './types';

export default ({ theme, isFullWidth = defaultIsFitted, size = defaultSize }: DummyTabStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'not-allowed',

		'position': 'relative',

		'width': isFullWidth ? '100%' : 'auto',
		'height': '100%',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'display': 'flex',
		'alignItems': 'stretch',
		'justifyContent': 'stretch',

		'pointerEvents': 'none',

		'userSelect': 'none',
		'willChange': 'auto',

		'opacity': 1,

		'fontSize': theme.fontSizes[size],
		'fontWeight': theme.fontWeights.semibold,
		'textTransform': 'uppercase',
		'whiteSpace': 'nowrap',
		'textOverflow': 'ellipses',
		'lineHeight': theme.lineHeights.normal,
		'letterSpacing': '.6px',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'p': 0,
		'm': 0,

		transition,
		transitionProperty,
		transitionDuration,
		transitionTimingFunction,

		'& .ds-cl-dummytabs-dummytab-stack': { opacity: 0.5 },

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
