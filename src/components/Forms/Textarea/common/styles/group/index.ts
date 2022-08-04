
import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { Radius } from '../../../../../../theme/types';
import { isFullWidth as defaultIsFullWidth, size as defaultSize } from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { TextareaGroupStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, isFullWidth = defaultIsFullWidth, size = defaultSize }: TextareaGroupStyleProps): Style => {
	const config = getSizeConfig({ size });
	const height = config.height;
	const border = config.border;
	const padding = config.padding;

	const radius: Radius = size === 'xs' || size === 'sm' ? 'xs' : size === 'lg' || size === 'xl' ? 'lg' : 'base';

	return {
		'cursor': 'text',

		'width': isFullWidth ? '100%' : 'auto',
		'height': 'auto',

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'display': 'flex',
		'alignItems': 'center',
		'justifyContent': 'center',

		'userSelect': 'none',

		'opacity': 1,

		'outline': !isTouchDevice ? '0px transparent' : 'none !important',
		'borderStyle': 'solid',
		'borderWidth': `${border}px`,
		'borderRadius': theme.radii[radius],

		'WebkitTapHighlightColor': theme.colors.transparent,

		'px': `${theme.space[padding.x]} !important`,
		'py': `${theme.space[padding.y]} !important`,

		'transition': 'none',
		'transitionDuration': theme.transition.duration.normal,
		'transitionTimingFunction': theme.transition.easing['ease-in-out'],

		'& textarea': {
			minWidth: 'auto',
			minHeight: `${height}px`,
			maxWidth: 'none',
			maxHeight: 'none'
		},

		'& svg, .ds-cl-icon': {
			width: theme.fontSizes[size],
			height: theme.fontSizes[size],
			maxWidth: theme.fontSizes[size],
			maxHeight: theme.fontSizes[size],

			fontSize: theme.fontSizes[size],

			userSelect: 'none',

			transition: 'none',
			transitionDuration: theme.transition.duration.normal,
			transitionTimingFunction: theme.transition.easing['ease-in-out']
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
		}
	};
};
