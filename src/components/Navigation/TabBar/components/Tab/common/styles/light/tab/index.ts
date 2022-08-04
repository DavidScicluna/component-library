import { darken } from 'color2k';


import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { getAmount } from '../../../utils';

import { TabLightStylingProps } from './types';

export default ({ theme }: TabLightStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({ colorMode: 'light', type: 'text.secondary' });

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': theme.colors.gray[shade],

		'& svg, .ds-cl-icon': {
			color: theme.colors.gray[shade]
		},

		'&:hover': {
			'background': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'borderColor': theme.colors.transparent,
			'color': darken(theme.colors.gray[shade], amount.hover),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors.gray[shade], amount.hover)
			},

			'&:active': {
				'background': theme.colors.transparent,
				'backgroundColor': theme.colors.transparent,
				'borderColor': theme.colors.transparent,
				'color': darken(theme.colors.gray[shade], amount.active),

				'& svg, .ds-cl-icon': {
					color: darken(theme.colors.gray[shade], amount.active)
				}
			}
		},

		'&:active': {
			'background': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'borderColor': theme.colors.transparent,
			'color': darken(theme.colors.gray[shade], amount.active),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors.gray[shade], amount.active)
			}
		}
	};
};
