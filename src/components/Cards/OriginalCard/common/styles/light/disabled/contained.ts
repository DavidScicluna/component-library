import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';

import { CardLightDisabledStylingProps } from './types';

export default ({ theme, isLight = defaultIsLight }: CardLightDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: isLight ? 'divider' : 'text.secondary'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
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
