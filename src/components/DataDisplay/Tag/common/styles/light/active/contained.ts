import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor } from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

import { TagLightActiveStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: TagLightActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: colorProp === 'white' ? 'darkest' : 'background'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors.gray[backgroundShade],

		'&::before': {
			boxShadow: 'none',
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors[color][colorShade],
			background: theme.colors[color][colorShade]
		},

		'&:hover': {
			'color': theme.colors.gray[backgroundShade],

			'&::before': {
				boxShadow: 'none',
				borderColor: darken(theme.colors[color][colorShade], amount.hover),
				backgroundColor: darken(theme.colors[color][colorShade], amount.hover),
				background: darken(theme.colors[color][colorShade], amount.hover)
			},

			'&:active': {
				'color': theme.colors.gray[backgroundShade],

				'&::before': {
					boxShadow: 'none',
					borderColor: darken(theme.colors[color][colorShade], amount.active),
					backgroundColor: darken(theme.colors[color][colorShade], amount.active),
					background: darken(theme.colors[color][colorShade], amount.active)
				}
			}
		}
	};
};
