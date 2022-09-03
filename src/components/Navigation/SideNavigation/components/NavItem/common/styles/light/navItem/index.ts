import { darken } from 'color2k';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { getAmount } from '../../../utils';

import { NavItemLightStylingProps } from './types';

export default ({ theme }: NavItemLightStylingProps): Style => {
	const amount = getAmount();

	const backgroundShade = getHue({ colorMode: 'light', type: 'light' });
	const primaryColorShade = getHue({ colorMode: 'light', type: 'text.primary' });
	const secondaryColorShade = getHue({ colorMode: 'light', type: 'text.secondary' });

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': theme.colors.gray[secondaryColorShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors.gray[secondaryColorShade]
		},

		'&:hover': {
			'background': darken(theme.colors.gray[backgroundShade], amount.hover),
			'backgroundColor': darken(theme.colors.gray[backgroundShade], amount.hover),
			'borderColor': darken(theme.colors.gray[backgroundShade], amount.hover),
			'color': theme.colors.gray[primaryColorShade],

			'& svg, .ds-cl-icon': {
				color: theme.colors.gray[primaryColorShade]
			},

			'&:active': {
				'background': darken(theme.colors.gray[backgroundShade], amount.active),
				'backgroundColor': darken(theme.colors.gray[backgroundShade], amount.active),
				'borderColor': darken(theme.colors.gray[backgroundShade], amount.active),
				'color': theme.colors.gray[primaryColorShade],

				'& svg, .ds-cl-icon': {
					color: theme.colors.gray[primaryColorShade]
				}
			}
		},

		'&:active': {
			'background': darken(theme.colors.gray[backgroundShade], amount.active),
			'backgroundColor': darken(theme.colors.gray[backgroundShade], amount.active),
			'borderColor': darken(theme.colors.gray[backgroundShade], amount.active),
			'color': theme.colors.gray[primaryColorShade],

			'& svg, .ds-cl-icon': {
				color: theme.colors.gray[primaryColorShade]
			}
		}
	};
};
