import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { isFullWidth as defaultIsFullWidth } from '../../../../common/data/defaultPropValues';
import { isClickable as defaultIsClickable, isFixed as defaultIsFixed } from '../../data/defaultPropValues';

import { CardStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	isClickable = defaultIsClickable,
	isFullWidth = defaultIsFullWidth,
	isFixed = defaultIsFixed
}: CardStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': isClickable && !isFixed ? 'pointer' : 'default',

		'pointerEvents': 'auto',

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

		'opacity': 1,

		'outline': isClickable && !isFixed && !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important',

		'background': 'none',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'&::before': {
			content: '""',

			zIndex: 0,

			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,

			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		},

		'&:focus:not(:focus-visible)': {
			outline: isClickable && !isFixed && !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: isClickable && !isFixed && !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		},

		'&:active': {
			outline: isClickable && !isFixed && !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		},

		'*, *::before, *::after': {
			transition: transition,
			transitionDuration: transition,
			transitionTimingFunction: transition
		}
	};
};
