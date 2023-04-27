import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { active, back, hover } from '../../../default/amount';
import { color as defaultColor } from '../../../default/props';
import { border, offset, transform } from '../../../default/sizes';

import { PushableOverlayLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp = defaultColor }: PushableOverlayLightStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: colorProp === 'black' ? 'light' : 'dark'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: colorProp === 'black' ? 'dark' : colorProp === 'gray' ? 'default' : 'light'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			content: '""',

			color: theme.colors[color][colorShade],
			borderColor: theme.colors[color][backgroundShade],
			backgroundColor: theme.colors[color][backgroundShade],
			background: theme.colors[color][backgroundShade],
			boxShadow: `0 ${transform.default}px 0 0 ${darken(theme.colors[color][backgroundShade], back)}`
		},

		'&:hover': {
			'color': theme.colors[color][colorShade],

			'&::before': {
				content: '""',

				color: theme.colors[color][colorShade],
				borderColor: darken(theme.colors[color][backgroundShade], hover),
				backgroundColor: darken(theme.colors[color][backgroundShade], hover),
				background: darken(theme.colors[color][backgroundShade], hover),
				boxShadow: `0 ${transform.hover}px 0 0 ${darken(theme.colors[color][backgroundShade], back)}`
			},

			'&:active': {
				'color': theme.colors[color][colorShade],

				'&::before': {
					content: '""',

					color: theme.colors[color][colorShade],
					borderColor: darken(theme.colors[color][backgroundShade], active),
					backgroundColor: darken(theme.colors[color][backgroundShade], active),
					background: darken(theme.colors[color][backgroundShade], active),
					boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors[color][backgroundShade], back)}`
				}
			}
		},

		'&:active': {
			'color': theme.colors[color][colorShade],

			'&::before': {
				content: '""',

				color: theme.colors[color][colorShade],
				borderColor: darken(theme.colors[color][backgroundShade], active),
				backgroundColor: darken(theme.colors[color][backgroundShade], active),
				background: darken(theme.colors[color][backgroundShade], active),
				boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors[color][backgroundShade], back)}`
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][backgroundShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
