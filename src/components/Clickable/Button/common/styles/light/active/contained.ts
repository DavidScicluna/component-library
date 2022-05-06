import { darken } from 'color2k';

import { ButtonLightActiveStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { ColorHues } from '../../../../../../../theme/types';
import { color as defaultColor } from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

export default ({ theme, color = defaultColor }: ButtonLightActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'light',
		type: color === 'black' || color === 'white' ? color : color === 'gray' ? 'text.secondary' : 'color'
	});

	const textShade: ColorHues = color === 'white' ? 900 : 50;

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
				borderColor: darken(theme.colors[color][shade], amount.hover),
				backgroundColor: darken(theme.colors[color][shade], amount.hover),
				background: darken(theme.colors[color][shade], amount.hover)
			},

			'&:active': {
				'color': theme.colors.gray[textShade],

				'&::before': {
					boxShadow: 'none',
					borderColor: darken(theme.colors[color][shade], amount.active),
					backgroundColor: darken(theme.colors[color][shade], amount.active),
					background: darken(theme.colors[color][shade], amount.active)
				}
			}
		}
	};
};
