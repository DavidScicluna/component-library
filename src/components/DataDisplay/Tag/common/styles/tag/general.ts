import { TagStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { Radius } from '../../../../../../theme/types';
import {
	isFullWidth as defaultIsFullWidth,
	isClickable as defaultIsClickable,
	size as defaultSize
} from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	isFullWidth = defaultIsFullWidth,
	isClickable = defaultIsClickable,
	size = defaultSize
}: TagStyleProps): Style => {
	const config = getSizeConfig({ size });
	const height = config.height;
	const padding = config.padding;

	const radius: Radius = 'full';

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': isClickable ? 'pointer' : 'default',

		'pointerEvents': isClickable ? 'auto' : 'none',

		'position': 'relative',

		'width': isFullWidth ? '100%' : 'auto',
		'height': `${height}px`,

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'display': 'inline-flex',

		'userSelect': 'none',
		'willChange': 'auto',

		'opacity': 1,

		'outline': !isTouchDevice ? '0px transparent' : 'none !important',

		'background': 'none',
		'borderRadius': theme.radii[radius],

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'px': `${theme.space[padding.x]} !important`,
		'py': `${theme.space[padding.y]} !important`,

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

			borderRadius: theme.radii[radius],

			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		},

		'&:focus:not(:focus-visible)': {
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'&:active': {
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'*, *::before, *::after': {
			transition: transition,
			transitionDuration: transition,
			transitionTimingFunction: transition
		}
	};
};
