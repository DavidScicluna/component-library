import { lighten } from 'color2k';

import { TabDarkActiveStylingProps } from './types';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

export default ({ theme, color = defaultColor }: TabDarkActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({ colorMode: 'dark', type: 'color' });

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': lighten(theme.colors[color][shade], amount.active),

		'& svg, .ds-cl-icon': {
			color: lighten(theme.colors[color][shade], amount.active)
		},

		'&:hover': {
			'background': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'borderColor': theme.colors.transparent,
			'color': lighten(theme.colors[color][shade], amount.active),

			'& svg, .ds-cl-icon': {
				color: lighten(theme.colors[color][shade], amount.active)
			}
		}
	};
};
