import { IconButtonLightDisabledStylingProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import {
	color as defaultColor,
	isLoading as defaultIsLoading,
	size as defaultSize
} from '../../../data/defaultPropValues';
import { getSizeConfig } from '../../../utils';

export default ({
	theme,
	color: colorProp = defaultColor,
	isLoading = defaultIsLoading,
	size = defaultSize
}: IconButtonLightDisabledStylingProps): Style => {
	const shade = getHue({
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

	const config = getSizeConfig({ size });
	const border = config.border;

	const color: Color = isLoading ? (colorProp === 'black' || colorProp === 'white' ? 'gray' : colorProp) : 'gray';

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
