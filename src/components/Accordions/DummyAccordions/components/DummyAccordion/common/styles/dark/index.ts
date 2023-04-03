import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../common/data/defaultPropValues';
import { isLight as defaultIsLight } from '../../data/defaultPropValues';
import { getSizeConfig } from '../../utils';

import { DummyAccordionDarkStylingProps } from './types';

export default ({ theme, color = defaultColor, isLight = defaultIsLight }: DummyAccordionDarkStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'dark',
		type: isLight ? 'divider' : color === 'gray' ? 'text.secondary' : 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'background'
	});

	const config = getSizeConfig();
	const border = config.border;

	return {
		'color': `${theme.colors.gray[colorShade]} !important`,

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][colorShade]} !important`,
			borderColor: `${theme.colors[color][colorShade]} !important`,
			backgroundColor: `${theme.colors.gray[backgroundShade]} !important`,
			background: `${theme.colors.gray[backgroundShade]} !important`
		}
	};
};
