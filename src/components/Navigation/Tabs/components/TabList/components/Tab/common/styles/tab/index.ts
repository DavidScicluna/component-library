import { Style } from '../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../common/utils';
import { Radius } from '../../../../../../../../../../theme/types';
import { isFitted as defaultIsFitted, size as defaultSize } from '../../../../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { TabStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, isFullWidth = defaultIsFitted, size = defaultSize }: TabStyleProps): Style => {
	const config = getSizeConfig({ size });
	const height = config.height;
	const padding = config.padding;
	const border = config.border;

	const radius: Radius = 'none';

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

		'outline': !isTouchDevice ? `0px ${theme.colors.transparent}` : 'none !important',

		'borderBottomWidth': `${border}px`,
		'borderStyle': 'solid',
		'borderRadius': theme.radii[radius],

		'fontSize': theme.fontSizes[size],
		'fontWeight': theme.fontWeights.semibold,
		'textTransform': 'uppercase',
		'whiteSpace': 'nowrap',
		'textOverflow': 'ellipses',
		'lineHeight': theme.lineHeights.normal,
		'letterSpacing': '.6px',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'px': `${theme.space[padding.x]} !important`,
		'py': `${theme.space[padding.y]} !important`,

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'& .ds-cl-tabs-tab-stack': { opacity: 1 },

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
