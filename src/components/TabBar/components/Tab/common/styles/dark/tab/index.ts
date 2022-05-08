import { lighten } from 'color2k';

import { TabDarkStylingProps } from './types';

import { Style } from '../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../theme/types';
import { color as defaultColor, isActive as defaultIsActive } from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp = defaultColor, isActive = defaultIsActive }: TabDarkStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({ colorMode: 'dark', type: 'color' });

	const color: Color = isActive ? colorProp : 'gray';

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': theme.colors[color][shade],

		'& svg, .ds-cl-icon': {
			color: theme.colors[color][shade]
		},

		'&:hover': {
			'background': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'borderColor': theme.colors.transparent,
			'color': lighten(theme.colors[color][shade], amount.hover),

			'& svg, .ds-cl-icon': {
				color: lighten(theme.colors[color][shade], amount.hover)
			},

			'&:active': {
				'background': theme.colors.transparent,
				'backgroundColor': theme.colors.transparent,
				'borderColor': theme.colors.transparent,
				'color': lighten(theme.colors[color][shade], amount.active),

				'& svg, .ds-cl-icon': {
					color: lighten(theme.colors[color][shade], amount.active)
				}
			}
		},

		'&:active': {
			'background': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'borderColor': theme.colors.transparent,
			'color': lighten(theme.colors[color][shade], amount.active),

			'& svg, .ds-cl-icon': {
				color: lighten(theme.colors[color][shade], amount.active)
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `2px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? '4px' : 0
		}
	};
};
