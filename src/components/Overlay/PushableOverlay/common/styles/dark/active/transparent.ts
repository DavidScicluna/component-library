import { lighten } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { active } from '../../../default/amount';
import { color as defaultColor } from '../../../default/props';

import { PushableOverlayDarkActiveStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: PushableOverlayDarkActiveStylingProps): Style => {
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
		'color': lighten(theme.colors[color][colorShade], active),

		'&::before': {
			content: '""',

			color: lighten(theme.colors[color][colorShade], active),
			borderColor: theme.colors.gray[backgroundShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade]
		}
	};
};
