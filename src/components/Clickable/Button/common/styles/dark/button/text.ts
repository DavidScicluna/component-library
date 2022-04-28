import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { Theme, Color } from '../../../../../../../theme/types';
import { Size } from '../../../../types';
import { handleAmount, handleHue, handleSize } from '../../../utils';

const isTouchDevice: boolean = checkIsTouchDevice();

export default (theme: Theme, colorProp: Color, sizeProp: Size): Style => {
	const amount = handleAmount('outlined');
	const shade = handleHue('dark', colorProp);

	const size = handleSize(sizeProp);
	const border = size.border;
	const offset = size.offset.text;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'color': lighten(theme.colors[color][shade], amount.hover),

			'&::before': {
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				'color': lighten(theme.colors[color][shade], amount.active),

				'&::before': {
					borderColor: theme.colors.transparent,
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		},

		'&:active': {
			'color': lighten(theme.colors[color][shade], amount.active),

			'&::before': {
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
