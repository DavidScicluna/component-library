import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { back } from '../../../default/amount';
import { color as defaultColor } from '../../../default/props';
import { transform } from '../../../default/sizes';

import { PushableOverlayLightDisabledStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: PushableOverlayLightDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: colorProp === 'black' ? 'light' : colorProp === 'white' ? 'dark' : 'darkest'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black'
				? 'dark'
				: colorProp === 'white'
				? 'light'
				: colorProp === 'gray'
				? 'default'
				: 'light'
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
			boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors[color][backgroundShade], back)}`
		}
	};
};
