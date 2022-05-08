import { darken } from 'color2k';

import { TabLightActiveStylingProps } from './types';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

export default ({ theme, color = defaultColor }: TabLightActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({ type: 'color', colorMode: 'light' });

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': darken(theme.colors[color][shade], amount.active),

		'& svg, .ds-cl-icon': {
			color: darken(theme.colors[color][shade], amount.active)
		},

		'&:hover': {
			'background': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'borderColor': theme.colors.transparent,
			'color': darken(theme.colors[color][shade], amount.active),

			'& svg, .ds-cl-icon': {
				color: darken(theme.colors[color][shade], amount.active)
			}
		}
	};
};
