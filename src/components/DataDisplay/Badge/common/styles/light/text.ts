import { BadgeLightStylingProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';
import { color as defaultColor, isLight as defaultIsLight } from '../../data/defaultPropValues';

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

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		color: theme.colors[color][shade],

		borderColor: theme.colors.transparent,
		backgroundColor: theme.colors.transparent,
		background: theme.colors.transparent
	};
};
