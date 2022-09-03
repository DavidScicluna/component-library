import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

import { CheckboxDarkDisabledStyleProps } from './types';

export default ({ theme }: CheckboxDarkDisabledStyleProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});

	return {
		'color': `${theme.colors.gray[colorShade]} !important`,
		'borderColor': `${theme.colors.transparent} !important`,
		'backgroundColor': `${theme.colors.transparent} !important`,
		'background': `${theme.colors.transparent} !important`,

		'& .chakra-checkbox__control': {
			color: `${theme.colors.gray[colorShade]} !important`,
			borderColor: `${theme.colors.gray[borderShade]} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
