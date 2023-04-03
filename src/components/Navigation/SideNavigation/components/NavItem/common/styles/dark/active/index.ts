import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';

import { NavItemDarkActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: NavItemDarkActiveStylingProps): Style => {
	const colorShade = getHue({ colorMode: 'dark', type: 'background' });
	const backgroundShade = getHue({ colorMode: 'dark', type: 'color' });

	return {
		'background': theme.colors[color][backgroundShade],
		'backgroundColor': theme.colors[color][backgroundShade],
		'borderColor': theme.colors[color][backgroundShade],
		'color': theme.colors.gray[colorShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors.gray[colorShade]
		}
	};
};
