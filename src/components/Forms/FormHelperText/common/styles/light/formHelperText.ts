import { FormHelperTextLightStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';

export default ({ theme }: FormHelperTextLightStyleProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});

	return {
		color: theme.colors.gray[shade]
	};
};
