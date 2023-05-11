import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';

import { FormDescriptionDarkStyleProps } from './types';

export default ({ theme }: FormDescriptionDarkStyleProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});

	return {
		color: theme.colors.gray[shade]
	};
};
