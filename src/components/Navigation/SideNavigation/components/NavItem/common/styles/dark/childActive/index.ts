import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';

import { NavItemDarkChildActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: NavItemDarkChildActiveStylingProps): Style => {
	const backgroundShade = getHue({ colorMode: 'dark', type: 'color' });

	return {
		'background': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'borderColor': theme.colors.transparent,
		'color': theme.colors[color][backgroundShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors[color][backgroundShade]
		}
	};
};
