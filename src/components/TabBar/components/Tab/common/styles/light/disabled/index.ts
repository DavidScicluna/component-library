import { TabLightDisabledStylingProps } from './types';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';

export default ({ theme }: TabLightDisabledStylingProps): Style => {
	const shade = getHue({ type: 'text.secondary', colorMode: 'light' });

	return {
		'& svg, .ds-cl-icon': {
			color: `${theme.colors.gray[shade]} !important`
		}
	};
};
