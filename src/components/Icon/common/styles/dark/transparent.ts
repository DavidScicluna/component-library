import { color as defaultColor } from '../../../../../common/default/props';
import { Style } from '../../../../../common/types';
import { getHue } from '../../../../../common/utils/color';
import { Color } from '../../../../../theme/types';

import { IconDarkStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: IconDarkStylingProps): Style => {
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
		color: theme.colors[color][colorShade],
		borderColor: theme.colors.gray[backgroundShade],
		backgroundColor: theme.colors.gray[backgroundShade],
		background: theme.colors.gray[backgroundShade]
	};
};
