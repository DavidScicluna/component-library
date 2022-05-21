import { FormLabelDarkStyleProps } from './types';

import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';

export default ({ theme }: FormLabelDarkStyleProps): Style => {
	const textShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const indicatorShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	return {
		'color': theme.colors.gray[textShade],

		'& .chakra-form__required-indicator': {
			color: theme.colors.red[indicatorShade]
		}
	};
};
