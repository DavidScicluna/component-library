import { darken } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { active } from '../../../default/amount';
import { color as defaultColor } from '../../../default/props';
import { transform } from '../../../default/sizes';

import { PushableOverlayLightActiveStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: PushableOverlayLightActiveStylingProps): Style => {
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
			borderColor: darken(theme.colors[color][colorShade], active),
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade],
			boxShadow: `0 ${transform.active}px 0 0 ${darken(theme.colors[color][colorShade], active)}`
		}
	};
};
