
import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';

import { CardDarkDisabledStylingProps } from './types';

export default ({ theme, isLight = defaultIsLight }: CardDarkDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
		type: isLight ? 'divider' : 'text.secondary'
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
