import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { border } from '../../default/sizes';

import { InputGroupStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme }: InputGroupStyleProps): Style => {
	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'text',

		'userSelect': 'none',

		'opacity': 1,

		'outline': !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important',
		'borderStyle': 'solid',
		'borderWidth': `${border}px`,
		'borderRadius': theme.radii.base,

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'&:focus:not(:focus-visible)': {
			outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
		},

		'&:active': {
			outline: !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important'
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
