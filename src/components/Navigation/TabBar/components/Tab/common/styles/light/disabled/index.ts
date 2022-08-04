
import { Style } from '../../../../../../../../../common/types';
import { getHue } from '../../../../../../../../../common/utils/color';

import { TabLightDisabledStylingProps } from './types';

export default ({ theme }: TabLightDisabledStylingProps): Style => {
	const shade = getHue({ colorMode: 'light', type: 'text.secondary' });

	return {
		'& svg, .ds-cl-icon': {
			color: `${theme.colors.gray[shade]} !important`
		}
	};
};
