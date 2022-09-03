import { Style } from '../../../../../../../../common/types';
import { getHue } from '../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../theme/types';
import {
	color as defaultColor,
	isLoading as defaultIsLoading,
	size as defaultSize
} from '../../../../../common/data/defaultPropValues';
import { getSizeConfig } from '../../../../../common/utils';

import { ButtonLightDisabledStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLoading = defaultIsLoading,
	size = defaultSize
}: ButtonLightDisabledStylingProps): Style => {
	const colorShade = getHue({
		colorMode: 'light',
		type:
			colorProp === 'black'
				? 'darkest'
				: colorProp === 'white'
				? 'lightest'
				: colorProp === 'gray'
				? 'text.secondary'
				: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	const config = getSizeConfig({ size });
	const border = config.border;

	const color: Color = isLoading ? (colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp) : 'gray';

	return {
		'color': `${theme.colors[color][colorShade]} !important`,

		'&::before': {
			boxShadow: `0 ${border}px 0 0 ${theme.colors[color][colorShade]} !important`,
			borderColor: `${theme.colors[color][colorShade]} !important`,
			backgroundColor: `${theme.colors.gray[backgroundShade]} !important`,
			background: `${theme.colors.gray[backgroundShade]} !important`
		}
	};
};
