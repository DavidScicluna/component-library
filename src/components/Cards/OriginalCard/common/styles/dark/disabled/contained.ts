import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';

import { CardDarkDisabledStylingProps } from './types';

export default ({ theme, isLight = defaultIsLight }: CardDarkDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: isLight ? 'divider' : 'text.secondary'
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
