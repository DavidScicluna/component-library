import { TagLightDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getSizeConfig } from '../../../utils';

export default ({ theme, size = defaultSize }: TagLightDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});

	const config = getSizeConfig({ size });
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
