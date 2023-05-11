import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';

import { FormDescriptionLightStyleProps } from './types';

export default ({ theme }: FormDescriptionLightStyleProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});

	return {
		color: theme.colors.gray[shade]
	};
};
