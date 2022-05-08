import { TabDarkDisabledStylingProps } from './types';

import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';

export default ({ theme }: TabDarkDisabledStylingProps): Style => {
	const shade = getHue({ colorMode: 'dark', type: 'text.secondary' });

	return {
		'& svg, .ds-cl-icon': {
			color: `${theme.colors.gray[shade]} !important`
		}
	};
};
