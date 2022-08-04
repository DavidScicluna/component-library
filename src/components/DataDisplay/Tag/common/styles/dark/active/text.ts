import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor } from '../../../data/defaultPropValues';

import { TagDarkActiveStylingProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: TagDarkActiveStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			boxShadow: 'none',
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		}
	};
};
