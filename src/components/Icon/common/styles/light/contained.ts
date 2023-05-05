import { color as defaultColor } from '../../../../../common/default/props';
import { Style } from '../../../../../common/types';
import { getHue } from '../../../../../common/utils/color';
import { Color } from '../../../../../theme/types';

import { IconLightStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: IconLightStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: colorProp === 'black' ? 'lightest' : colorProp === 'white' ? 'darkest' : 'background'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: colorProp === 'black' ? 'darker' : colorProp === 'white' ? 'lighter' : 'color'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		color: theme.colors.gray[colorShade],
		borderColor: theme.colors[color][backgroundShade],
		backgroundColor: theme.colors[color][backgroundShade],
		background: theme.colors[color][backgroundShade]
	};
};
