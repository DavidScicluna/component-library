import { color as defaultColor } from '../../../../../../common/default/props';
import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';

import { IconLightStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: IconLightStylingProps): Style => {
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
		color: theme.colors[color][colorShade],
		borderColor: theme.colors[color][colorShade],
		backgroundColor: theme.colors.gray[backgroundShade],
		background: theme.colors.gray[backgroundShade]
	};
};
