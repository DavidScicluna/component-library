import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color, ColorHues } from '../../../../../../theme/types';
import { color as defaultColor, isLight as defaultIsLight } from '../../data/defaultPropValues';

import { BadgeLightStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLight = defaultIsLight
}: BadgeLightStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? isLight
					? 'divider'
					: 'text.secondary'
				: isLight
				? 'divider'
				: 'color'
	});

	const textShade: ColorHues = colorProp === 'white' ? 900 : 50;
	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		color: theme.colors.gray[textShade],

		borderColor: theme.colors[color][shade],
		backgroundColor: theme.colors[color][shade],
		background: theme.colors[color][shade]
	};
};
