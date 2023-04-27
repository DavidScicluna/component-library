import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { active, back } from '../../../default/amount';
import { color as defaultColor } from '../../../default/props';
import { transform } from '../../../default/sizes';

import { PushableOverlayLightActiveStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: PushableOverlayLightActiveStylingProps): Style => {
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
			borderColor: darken(theme.colors[color][backgroundShade], active),
			backgroundColor: darken(theme.colors[color][backgroundShade], active),
			background: darken(theme.colors[color][backgroundShade], active),
			boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors[color][backgroundShade], back)}`
		}
	};
};
