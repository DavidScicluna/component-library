import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../common/utils';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { active, hover } from '../../../default/amount';
import { color as defaultColor } from '../../../default/props';
import { border, offset } from '../../../default/sizes';

import { PushableOverlayLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color: colorProp = defaultColor }: PushableOverlayLightStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: colorProp === 'black' ? 'darker' : colorProp === 'white' ? 'lighter' : 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			content: '""',

			color: theme.colors[color][colorShade],
			borderColor: theme.colors.gray[backgroundShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade]
		},

		'&:hover': {
			'color': darken(theme.colors[color][colorShade], hover),

			'&::before': {
				content: '""',

				color: darken(theme.colors[color][colorShade], hover),
				borderColor: theme.colors.gray[backgroundShade],
				backgroundColor: theme.colors.gray[backgroundShade],
				background: theme.colors.gray[backgroundShade]
			},

			'&:active': {
				'color': darken(theme.colors[color][colorShade], active),

				'&::before': {
					content: '""',

					color: darken(theme.colors[color][colorShade], active),
					borderColor: theme.colors.gray[backgroundShade],
					backgroundColor: theme.colors.gray[backgroundShade],
					background: theme.colors.gray[backgroundShade]
				}
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][colorShade], active),

			'&::before': {
				content: '""',

				color: darken(theme.colors[color][colorShade], active),
				borderColor: theme.colors.gray[backgroundShade],
				backgroundColor: theme.colors.gray[backgroundShade],
				background: theme.colors.gray[backgroundShade]
			}
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: !isTouchDevice ? `${offset}px` : 0
		}
	};
};
