import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getSizeConfig } from '../../../utils';

import { TagDarkDisabledStylingProps } from './types';

export default ({ theme, size = defaultSize }: TagDarkDisabledStylingProps): Style => {
	const shade = getHue({
		colorMode: 'dark',
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
			backgroundColor: `${theme.colors.gray[900]} !important`,
			background: `${theme.colors.gray[900]} !important`
		}
	};
};
