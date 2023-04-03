import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../theme/types';
import { color as defaultColor, isLoading as defaultIsLoading } from '../../../../../common/data/defaultPropValues';

import { ButtonDarkDisabledStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLoading = defaultIsLoading
}: ButtonDarkDisabledStylingProps): Style => {
	const colorShade = getHue({
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
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: isLoading && colorProp === 'black' ? 'lightest' : 'background'
	});

	const color: Color = isLoading ? (colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp) : 'gray';

	return {
		'color': `${theme.colors.gray[backgroundShade]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors[color][colorShade]} !important`,
			backgroundColor: `${theme.colors[color][colorShade]} !important`,
			background: `${theme.colors[color][colorShade]} !important`
		}
	};
};
