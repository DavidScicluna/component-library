import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

import { RadioDarkDisabledStyleProps } from './types';

export default ({ theme }: RadioDarkDisabledStyleProps): Style => {
	const textShade = getHue({
		colorMode: 'dark',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'divider'
	});

	return {
		'color': `${theme.colors.gray[textShade]} !important`,
		'borderColor': `${theme.colors.gray[borderShade]} !important`,
		'backgroundColor': `${theme.colors.transparent} !important`,
		'background': `${theme.colors.transparent} !important`,

		'& .chakra-radio__control': {
			color: `${theme.colors.gray[textShade]} !important`,
			borderColor: `${theme.colors.gray[borderShade]} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
