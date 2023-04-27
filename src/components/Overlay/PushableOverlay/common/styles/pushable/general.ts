import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { borderRadius as defaultBorderRadius } from '../../default/props';
import { border } from '../../default/sizes';

import { PushableOverlayStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, borderRadius = defaultBorderRadius }: PushableOverlayStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'pointer',

		'position': 'relative',

		'userSelect': 'none',
		'willChange': 'auto',

		'pointerEvents': 'auto',

		'opacity': 1,

		'outline': !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important',

		'background': 'none',
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[borderRadius],

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'&::before': {
			content: '""',

			position: 'absolute',

			top: 0,
			bottom: 0,
			left: 0,
			right: 0,

			zIndex: 1,

			borderWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[borderRadius],

			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		},

		'&:active': {
			outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		},

		'&:focus:not(:focus-visible)': {
			outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		}
	};
};
