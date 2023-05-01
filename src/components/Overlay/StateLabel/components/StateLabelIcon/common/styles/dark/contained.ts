import { color as defaultColor } from '../../../../../../../../common/default/props';
import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';

import { StateLabelIconDarkStylingProps } from './types';

export default ({ theme, color = defaultColor }: StateLabelIconDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	return {
		color: theme.colors.gray[colorShade],
		borderColor: theme.colors[color][backgroundShade],
		backgroundColor: theme.colors[color][backgroundShade],
		background: theme.colors[color][backgroundShade]
	};
};
