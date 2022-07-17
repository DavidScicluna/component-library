import { NavItemDarkActiveStylingProps } from './types';

import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';

export default ({ theme, color = defaultColor }: NavItemDarkActiveStylingProps): Style => {
	const shade = getHue({ colorMode: 'dark', type: 'color' });
	const textShade = getHue({ colorMode: 'dark', type: 'background' });

	return {
		'background': theme.colors[color][shade],
		'backgroundColor': theme.colors[color][shade],
		'borderColor': theme.colors[color][shade],
		'color': theme.colors.gray[textShade],

		'& svg, .ds-cl-icon': {
			color: theme.colors.gray[textShade]
		}
	};
};
