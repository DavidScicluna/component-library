import { darken } from 'color2k';

import { back } from '../../../../../../../common/default/amount';
import { color as defaultColor } from '../../../../../../../common/default/props';
import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { transform } from '../../../default/sizes';

import { PushableOverlayDarkDisabledStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: PushableOverlayDarkDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: colorProp === 'black' ? 'light' : colorProp === 'white' ? 'dark' : 'darkest'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
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
			boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors[color][backgroundShade], back * 3)}`
		}
	};
};
