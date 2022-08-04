import { darken } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../utils';

import { TabLightActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: TabLightActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({ colorMode: 'light', type: 'color' });
	const textShade = getHue({ colorMode: 'light', type: 'background' });

	return {
		'background': theme.colors[color][shade],
		'backgroundColor': theme.colors[color][shade],
		'borderColor': theme.colors[color][shade],
		'color': theme.colors.gray[textShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors.gray[textShade]
		},

		'&:hover': {
			'background': darken(theme.colors[color][shade], amount.hover),
			'backgroundColor': darken(theme.colors[color][shade], amount.hover),
			'borderColor': darken(theme.colors[color][shade], amount.hover),
			'color': darken(theme.colors.gray[textShade], amount.hover),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors.gray[textShade], amount.hover)
			},

			'&:active': {
				'background': darken(theme.colors[color][shade], amount.active),
				'backgroundColor': darken(theme.colors[color][shade], amount.active),
				'borderColor': darken(theme.colors[color][shade], amount.active),
				'color': darken(theme.colors.gray[textShade], amount.active),

				'& svg, .ds-cl-icon': {
					color: darken(theme.colors.gray[textShade], amount.active)
				}
			}
		},

		'&:active': {
			'background': darken(theme.colors[color][shade], amount.active),
			'backgroundColor': darken(theme.colors[color][shade], amount.active),
			'borderColor': darken(theme.colors[color][shade], amount.active),
			'color': darken(theme.colors.gray[textShade], amount.active),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors.gray[textShade], amount.active)
			}
		}
	};
};
