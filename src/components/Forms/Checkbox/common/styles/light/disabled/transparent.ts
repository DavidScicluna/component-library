
import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

import { CheckboxLightDisabledStyleProps } from './types';

export default ({ theme }: CheckboxLightDisabledStyleProps): Style => {
	const textShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: 'divider'
	});

	return {
		'color': `${theme.colors.gray[textShade]} !important`,
		'borderColor': `${theme.colors.transparent} !important`,
		'backgroundColor': `${theme.colors.transparent} !important`,
		'background': `${theme.colors.transparent} !important`,

		'& .chakra-checkbox__control': {
			color: `${theme.colors.gray[textShade]} !important`,
			borderColor: `${theme.colors.gray[borderShade]} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
