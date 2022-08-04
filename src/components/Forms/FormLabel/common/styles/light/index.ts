import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';

import { FormLabelLightStyleProps } from './types';

export default ({ theme }: FormLabelLightStyleProps): Style => {
	const textShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const indicatorShade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	return {
		'color': theme.colors.gray[textShade],

		'& .ds-cl-required-indicator': {
			color: theme.colors.red[indicatorShade]
		}
	};
};
