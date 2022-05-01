import { IconButtonStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { getIconFontSize, getSizeConfig } from '../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, size = 'md' }: IconButtonStyleProps): Style => {
	const iconFontSize = getIconFontSize({ size });

	const config = getSizeConfig({ size });
	const padding = config.padding;

	const transition = 'none';

	return {
		'cursor': 'pointer',

		'position': 'relative',

		'width': 'auto',
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

		'fontSize': theme.fontSizes[size],
		'fontWeight': 'semibold',
		'textTransform': 'uppercase',
		'whiteSpace': 'nowrap',
		'lineHeight': 'base',
		'letterSpacing': '.6px',

		'WebkitTapHighlightColor': 'transparent',

		'transform': 'none',

		'px': `${theme.space[padding.x]} !important`,
		'py': `${theme.space[padding.y]} !important`,

		'transition': transition,
		'transitionDuration': transition,
		'transitionTimingFunction': transition,

		'&::before': {
			content: '""',

			zIndex: -1,

			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,

			transition: transition,
			transitionDuration: transition,
			transitionTimingFunction: transition
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
