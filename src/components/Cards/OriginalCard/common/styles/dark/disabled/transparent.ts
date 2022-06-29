import { CardDarkDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';

export default ({ theme, isLight = defaultIsLight }: CardDarkDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: isLight ? 'divider' : 'text.secondary'
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
