import { TagDarkDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';

export default ({ theme }: TagDarkDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: 'text.secondary'
	});

	const color: Color = 'gray';

	return {
		'color': `${theme.colors.gray[900]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors[color][shade]} !important`,
			background: `${theme.colors[color][shade]} !important`
		}
	};
};
