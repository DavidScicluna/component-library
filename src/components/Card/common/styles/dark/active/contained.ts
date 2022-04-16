import { lighten } from 'color2k';

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
	const amount = handleAmount('contained');
	const shade = handleHue('dark', colorProp, isLight);

	const size = handleSize();
	const border = size.border;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'&::before': {
			boxShadow: isClickable ? `0 ${border}px 0 0 ${theme.colors[color][shade]}` : 'none',
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors[color][shade],
			background: theme.colors[color][shade]
		},

		'&:hover': {
			'&::before': {
				boxShadow: isClickable
					? `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.back)}`
					: 'none',
				borderColor: isClickable
					? lighten(theme.colors[color][shade], amount.hover)
					: theme.colors[color][shade],
				backgroundColor: isClickable
					? lighten(theme.colors[color][shade], amount.hover)
					: theme.colors[color][shade],
				background: isClickable ? lighten(theme.colors[color][shade], amount.hover) : theme.colors[color][shade]
			},

			'&:active': {
				'&::before': {
					boxShadow: isClickable
						? `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.active)}`
						: 'none',
					borderColor: isClickable
						? lighten(theme.colors[color][shade], amount.active)
						: theme.colors[color][shade],
					backgroundColor: isClickable
						? lighten(theme.colors[color][shade], amount.active)
						: theme.colors[color][shade],
					background: isClickable
						? lighten(theme.colors[color][shade], amount.active)
						: theme.colors[color][shade]
				}
			}
		}
	};
};
