import { darken } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../utils';

import { TabLightActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: TabLightActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({ colorMode: 'light', type: 'background' });
	const backgroundShade = getHue({ colorMode: 'light', type: 'color' });

	return {
		'background': theme.colors[color][backgroundShade],
		'backgroundColor': theme.colors[color][backgroundShade],
		'borderColor': theme.colors[color][backgroundShade],
		'color': theme.colors.gray[colorShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors.gray[colorShade]
		},

		'&:hover': {
			'background': darken(theme.colors[color][backgroundShade], amount.hover),
			'backgroundColor': darken(theme.colors[color][backgroundShade], amount.hover),
			'borderColor': darken(theme.colors[color][backgroundShade], amount.hover),
			'color': darken(theme.colors.gray[colorShade], amount.hover),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors.gray[colorShade], amount.hover)
			},

			'&:active': {
				'background': darken(theme.colors[color][backgroundShade], amount.active),
				'backgroundColor': darken(theme.colors[color][backgroundShade], amount.active),
				'borderColor': darken(theme.colors[color][backgroundShade], amount.active),
				'color': darken(theme.colors.gray[colorShade], amount.active),

				'& svg, .ds-cl-icon': {
					color: darken(theme.colors.gray[colorShade], amount.active)
				}
			}
		},

		'&:active': {
			'background': darken(theme.colors[color][backgroundShade], amount.active),
			'backgroundColor': darken(theme.colors[color][backgroundShade], amount.active),
			'borderColor': darken(theme.colors[color][backgroundShade], amount.active),
			'color': darken(theme.colors.gray[colorShade], amount.active),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors.gray[colorShade], amount.active)
			}
		}
	};
};
