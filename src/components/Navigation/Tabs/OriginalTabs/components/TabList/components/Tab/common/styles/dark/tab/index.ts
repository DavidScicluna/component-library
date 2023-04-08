import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../../common/utils/color';
import { Color } from '../../../../../../../../../../../../theme/types';
import { color as defaultColor, size as defaultSize } from '../../../../../../../../../common/default/props';
import { getAmount, getSizeConfig } from '../../../../../../../../../common/utils';
import { isSelected as defaultIsSelected } from '../../../default/props';

import { TabDarkStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({
	theme,
	color: colorProp = defaultColor,
	isSelected = defaultIsSelected,
	size = defaultSize
}: TabDarkStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: isSelected ? 'color' : 'text.secondary'
	});
	const borderShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});

	const config = getSizeConfig({ size });
	const border = config.border;

	const color: Color = isSelected ? colorProp : 'gray';

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': lighten(theme.colors[color][colorShade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: lighten(theme.colors[color][colorShade], amount.active),
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: lighten(theme.colors[color][colorShade], amount.active),
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][borderShade]}` : 'none',
			outlineOffset: 0
		}
	};
};
