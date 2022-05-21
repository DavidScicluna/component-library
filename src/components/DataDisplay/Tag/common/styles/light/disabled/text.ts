import { TagLightDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';

export default ({ theme }: TagLightDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});

	const color: Color = 'gray';

	return {
		'color': `${theme.colors[color][shade]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors.transparent} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
