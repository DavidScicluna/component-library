import { ButtonLightDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { color as defaultColor, isLoading as defaultIsLoading } from '../../../data/defaultPropValues';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLoading = defaultIsLoading
}: ButtonLightDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black' || colorProp === 'white'
				? colorProp
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});

	const color: Color = isLoading ? (colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp) : 'gray';

	return {
		'color': `${theme.colors[color][shade]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors.transparent} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
