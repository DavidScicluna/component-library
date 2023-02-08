import { darken } from 'color2k';

import { Style } from '../../../../../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../../../../../../../common/data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

import { DropdownButtonItemLightTodayStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor }: DropdownButtonItemLightTodayStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'light',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'background'
	});

	const config = getSizeConfig();
	const border = config.border;

	return {
		'color': theme.colors[color][colorShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors[color][colorShade], amount.hover),
			'borderColor': darken(theme.colors[color][backgroundShade], amount.hover),
			'backgroundColor': darken(theme.colors[color][backgroundShade], amount.hover),
			'background': darken(theme.colors[color][backgroundShade], amount.hover),

			'&:active': {
				color: darken(theme.colors[color][colorShade], amount.active),
				borderColor: darken(theme.colors[color][backgroundShade], amount.active),
				backgroundColor: darken(theme.colors[color][backgroundShade], amount.active),
				background: darken(theme.colors[color][backgroundShade], amount.active)
			}
		},

		'&:active': {
			color: darken(theme.colors[color][colorShade], amount.active),
			borderColor: darken(theme.colors[color][backgroundShade], amount.active),
			backgroundColor: darken(theme.colors[color][backgroundShade], amount.active),
			background: darken(theme.colors[color][backgroundShade], amount.active)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: 0
		}
	};
};
