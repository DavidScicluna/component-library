import { FormHelperTextDarkStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';

export default ({ theme }: FormHelperTextDarkStyleProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	return {
		color: theme.colors.green[shade]
	};
};
