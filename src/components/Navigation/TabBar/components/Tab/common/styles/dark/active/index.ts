import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../utils';

import { TabDarkActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: TabDarkActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({ colorMode: 'dark', type: 'background' });
	const backgroundShade = getHue({ colorMode: 'dark', type: 'color' });

	return {
		'background': theme.colors[color][backgroundShade],
		'backgroundColor': theme.colors[color][backgroundShade],
		'borderColor': theme.colors[color][backgroundShade],
		'color': theme.colors.gray[colorShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors.gray[colorShade]
		},

		'&:hover': {
			'background': lighten(theme.colors[color][backgroundShade], amount.hover),
			'backgroundColor': lighten(theme.colors[color][backgroundShade], amount.hover),
			'borderColor': lighten(theme.colors[color][backgroundShade], amount.hover),
			'color': lighten(theme.colors.gray[colorShade], amount.hover),

			'& svg, .ds-cl-icon': {
				color: lighten(theme.colors.gray[colorShade], amount.hover)
			},

			'&:active': {
				'background': lighten(theme.colors[color][backgroundShade], amount.active),
				'backgroundColor': lighten(theme.colors[color][backgroundShade], amount.active),
				'borderColor': lighten(theme.colors[color][backgroundShade], amount.active),
				'color': lighten(theme.colors.gray[colorShade], amount.active),

				'& svg, .ds-cl-icon': {
					color: lighten(theme.colors.gray[colorShade], amount.active)
				}
			}
		},

		'&:active': {
			'background': lighten(theme.colors[color][backgroundShade], amount.active),
			'backgroundColor': lighten(theme.colors[color][backgroundShade], amount.active),
			'borderColor': lighten(theme.colors[color][backgroundShade], amount.active),
			'color': lighten(theme.colors.gray[colorShade], amount.active),

			'& svg, .ds-cl-icon': {
				color: lighten(theme.colors.gray[colorShade], amount.active)
			}
		}
	};
};
