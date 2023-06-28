import { Style } from '../../../../../../../../common/types';
import { mode as defaultMode } from '../../../../../common/data/defaultPropValues';
import { isActive as defaultIsActive } from '../../data/defaultPropValues';

import { NavItemStyleProps } from './types';

export default ({ theme, isActive = defaultIsActive, mode = defaultMode }: NavItemStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = ['width', 'min-width', 'max-width', 'height', 'padding', 'font-size'].join(', ');
	const transitionDuration = theme.transition.duration.slow;
	const transitionTimingFunction = theme.transition.easing['ease-in-out'];

	return {
		'cursor': !isActive ? 'pointer' : 'default',

		'pointerEvents': !isActive ? 'auto' : 'none',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'userSelect': 'none',
		'willChange': 'auto',

		'borderWidth': '2px',
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': 'base',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'px': theme.space[mode === 'expanded' ? 2 : 1],
		'py': theme.space[1],

		transition,
		transitionProperty,
		transitionDuration,
		transitionTimingFunction,

		'&:focus': { boxShadow: 'none' },

		'*, *::before, *::after': {
			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		}
	};
};
