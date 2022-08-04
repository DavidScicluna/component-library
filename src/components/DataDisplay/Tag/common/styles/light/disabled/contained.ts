import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';

import { TagLightDisabledStylingProps } from './types';

export default ({ theme }: TagLightDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});

	const color: Color = 'gray';

	return {
		'color': `${theme.colors.gray[50]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors[color][shade]} !important`,
			background: `${theme.colors[color][shade]} !important`
		}
	};
};
