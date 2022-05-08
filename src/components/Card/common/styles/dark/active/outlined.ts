import { lighten } from 'color2k';

import { CardDarkActiveStylingProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';
import { color as defaultColor } from '../../../data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

export default ({ theme, color: colorProp = defaultColor }: CardDarkActiveStylingProps): Style => {
	const amount = getAmount();
	const shade = getHue({
		colorMode: 'dark',
		type:
			colorProp === 'black' || colorProp === 'white'
				? colorProp
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});

	const config = getSizeConfig();
	const border = config.border;

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][shade]}`,
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.gray[900],
			background: theme.colors.gray[900]
		},

		'&:hover': {
			'color': lighten(theme.colors[color][shade], amount.hover),

			'&::before': {
				boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.hover)}`,
				borderColor: lighten(theme.colors[color][shade], amount.hover),
				backgroundColor: theme.colors.gray[900],
				background: theme.colors.gray[900]
			},

			'&:active': {
				'color': lighten(theme.colors[color][shade], amount.active),

				'&::before': {
					boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.active)}`,
					borderColor: lighten(theme.colors[color][shade], amount.active),
					backgroundColor: theme.colors.gray[900],
					background: theme.colors.gray[900]
				}
			}
		}
	};
};
