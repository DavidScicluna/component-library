import { lighten } from 'color2k';


import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../utils';

import { TabDarkActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: TabDarkActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({ colorMode: 'dark', type: 'color' });
	const textShade = getHue({ colorMode: 'dark', type: 'background' });

	return {
		'background': theme.colors[color][shade],
		'backgroundColor': theme.colors[color][shade],
		'borderColor': theme.colors[color][shade],
		'color': theme.colors.gray[textShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors.gray[textShade]
		},

		'&:hover': {
			'background': lighten(theme.colors[color][shade], amount.hover),
			'backgroundColor': lighten(theme.colors[color][shade], amount.hover),
			'borderColor': lighten(theme.colors[color][shade], amount.hover),
			'color': lighten(theme.colors.gray[textShade], amount.hover),

			'& svg, .ds-cl-icon': {
				color: lighten(theme.colors.gray[textShade], amount.hover)
			},

			'&:active': {
				'background': lighten(theme.colors[color][shade], amount.active),
				'backgroundColor': lighten(theme.colors[color][shade], amount.active),
				'borderColor': lighten(theme.colors[color][shade], amount.active),
				'color': lighten(theme.colors.gray[textShade], amount.active),

				'& svg, .ds-cl-icon': {
					color: lighten(theme.colors.gray[textShade], amount.active)
				}
			}
		},

		'&:active': {
			'background': lighten(theme.colors[color][shade], amount.active),
			'backgroundColor': lighten(theme.colors[color][shade], amount.active),
			'borderColor': lighten(theme.colors[color][shade], amount.active),
			'color': lighten(theme.colors.gray[textShade], amount.active),

			'& svg, .ds-cl-icon': {
				color: lighten(theme.colors.gray[textShade], amount.active)
			}
		}
	};
};
