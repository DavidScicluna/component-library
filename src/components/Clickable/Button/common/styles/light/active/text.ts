import { ButtonLightActiveStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../data/defaultPropValues';

export default ({ theme, color = defaultColor }: ButtonLightActiveStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: color === 'black' || color === 'white' ? color : color === 'gray' ? 'text.secondary' : 'color'
	});

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
