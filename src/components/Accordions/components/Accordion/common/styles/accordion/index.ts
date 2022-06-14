import { AccordionStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { Radius } from '../../../../../../../theme/types';
import { isFullWidth as defaultIsFullWidth } from '../../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, isFullWidth = defaultIsFullWidth }: AccordionStyleProps): Style => {
	const config = getSizeConfig();
	const transform = config.transform;
	const border = config.border;

	const radius: Radius = 'lg';

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'pointer',

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

		'outline': !isTouchDevice ? '0px auto' : 'none !important',

		'background': 'none',
		'borderBottomWidth': `${transform}px`,
		'borderStyle': 'solid',
		'borderColor': theme.colors.transparent,
		'borderRadius': theme.radii[radius],

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

			borderTopWidth: `${border}px`,
			borderLeftWidth: `${border}px`,
			borderRightWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent,
			borderRadius: theme.radii[radius],

			transition,
			transitionProperty,
			transitionDuration,
			transitionTimingFunction
		},

		'&:focus:not(:focus-visible)': {
			outline: !isTouchDevice ? '0px auto' : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? '0px auto' : 'none !important'
		},

		'&:active': {
			outline: !isTouchDevice ? '0px auto' : 'none !important',

			borderTopWidth: `${border}px`,
			borderBottomWidth: `${border}px`,
			borderStyle: 'solid',
			borderColor: theme.colors.transparent
		},

		'*, *::before, *::after': {
			transition: transition,
			transitionDuration: transition,
			transitionTimingFunction: transition
		}
	};
};
