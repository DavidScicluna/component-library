import { Style } from '../../../../../../common/types';
import { getHue } from '../../../../../../common/utils/color';
import { isLight as defaultIsLight } from '../../../data/defaultPropValues';
import { getSizeConfig } from '../../../utils';

import { CollapsibleCardLightDisabledStylingProps } from './types';

export default ({ theme, isLight = defaultIsLight }: CollapsibleCardLightDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: isLight ? 'divider' : 'text.secondary'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	const config = getSizeConfig();
	const border = config.border;

	return {
		'color': `${theme.colors.gray[colorShade]} !important`,

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors.gray[colorShade]} !important`,
			borderColor: `${theme.colors.gray[colorShade]} !important`,
			backgroundColor: `${theme.colors.gray[backgroundShade]} !important`,
			background: `${theme.colors.gray[backgroundShade]} !important`
		}
	};
};
