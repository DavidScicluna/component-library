import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor } from '../../../default/props';

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
			borderColor: theme.colors.gray[backgroundShade],
			backgroundColor: theme.colors.gray[backgroundShade],
			background: theme.colors.gray[backgroundShade],
			boxShadow: 'none'
		}
	};
};
