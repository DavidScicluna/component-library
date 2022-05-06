import { ButtonDarkDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { ColorHues } from '../../../../../../../theme/types';
import { color as defaultColor, isLoading as defaultIsLoading } from '../../../data/defaultPropValues';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLoading = defaultIsLoading
}: ButtonDarkDisabledStylingProps): Style => {
	const color = isLoading ? colorProp : 'gray';

	const shade = getHue({
		colorMode: 'dark',
		type: color === 'black' || color === 'white' ? color : color === 'gray' ? 'text.secondary' : 'color'
	});

	const textShade: ColorHues = isLoading && color === 'black' ? 50 : 900;

	return {
		'color': `${theme.colors.gray[textShade]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors[color][shade]} !important`,
			background: `${theme.colors[color][shade]} !important`
		}
	};
};
