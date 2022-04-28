import { darken, lighten } from 'color2k';

import { Style } from '../../../../../../common/types';
import { isTouchDevice } from '../../../../../../common/utils';
import { Theme, Color } from '../../../../../../theme/types';
import { handleSize, handleHue, handleAmount } from '../../../utils';
import { CardStyleProps } from '../../types';

const isTouchDevice: boolean = isTouchDevice();

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
	const transform = size.transform;
	const offset = size.offset;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'&::before': {
			boxShadow: isClickable ? `0 ${transform}px 0 0 ${darken(theme.colors[color][shade], amount.back)}` : 'none',
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors[color][shade],
			background: theme.colors[color][shade]
		},

		'&:hover': {
			'&::before': {
				boxShadow: isClickable
					? `0 ${transform}px 0 0 ${darken(theme.colors[color][shade], amount.back)}`
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
						? `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.active)}`
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
		},

		'&:active': {
			'&::before': {
				boxShadow: isClickable
					? `0 ${border}px 0 0 ${darken(theme.colors[color][shade], amount.active)}`
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
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
