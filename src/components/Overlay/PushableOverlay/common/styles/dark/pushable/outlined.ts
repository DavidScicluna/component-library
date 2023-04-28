import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { active, hover } from '../../../default/amount';
import { color as defaultColor } from '../../../default/props';
import { border, offset, transform } from '../../../default/sizes';

import { PushableOverlayDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp = defaultColor }: PushableOverlayDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: colorProp === 'black' ? 'darker' : colorProp === 'white' ? 'lighter' : 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			content: '""',

			color: theme.colors[color][colorShade],
			borderColor: theme.colors[color][colorShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade],
			boxShadow: `0 ${transform.default}px 0 0 ${theme.colors[color][colorShade]}`
		},

		'&:hover': {
			'color': lighten(theme.colors[color][colorShade], hover),

			'&::before': {
				content: '""',

				color: lighten(theme.colors[color][colorShade], hover),
				borderColor: lighten(theme.colors[color][colorShade], hover),
				backgroundColor: theme.colors.gray[backgroundShade],
				background: theme.colors.gray[backgroundShade],
				boxShadow: `0 ${transform.hover}px 0 0 ${lighten(theme.colors[color][colorShade], hover)}`
			},

			'&:active': {
				'color': lighten(theme.colors[color][colorShade], active),

				'&::before': {
					content: '""',

					color: lighten(theme.colors[color][colorShade], active),
					borderColor: lighten(theme.colors[color][colorShade], active),
					backgroundColor: theme.colors.gray[backgroundShade],
					background: theme.colors.gray[backgroundShade],
					boxShadow: `0 ${transform.active}px 0 0 ${lighten(theme.colors[color][colorShade], active)}`
				}
			}
		},

		'&:active': {
			'color': lighten(theme.colors[color][colorShade], active),

			'&::before': {
				content: '""',

				color: lighten(theme.colors[color][colorShade], active),
				borderColor: lighten(theme.colors[color][colorShade], active),
				backgroundColor: theme.colors.gray[backgroundShade],
				background: theme.colors.gray[backgroundShade],
				boxShadow: `0 ${transform.active}px 0 0 ${lighten(theme.colors[color][colorShade], active)}`
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
