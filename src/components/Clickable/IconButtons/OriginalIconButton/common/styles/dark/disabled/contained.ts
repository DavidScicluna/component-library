import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { Color, ColorHues } from '../../../../../../../../theme/types';
import { color as defaultColor, isLoading as defaultIsLoading } from '../../../../../common/data/defaultPropValues';

import { IconButtonDarkDisabledStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLoading = defaultIsLoading
}: IconButtonDarkDisabledStylingProps): Style => {
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

	const textShade: ColorHues = isLoading && colorProp === 'black' ? 50 : 900;
	const color: Color = isLoading ? (colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp) : 'gray';

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
