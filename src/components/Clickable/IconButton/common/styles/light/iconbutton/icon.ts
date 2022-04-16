import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { handleIsTouchDevice } from '../../../../../../../common/utils';
import { Theme, Color } from '../../../../../../../theme/types';
import { Size } from '../../../../types';
import { handleAmount, handleHue, handleSize } from '../../../utils';

const isTouchDevice: boolean = handleIsTouchDevice();

export default (theme: Theme, colorProp: Color, sizeProp: Size): Style => {
	const amount = handleAmount('outlined');
	const shade = handleHue('light', colorProp);

	const size = handleSize(sizeProp);
	const border = size.border;
	const offset = size.offset.icon;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),

			'&::before': {
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				'color': darken(theme.colors[color][shade], amount.active),

				'&::before': {
					borderColor: theme.colors.transparent,
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][shade], amount.active),

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
