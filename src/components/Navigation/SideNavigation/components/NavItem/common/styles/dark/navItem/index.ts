import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { getAmount } from '../../../utils';

import { NavItemDarkStylingProps } from './types';

export default ({ theme }: NavItemDarkStylingProps): Style => {
	const amount = getAmount();

	const backgroundShade = getHue({ colorMode: 'dark', type: 'dark' });
	const primaryColorShade = getHue({ colorMode: 'dark', type: 'text.primary' });
	const secondaryColorShade = getHue({ colorMode: 'dark', type: 'text.secondary' });

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': theme.colors.gray[secondaryColorShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors.gray[secondaryColorShade]
		},

		'&:hover': {
			'background': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'backgroundColor': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'borderColor': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'color': theme.colors.gray[primaryColorShade],

			'& svg, .ds-cl-icon': {
				color: theme.colors.gray[primaryColorShade]
			},

			'&:active': {
				'background': lighten(theme.colors.gray[backgroundShade], amount.active),
				'backgroundColor': lighten(theme.colors.gray[backgroundShade], amount.active),
				'borderColor': lighten(theme.colors.gray[backgroundShade], amount.active),
				'color': theme.colors.gray[primaryColorShade],

				'& svg, .ds-cl-icon': {
					color: theme.colors.gray[primaryColorShade]
				}
			}
		},

		'&:active': {
			'background': lighten(theme.colors.gray[backgroundShade], amount.active),
			'backgroundColor': lighten(theme.colors.gray[backgroundShade], amount.active),
			'borderColor': lighten(theme.colors.gray[backgroundShade], amount.active),
			'color': theme.colors.gray[primaryColorShade],

			'& svg, .ds-cl-icon': {
				color: theme.colors.gray[primaryColorShade]
			}
		}
	};
};
