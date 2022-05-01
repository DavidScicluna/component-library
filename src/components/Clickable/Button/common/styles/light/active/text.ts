import { ButtonLightActiveStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

export default ({ theme, color: colorProp = 'gray' }: ButtonLightActiveStylingProps): Style => {
	const color = colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp;

	const shade = getHue({ colorMode: 'light', type: color === 'gray' ? 'text.secondary' : 'color' });

	return {
		'color': theme.colors[color][shade],

		'&::before': {
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		}
	};
};
