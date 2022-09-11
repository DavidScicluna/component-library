import { lighten } from 'color2k';

import { isSelected as defaultIsSelected } from '../../../data/defaultPropValues';
import { color as defaultColor } from '../../../../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../utils';
import { getHue } from '../../../../../../../../../../../common/utils/color';
import { Style } from '../../../../../../../../../../../common/types';
import { Color } from '../../../../../../../../../../../theme/types';

import { TabDarkActiveStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isSelected = defaultIsSelected
}: TabDarkActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: isSelected ? 'color' : 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: isSelected ? 'color' : 'divider'
	});

	const color: Color = isSelected ? colorProp : 'gray';

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors[color][borderShade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors[color][colorShade], amount.hover),
			'borderColor': theme.colors[color][borderShade],
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: lighten(theme.colors[color][colorShade], amount.active),
				borderColor: theme.colors[color][borderShade],
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		}
	};
};
