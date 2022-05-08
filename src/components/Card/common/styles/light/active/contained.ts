import { darken } from 'color2k';

import { CardLightActiveStylingProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color, ColorHues } from '../../../../../../theme/types';
import { color as defaultColor, isLight as defaultIsLight } from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLight = defaultIsLight
}: CardLightActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black' || colorProp === 'white'
				? colorProp
				: colorProp === 'gray'
				? isLight
					? 'divider'
					: 'text.secondary'
				: isLight
				? 'divider'
				: 'color'
	});

	const textShade: ColorHues = colorProp === 'white' ? 900 : 50;
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
