import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../utils';

import { CalendarDayDarkActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: CalendarDayDarkActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});

	return {
		'color': theme.colors.gray[backgroundShade],
		'borderColor': theme.colors[color][colorShade],
		'backgroundColor': theme.colors[color][colorShade],
		'background': theme.colors[color][colorShade],

		'&:hover': {
			'color': theme.colors.gray[backgroundShade],
			'borderColor': lighten(theme.colors[color][colorShade], amount.hover),
			'backgroundColor': lighten(theme.colors[color][colorShade], amount.hover),
			'background': lighten(theme.colors[color][colorShade], amount.hover),

			'&:active': {
				color: theme.colors.gray[backgroundShade],
				borderColor: lighten(theme.colors[color][colorShade], amount.active),
				backgroundColor: lighten(theme.colors[color][colorShade], amount.active),
				background: lighten(theme.colors[color][colorShade], amount.active)
			}
		},

		'&:active': {
			color: theme.colors.gray[backgroundShade],
			borderColor: lighten(theme.colors[color][colorShade], amount.active),
			backgroundColor: lighten(theme.colors[color][colorShade], amount.active),
			background: lighten(theme.colors[color][colorShade], amount.active)
		}
	};
};
