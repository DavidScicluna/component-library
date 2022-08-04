
import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { isLight as defaultIsLight } from '../../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../../common/utils';

import { CardLightDisabledStylingProps } from './types';

export default ({ theme, isLight = defaultIsLight }: CardLightDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: isLight ? 'divider' : 'text.secondary'
	});

	const config = getSizeConfig();
	const border = config.border;

	const color: Color = 'gray';

	return {
		'color': `${theme.colors[color][shade]} !important`,

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][shade]} !important`,
			borderColor: `${theme.colors[color][shade]} !important`,
			backgroundColor: `${theme.colors.gray[50]} !important`,
			background: `${theme.colors.gray[50]} !important`
		}
	};
};
