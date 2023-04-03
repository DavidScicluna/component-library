import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor, isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../../../common/utils';

import { CardDarkActiveStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLight = defaultIsLight
}: CardDarkActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? isLight
					? 'divider'
					: 'text.secondary'
				: isLight
				? 'divider'
				: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: colorProp === 'black' ? 'lightest' : 'background'
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
				borderColor: lighten(theme.colors[color][colorShade], amount.hover),
				backgroundColor: lighten(theme.colors[color][colorShade], amount.hover),
				background: lighten(theme.colors[color][colorShade], amount.hover)
			},

			'&:active': {
				'color': theme.colors.gray[backgroundShade],

				'&::before': {
					boxShadow: 'none',
					borderColor: lighten(theme.colors[color][colorShade], amount.active),
					backgroundColor: lighten(theme.colors[color][colorShade], amount.active),
					background: lighten(theme.colors[color][colorShade], amount.active)
				}
			}
		}
	};
};
