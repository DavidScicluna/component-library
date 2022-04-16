import { darken } from 'color2k';

import { Style } from '../../../../../../common/types';
import { Theme, Color } from '../../../../../../theme/types';
import { handleAmount, handleHue, handleSize } from '../../../utils';
import { CardStyleProps } from '../../types';

export default (
	theme: Theme,
	colorProp: Color,
	isLight: CardStyleProps['isLight'] = true,
	isClickable: CardStyleProps['isClickable'] = false
): Style => {
	const amount = handleAmount('outlined');
	const shade = handleHue('light', colorProp, isLight);

	const size = handleSize();
	const border = size.border;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'&::before': {
			boxShadow: isClickable ? `0 ${border}px 0 0 ${theme.colors[color][shade]}` : 'none',
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'&::before': {
				boxShadow: isClickable
					? `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.hover)}`
					: 'none',
				borderColor: isClickable
					? darken(theme.colors[color][shade], amount.hover)
					: theme.colors[color][shade],
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				'&::before': {
					boxShadow: isClickable
						? `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.active)}`
						: 'none',
					borderColor: isClickable
						? darken(theme.colors[color][shade], amount.active)
						: theme.colors[color][shade],
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		}
	};
};
