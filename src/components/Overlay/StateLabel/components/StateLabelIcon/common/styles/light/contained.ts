import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../common/default/props';

import { StateLabelIconLightStylingProps } from './types';

export default ({ theme, color = defaultColor }: StateLabelIconLightStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'background'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	return {
		color: theme.colors.gray[colorShade],
		borderColor: theme.colors[color][backgroundShade],
		backgroundColor: theme.colors[color][backgroundShade],
		background: theme.colors[color][backgroundShade]
	};
};
