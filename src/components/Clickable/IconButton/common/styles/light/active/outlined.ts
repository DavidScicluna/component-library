import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { Theme, Color } from '../../../../../../../theme/types';
import { Size } from '../../../../types';
import { handleAmount, handleHue, handleSize } from '../../../utils';

export default (theme: Theme, colorProp: Color, sizeProp: Size): Style => {
	const amount = handleAmount('outlined');
	const shade = handleHue('light', colorProp);

	const size = handleSize(sizeProp);
	const border = size.border;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][shade]}`,
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),

			'&::before': {
				boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.hover)}`,
				borderColor: darken(theme.colors[color][shade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				'color': darken(theme.colors[color][shade], amount.active),

				'&::before': {
					boxShadow: `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.active)}`,
					borderColor: darken(theme.colors[color][shade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		}
	};
};
