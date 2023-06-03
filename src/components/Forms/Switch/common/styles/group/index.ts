import { Style } from '../../../../../../common/types';

import { SwitchGroupStyleProps } from './types';

export default ({ theme }: SwitchGroupStyleProps): Style => {
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

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'& .chakra-switch': {
			cursor: 'pointer',

			width: 'auto',
			height: 'auto',

			userSelect: 'none',

			color: 'inherit !important',
			background: 'none !important',
			border: 'none !important',
			boxShadow: 'none !important',

			WebkitTapHighlightColor: theme.colors.transparent,

			p: 0,
			m: 0,

			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		},

		'& .chakra-switch__control': {
			cursor: 'pointer',

			width: 'auto',
			height: 'auto',

			userSelect: 'none',

			color: 'inherit !important',
			background: 'none !important',
			border: 'none !important',
			boxShadow: 'none !important',

			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
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