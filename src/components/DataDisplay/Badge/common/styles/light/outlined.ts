import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';
import { color as defaultColor, isLight as defaultIsLight } from '../../data/defaultPropValues';

import { BadgeLightStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLight = defaultIsLight
}: BadgeLightStylingProps): Style => {
	const colorShade = getHue({
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
