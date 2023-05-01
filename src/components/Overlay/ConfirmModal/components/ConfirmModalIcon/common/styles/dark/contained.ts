import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../default/props';

import { ConfirmModalIconDarkStylingProps } from './types';

export default ({ theme, color = defaultColor }: ConfirmModalIconDarkStylingProps): Style => {
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
