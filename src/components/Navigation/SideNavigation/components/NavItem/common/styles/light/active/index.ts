
import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';

import { NavItemLightActiveStylingProps } from './types';

export default ({ theme, color = defaultColor }: NavItemLightActiveStylingProps): Style => {
	const shade = getHue({ colorMode: 'light', type: 'color' });
	const textShade = getHue({ colorMode: 'light', type: 'background' });

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
