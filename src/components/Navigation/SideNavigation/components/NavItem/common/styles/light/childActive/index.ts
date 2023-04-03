import { darken } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../utils';

import { NavItemLightChildActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: NavItemLightChildActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({ colorMode: 'light', type: 'color' });
	const backgroundShade = getHue({ colorMode: 'light', type: 'light' });

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': theme.colors[color][colorShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors[color][colorShade]
		},

		'&:hover': {
			'background': darken(theme.colors.gray[backgroundShade], amount.hover),
			'backgroundColor': darken(theme.colors.gray[backgroundShade], amount.hover),
			'borderColor': darken(theme.colors.gray[backgroundShade], amount.hover),
			'color': darken(theme.colors[color][colorShade], amount.hover),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors[color][colorShade], amount.hover)
			},

			'&:active': {
				'background': darken(theme.colors.gray[backgroundShade], amount.active),
				'backgroundColor': darken(theme.colors.gray[backgroundShade], amount.active),
				'borderColor': darken(theme.colors.gray[backgroundShade], amount.active),
				'color': darken(theme.colors[color][colorShade], amount.active),

				'& svg, .ds-cl-icon': {
					color: darken(theme.colors[color][colorShade], amount.active)
				}
			}
		},

		'&:active': {
			'background': darken(theme.colors.gray[backgroundShade], amount.active),
			'backgroundColor': darken(theme.colors.gray[backgroundShade], amount.active),
			'borderColor': darken(theme.colors.gray[backgroundShade], amount.active),
			'color': darken(theme.colors[color][colorShade], amount.active),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors[color][colorShade], amount.active)
			}
		}
	};
};
