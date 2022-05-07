import { IconButtonStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { Radius } from '../../../../../../theme/types';
import { isRound as defaultIsRound, size as defaultSize } from '../../data/defaultPropValues';
import { getIconFontSize, getSizeConfig } from '../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, isRound = defaultIsRound, size = defaultSize }: IconButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const width = config.width;
	const height = config.height;
	const padding = config.padding;

	const fontSize = getIconFontSize({ size });

	const radius: Radius = isRound
		? 'full'
		: size === 'xs' || size === 'sm'
		? 'xs'
		: size === 'lg' || size === 'xl'
		? 'lg'
		: 'base';

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'pointer',

		'position': 'relative',

		'width': `${width}px`,
		'height': `${height}px`,

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
		'borderRadius': theme.radii[radius],

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'p': `${theme.space[padding]} !important`,

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
			outline: !isTouchDevice ? '0px auto' : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? '0px auto' : 'none !important'
		},

		'&:active': {
			outline: !isTouchDevice ? '0px auto' : 'none !important'
		},

		'& svg, .ds-cl-icon': {
			width: fontSize,
			height: fontSize,
			maxWidth: fontSize,
			maxHeight: fontSize,

			fontSize: fontSize,

			userSelect: 'none',

			transition: transition,
			transitionDuration: transition,
			transitionTimingFunction: transition
		},

		'*, *::before, *::after': {
			transition: transition,
			transitionDuration: transition,
			transitionTimingFunction: transition
		}
	};
};
