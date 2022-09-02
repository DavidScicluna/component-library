import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';

import { CardLightDisabledStylingProps } from './types';

export default ({ theme, isLight = defaultIsLight }: CardLightDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: isLight ? 'divider' : 'text.secondary'
	});

	return {
		'color': `${theme.colors.gray[shade]} !important`,

		'&::before': {
			boxShadow: 'none !important',
			borderColor: `${theme.colors.transparent} !important`,
			backgroundColor: `${theme.colors.transparent} !important`,
			background: `${theme.colors.transparent} !important`
		}
	};
};
