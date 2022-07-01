import { ButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { Radius } from '../../../../../../../theme/types';
import { isFullWidth as defaultIsFullWidth, size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../common/utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, isFullWidth = defaultIsFullWidth, size = defaultSize }: ButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const height = config.height;
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

		'fontSize': theme.fontSizes[size],
		'fontWeight': theme.fontWeights.semibold,
		'textTransform': 'uppercase',
		'whiteSpace': 'nowrap',
		'textOverflow': 'ellipses',
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
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'&:focus': {
			boxShadow: 'none',
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'&:active': {
			outline: !isTouchDevice ? '0px transparent' : 'none !important'
		},

		'& svg, .ds-cl-icon': {
			width: theme.fontSizes[size],
			height: theme.fontSizes[size],
			maxWidth: theme.fontSizes[size],
			maxHeight: theme.fontSizes[size],

			fontSize: theme.fontSizes[size],

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
