
import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';

import { FormHelperTextDarkStyleProps } from './types';

export default ({ theme }: FormHelperTextDarkStyleProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});

	return {
		color: `${theme.colors.gray[shade]} !important`
	};
};
