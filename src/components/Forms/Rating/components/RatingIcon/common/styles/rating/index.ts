import { Style } from '../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../common/utils';
import { size as defaultSize } from '../../../../../common/default/props';
import { getSizeConfig } from '../../utils';

import { RatingIconStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, size = defaultSize }: RatingIconStyleProps): Style => {
	const config = getSizeConfig({ size });

	const padding = config.padding;
	const fontSize = config.fontSize;

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'pointer',

		'width': '100%',
		'height': 'auto',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'userSelect': 'none',

		'opacity': 1,

		'outline': !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'px': `${theme.space[padding.x]} !important`,
		'py': `${theme.space[padding.y]} !important`,

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'&:hover': {
			transform: 'scale(1.15)'
		},

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
			width: `${fontSize}px`,
			height: `${fontSize}px`,
			maxWidth: `${fontSize}px`,
			maxHeight: `${fontSize}px`,

			fontSize: `${fontSize}px`,

			userSelect: 'none',

			transition: transition,
			transitionProperty: transitionProperty,
			transitionDuration: transitionDuration,
			transitionTimingFunction: transitionTimingFunction
		},

		'*, *::before, *::after': {
			transition: transition,
			transitionProperty: transitionProperty,
			transitionDuration: transitionDuration,
			transitionTimingFunction: transitionTimingFunction
		}
	};
};
