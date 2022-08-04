
import { Style } from '../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../common/utils';
import { Radius } from '../../../../../../theme/types';
import {
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { RadioGroupStyleProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	isFullWidth = defaultIsFullWidth,
	size = defaultSize,
	variant = defaultVariant
}: RadioGroupStyleProps): Style => {
	const config = getSizeConfig({ size });
	const border = config.border;
	const padding = config.padding;
	const radioFontSize = config.fontSize.radio;
	const iconFontSize = config.fontSize.icon;

	const radius: Radius = size === 'xs' || size === 'sm' ? 'xs' : size === 'lg' || size === 'xl' ? 'lg' : 'base';

	return {
		'cursor': 'pointer',

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
		'borderWidth': variant !== 'transparent' ? `${border}px` : 0,
		'borderRadius': theme.radii[radius],

		'WebkitTapHighlightColor': theme.colors.transparent,

		'px': `${theme.space[padding.x]} !important`,
		'py': `${theme.space[padding.y]} !important`,

		'transition': 'none',
		'transitionDuration': theme.transition.duration.normal,
		'transitionTimingFunction': theme.transition.easing['ease-in-out'],

		'& .chakra-radio': {
			cursor: 'pointer',

			width: `${radioFontSize}px`,
			height: `${radioFontSize}px`,

			minWidth: 'auto',
			minHeight: 'auto',
			maxWidth: 'none',
			maxHeight: 'none',

			userSelect: 'none',

			border: 'none',
			borderRadius: theme.radii.full,
			boxShadow: 'none !important',

			WebkitTapHighlightColor: theme.colors.transparent,

			p: 0,
			m: 0,

			transition: 'none',
			transitionDuration: theme.transition.duration.normal,
			transitionTimingFunction: theme.transition.easing['ease-in-out']
		},

		'& .chakra-radio__control': {
			cursor: 'pointer',

			width: 'inherit',
			height: 'inherit',

			userSelect: 'none',

			borderWidth: `${border}px`,
			borderStyle: 'solid',
			borderRadius: `${theme.radii.full} !important`,
			boxShadow: 'none !important',

			transition: 'none',
			transitionDuration: theme.transition.duration.normal,
			transitionTimingFunction: theme.transition.easing['ease-in-out']
		},

		'& svg, .ds-cl-icon': {
			width: `${iconFontSize}px`,
			height: `${iconFontSize}px`,
			maxWidth: `${iconFontSize}px`,
			maxHeight: `${iconFontSize}px`,

			fontSize: `${iconFontSize}px`,

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
