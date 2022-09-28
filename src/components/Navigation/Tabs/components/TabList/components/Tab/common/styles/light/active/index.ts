import { darken } from 'color2k';

import { isSelected as defaultIsSelected } from '../../../data/defaultPropValues';
import { color as defaultColor } from '../../../../../../../../common/data/defaultPropValues';
import { getAmount } from '../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../common/utils/color';
import { Style } from '../../../../../../../../../../../common/types';
import { Color } from '../../../../../../../../../../../theme/types';

import { TabLightActiveStylingProps } from './types';

export default ({
	theme,
	color: colorProp = defaultColor,
	isSelected = defaultIsSelected
}: TabLightActiveStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type: isSelected ? 'color' : 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: isSelected ? 'color' : 'divider'
	});

	const color: Color = isSelected ? colorProp : 'gray';

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors[color][borderShade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors[color][colorShade], amount.hover),
			'borderColor': theme.colors[color][borderShade],
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: darken(theme.colors[color][colorShade], amount.active),
				borderColor: theme.colors[color][borderShade],
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		}
	};
};
