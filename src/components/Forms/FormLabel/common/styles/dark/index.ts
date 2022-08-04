
import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';

import { FormLabelDarkStyleProps } from './types';

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

		'& .ds-cl-required-indicator': {
			color: theme.colors.red[indicatorShade]
		}
	};
};
