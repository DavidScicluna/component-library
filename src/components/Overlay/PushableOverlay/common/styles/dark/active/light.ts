import { darken, lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { active, back } from '../../../default/amount';
import { color as defaultColor } from '../../../default/props';
import { transform } from '../../../default/sizes';

import { PushableOverlayDarkActiveStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: PushableOverlayDarkActiveStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: colorProp === 'black' ? 'light' : 'dark'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: colorProp === 'black' ? 'dark' : colorProp === 'gray' ? 'default' : 'light'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][colorShade],

		'&::before': {
			content: '""',

			color: theme.colors[color][colorShade],
			borderColor: lighten(theme.colors[color][backgroundShade], active),
			backgroundColor: lighten(theme.colors[color][backgroundShade], active),
			background: lighten(theme.colors[color][backgroundShade], active),
			boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors[color][backgroundShade], back)}`
		}
	};
};
