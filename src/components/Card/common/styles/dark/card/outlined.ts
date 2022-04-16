import { lighten } from 'color2k';

import { Style } from '../../../../../../common/types';
import { handleIsTouchDevice } from '../../../../../../common/utils';
import { Theme, Color } from '../../../../../../theme/types';
import { handleSize, handleHue, handleAmount } from '../../../utils';
import { CardStyleProps } from '../../types';

const isTouchDevice: boolean = handleIsTouchDevice();

export default (
	theme: Theme,
	colorProp: Color,
	isLight: CardStyleProps['isLight'] = true,
	isClickable: CardStyleProps['isClickable'] = false
): Style => {
	const amount = handleAmount('outlined');
	const shade = handleHue('dark', colorProp, isLight);

	const size = handleSize();
	const border = size.border;
	const transform = size.transform;
	const offset = size.offset;

	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	return {
		'&::before': {
			boxShadow: isClickable ? `0 ${transform}px 0 0 ${theme.colors[color][shade]}` : 'none',
			borderColor: theme.colors[color][shade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'&::before': {
				boxShadow: isClickable
					? `0 ${transform}px 0 0 ${lighten(theme.colors[color][shade], amount.hover)}`
					: 'none',
				borderColor: isClickable
					? lighten(theme.colors[color][shade], amount.hover)
					: theme.colors[color][shade],
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				'&::before': {
					boxShadow: isClickable
						? `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.active)}`
						: 'none',
					borderColor: isClickable
						? lighten(theme.colors[color][shade], amount.active)
						: theme.colors[color][shade],
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		},

		'&:active': {
			'&::before': {
				boxShadow: isClickable
					? `0 ${border}px 0 0 ${lighten(theme.colors[color][shade], amount.active)}`
					: 'none',
				borderColor: isClickable
					? lighten(theme.colors[color][shade], amount.active)
					: theme.colors[color][shade],
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
