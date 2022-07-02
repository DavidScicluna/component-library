import { DummyIconButtonStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { size as defaultSize } from '../../../../common/data/defaultPropValues';
import { getIconFontSize, getSizeConfig } from '../../../../common/utils';

export default ({ theme, size = defaultSize }: DummyIconButtonStyleProps): Style => {
	const config = getSizeConfig({ size });
	const width = config.width;
	const height = config.height;

	const fontSize = getIconFontSize({ size });

	const transition = 'none';
	const transitionProperty = transition;
	const transitionDuration = transition;
	const transitionTimingFunction = transition;

	return {
		'cursor': 'pointer',

		'pointerEvents': 'none',

		'position': 'relative',

		'width': `${width}px`,
		'height': `${height}px`,

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'display': 'inline-flex',
		'alignItems': 'center',
		'justifyContent': 'center',

		'userSelect': 'none',
		'willChange': 'auto',

		'opacity': 1,

		'background': 'none',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'transform': 'none',

		'p': `${theme.space[0]} !important`,

		'transition': transition,
		'transitionProperty': transitionProperty,
		'transitionDuration': transitionDuration,
		'transitionTimingFunction': transitionTimingFunction,

		'& .ds-cl-dummy-iconbutton-skeleton-icon, .ds-cl-icon': {
			width: fontSize,
			height: fontSize,
			maxWidth: fontSize,
			maxHeight: fontSize,

			fontSize: fontSize,

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
