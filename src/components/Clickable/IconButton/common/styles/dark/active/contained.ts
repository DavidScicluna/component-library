import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { Color, ColorHues, Theme } from '../../../../../../../theme/types';
import { Size } from '../../../../types';
import { handleAmount, handleHue, handleSize } from '../../../utils';

export default (theme: Theme, colorProp: Color, sizeProp: Size): Style => {
	const amount = handleAmount('contained');
	const shade = handleHue('dark', colorProp);

	const size = handleSize(sizeProp);
	const border = size.border;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;
	const textShade: ColorHues = colorProp === 'black' ? 50 : 900;

	return {
		'color': theme.colors.gray[textShade],

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][shade]}`,
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors[color][shade],
			background: theme.colors[color][shade]
		},

		'&:hover': {
			'color': theme.colors.gray[textShade],

			'&::before': {
				boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.hover)}`,
				borderColor: lighten(theme.colors[color][shade], amount.hover),
				backgroundColor: lighten(theme.colors[color][shade], amount.hover),
				background: lighten(theme.colors[color][shade], amount.hover)
			},

			'&:active': {
				'color': theme.colors.gray[textShade],

				'&::before': {
					boxShadow: `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.active)}`,
					borderColor: lighten(theme.colors[color][shade], amount.active),
					backgroundColor: lighten(theme.colors[color][shade], amount.active),
					background: lighten(theme.colors[color][shade], amount.active)
				}
			}
		}
	};
};
