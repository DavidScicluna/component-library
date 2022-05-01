import { IconButtonDarkDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

export default ({ theme, color: colorProp = 'gray', isLoading = false }: IconButtonDarkDisabledStylingProps): Style => {
	const color = isLoading ? (colorProp === 'white' || colorProp === 'black' ? 'gray' : colorProp) : 'gray';

	const shade = getHue({ colorMode: 'dark', type: color === 'gray' ? 'text.secondary' : 'color' });

	return {
		'color': `${theme.colors[color][shade]} !important`,

		'&::before': {
			borderColor: `${theme.colors.transparent} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
