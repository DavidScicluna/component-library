import { darken } from 'color2k';

import { Style } from '../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../common/utils/color';
import { getAmount } from '../../../utils';
import { color as defaultColor } from '../../../../../../../../common/data/defaultPropValues';

import { CalendarDayLightActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: CalendarDayLightActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	return {
		'color': theme.colors.gray[backgroundShade],
		'borderColor': theme.colors[color][colorShade],
		'backgroundColor': theme.colors[color][colorShade],
		'background': theme.colors[color][colorShade],

		'&:hover': {
			'color': theme.colors.gray[backgroundShade],
			'borderColor': darken(theme.colors[color][colorShade], amount.hover),
			'backgroundColor': darken(theme.colors[color][colorShade], amount.hover),
			'background': darken(theme.colors[color][colorShade], amount.hover),

			'&:active': {
				color: theme.colors.gray[backgroundShade],
				borderColor: darken(theme.colors[color][colorShade], amount.active),
				backgroundColor: darken(theme.colors[color][colorShade], amount.active),
				background: darken(theme.colors[color][colorShade], amount.active)
			}
		},

		'&:active': {
			color: theme.colors.gray[backgroundShade],
			borderColor: darken(theme.colors[color][colorShade], amount.active),
			backgroundColor: darken(theme.colors[color][colorShade], amount.active),
			background: darken(theme.colors[color][colorShade], amount.active)
		}
	};
};
