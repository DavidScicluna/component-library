import { lighten } from 'color2k';

import { ButtonDarkActiveStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { ColorHues } from '../../../../../../../theme/types';
import { color as defaultColor } from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

export default ({ theme, color = defaultColor }: ButtonDarkActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'dark',
		type: color === 'black' || color === 'white' ? color : color === 'gray' ? 'text.secondary' : 'color'
	});

	const textShade: ColorHues = color === 'black' ? 50 : 900;

	return {
		'color': theme.colors.gray[textShade],

		'&::before': {
			boxShadow: 'none',
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors[color][shade],
			background: theme.colors[color][shade]
		},

		'&:hover': {
			'color': theme.colors.gray[textShade],

			'&::before': {
				boxShadow: 'none',
				borderColor: lighten(theme.colors[color][shade], amount.hover),
				backgroundColor: lighten(theme.colors[color][shade], amount.hover),
				background: lighten(theme.colors[color][shade], amount.hover)
			},

			'&:active': {
				'color': theme.colors.gray[textShade],

				'&::before': {
					boxShadow: 'none',
					borderColor: lighten(theme.colors[color][shade], amount.active),
					backgroundColor: lighten(theme.colors[color][shade], amount.active),
					background: lighten(theme.colors[color][shade], amount.active)
				}
			}
		}
	};
};
