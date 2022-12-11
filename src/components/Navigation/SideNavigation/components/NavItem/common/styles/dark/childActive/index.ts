import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../utils';

import { NavItemDarkChildActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: NavItemDarkChildActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({ colorMode: 'dark', type: 'color' });
	const backgroundShade = getHue({ colorMode: 'dark', type: 'dark' });

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': theme.colors[color][colorShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors[color][colorShade]
		},

		'&:hover': {
			'background': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'backgroundColor': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'borderColor': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'color': lighten(theme.colors[color][colorShade], amount.hover),

			'& svg, .ds-cl-icon': {
				color: lighten(theme.colors[color][colorShade], amount.hover)
			},

			'&:active': {
				'background': lighten(theme.colors.gray[backgroundShade], amount.active),
				'backgroundColor': lighten(theme.colors.gray[backgroundShade], amount.active),
				'borderColor': lighten(theme.colors.gray[backgroundShade], amount.active),
				'color': lighten(theme.colors[color][colorShade], amount.active),

				'& svg, .ds-cl-icon': {
					color: lighten(theme.colors[color][colorShade], amount.active)
				}
			}
		},

		'&:active': {
			'background': lighten(theme.colors.gray[backgroundShade], amount.active),
			'backgroundColor': lighten(theme.colors.gray[backgroundShade], amount.active),
			'borderColor': lighten(theme.colors.gray[backgroundShade], amount.active),
			'color': lighten(theme.colors[color][colorShade], amount.active),

			'& svg, .ds-cl-icon': {
				color: lighten(theme.colors[color][colorShade], amount.active)
			}
		}
	};
};
