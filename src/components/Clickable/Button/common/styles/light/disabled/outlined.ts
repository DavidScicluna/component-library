import { ButtonLightDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { color as defaultColor, isLoading as defaultIsLoading } from '../../../data/defaultPropValues';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLoading = defaultIsLoading
}: ButtonLightDisabledStylingProps): Style => {
	const color = isLoading ? colorProp : 'gray';

	const shade = getHue({
		colorMode: 'light',
		type: color === 'black' || color === 'white' ? color : color === 'gray' ? 'text.secondary' : 'color'
	});

	return {
		'color': `${theme.colors[color][shade]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors.gray[50]} !important`,
			background: `${theme.colors.gray[50]} !important`
		}
	};
};
