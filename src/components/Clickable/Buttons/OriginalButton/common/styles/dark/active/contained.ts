import { lighten } from 'color2k';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { Color, ColorHues } from '../../../../../../../../theme/types';
import { color as defaultColor } from '../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../../../common/utils';

import { ButtonDarkActiveStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: ButtonDarkActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'dark',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});

	const textShade: ColorHues = colorProp === 'black' ? 50 : 900;
	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

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
