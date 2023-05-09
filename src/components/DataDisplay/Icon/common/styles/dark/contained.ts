import { color as defaultColor } from '../../../../../../common/default/props';
import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';

import { IconDarkStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: IconDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: colorProp === 'black' ? 'lightest' : colorProp === 'white' ? 'darkest' : 'background'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
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
