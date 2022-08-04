import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';

import { FormHelperTextLightStyleProps } from './types';

export default ({ theme }: FormHelperTextLightStyleProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});

	return {
		color: `${theme.colors.gray[shade]} !important`
	};
};
