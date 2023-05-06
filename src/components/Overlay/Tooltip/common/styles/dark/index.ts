import { color as defaultColor } from '../../../../../../common/default/props';
import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color } from '../../../../../../theme/types';

import { TooltipDarkStyleProps } from './types';

export default ({ theme, color: colorProp = defaultColor }: TooltipDarkStyleProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? 'divider'
				: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: colorProp === 'white' || colorProp === 'gray' ? 'darkest' : 'background'
	});

	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors.gray[backgroundShade],

		'borderColor': theme.colors[color][colorShade],
		'backgroundColor': theme.colors[color][colorShade],
		'background': theme.colors[color][colorShade],

		'& .chakra-tooltip__arrow': {
			borderColor: `${theme.colors[color][colorShade]} !important`,
			backgroundColor: `${theme.colors[color][colorShade]} !important`,
			background: `${theme.colors[color][colorShade]} !important`
		}
	};
};
