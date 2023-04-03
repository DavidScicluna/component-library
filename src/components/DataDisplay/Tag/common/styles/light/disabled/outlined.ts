import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { size as defaultSize } from '../../../data/defaultPropValues';
import { getSizeConfig } from '../../../utils';

import { TagLightDisabledStylingProps } from './types';

export default ({ theme, size = defaultSize }: TagLightDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type: 'text.secondary'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	const config = getSizeConfig({ size });
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
