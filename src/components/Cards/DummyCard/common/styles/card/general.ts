import { DummyCardStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { Radius } from '../../../../../../theme/types';
import { isFullWidth as defaultIsFullWidth } from '../../../../common/data/defaultPropValues';

export default ({ theme, isFullWidth = defaultIsFullWidth }: DummyCardStyleProps): Style => {
	const radius: Radius = 'lg';

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'not-allowed',
		'pointerEvents': 'none',

		'position': 'relative',

		'width': isFullWidth ? '100%' : 'auto',
		'height': 'auto',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'display': 'inline-flex',

		'userSelect': 'none',
		'willChange': 'auto',

		'opacity': 0.5,

		'background': 'none',
		'borderRadius': theme.radii[radius],

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'*, *::before, *::after': {
			transition: transition,
			transitionDuration: transition,
			transitionTimingFunction: transition
		}
	};
};
