import { TooltipDarkStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { Color, ColorHues } from '../../../../../../theme/types';
import { color as defaultColor } from '../../data/defaultPropValues';

export default ({ theme, color: colorProp = defaultColor }: TooltipDarkStyleProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: colorProp === 'black' ? 'darkest' : colorProp === 'white' ? 'lightest' : 'divider'
	});

	const textShade: ColorHues = colorProp === 'black' ? 50 : 900;
	const color: Color = colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp;

	return {
		'color': theme.colors.gray[textShade],

		'borderColor': theme.colors[color][shade],
		'backgroundColor': theme.colors[color][shade],
		'background': theme.colors[color][shade],

		'& .chakra-tooltip__arrow': {
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors[color][shade]} !important`,
			background: `${theme.colors[color][shade]} !important`
		}
	};
};
