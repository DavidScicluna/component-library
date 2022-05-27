import { CheckboxStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { size as defaultSize } from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

export default ({ theme, size = defaultSize }: CheckboxStyleProps): Style => {
	const config = getSizeConfig({ size });
	const checkboxFontSize = config.fontSize.checkbox;
	const iconFontSize = config.fontSize.icon;

	return {
		'cursor': 'pointer',

		'width': `${checkboxFontSize}px`,
		'height': `${checkboxFontSize}px`,

		'minWidth': 'auto',
		'minHeight': 'auto',
		'maxWidth': 'none',
		'maxHeight': 'none',

		'userSelect': 'none',

		'border': 'none',
		'borderRadius': theme.radii.xs,
		'boxShadow': 'none !important',

		'WebkitTapHighlightColor': theme.colors.transparent,

		'p': 0,
		'm': 0,

		'transition': 'none',
		'transitionDuration': theme.transition.duration.normal,
		'transitionTimingFunction': theme.transition.easing['ease-in-out'],

		'& .chakra-checkbox__control': {
			cursor: 'pointer',

			width: 'inherit',
			height: 'inherit',

			userSelect: 'none',

			borderWidth: '2px',
			borderStyle: 'solid',
			borderRadius: theme.radii.xs,
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
		}
	};
};
