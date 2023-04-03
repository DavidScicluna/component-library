import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';

import { TagDarkDisabledStylingProps } from './types';

export default ({ theme }: TagDarkDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});

	return {
		'color': `${theme.colors.gray[backgroundShade]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors.gray[colorShade]} !important`,
			backgroundColor: `${theme.colors.gray[colorShade]} !important`,
			background: `${theme.colors.gray[colorShade]} !important`
		}
	};
};
