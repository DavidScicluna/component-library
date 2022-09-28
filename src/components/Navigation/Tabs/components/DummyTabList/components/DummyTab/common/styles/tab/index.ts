import { Style } from '../../../../../../../../../../common/types';
import { Radius } from '../../../../../../../../../../theme/types';
import { isFitted as defaultIsFitted, size as defaultSize } from '../../../../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../../../../common/utils';

import { DummyTabStyleProps } from './types';

export default ({ theme, isFullWidth = defaultIsFitted, size = defaultSize }: DummyTabStyleProps): Style => {
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
		'cursor': 'not-allowed',

		'position': 'relative',

		'pointerEvents': 'none',

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

		'& .ds-cl-tabs-dummy-tab-stack': { opacity: 0.5 },

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
