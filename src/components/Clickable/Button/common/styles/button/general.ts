import { ButtonStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { Radius } from '../../../../../../theme/types';
import { isFullWidth as defaultIsFullWidth, size as defaultSize } from '../../data/defaultPropValues';
import { getIconFontSize, getSizeConfig } from '../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, isFullWidth = defaultIsFullWidth, size = defaultSize }: ButtonStyleProps): Style => {
	const iconFontSize = getIconFontSize({ size });

	const config = getSizeConfig({ size });
	const padding = config.padding;

	const radius: Radius = size === 'xs' || size === 'sm' ? 'xs' : size === 'lg' || size === 'xl' ? 'lg' : 'base';

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'pointer',

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
		'borderRadius': theme.radii[radius],

		'fontSize': theme.fontSizes[size],
		'fontWeight': theme.fontWeights.semibold,
		'textTransform': 'uppercase',
		'whiteSpace': 'nowrap',
		'lineHeight': theme.lineHeights.base,
		'letterSpacing': '.6px',

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
			width: iconFontSize,
			height: iconFontSize,
			maxWidth: iconFontSize,
			maxHeight: iconFontSize,

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
