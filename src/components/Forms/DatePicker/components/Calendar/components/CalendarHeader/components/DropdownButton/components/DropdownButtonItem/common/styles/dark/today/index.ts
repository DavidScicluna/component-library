import { lighten } from 'color2k';

import { Style } from '../../../../../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../../../../../common/utils/color';
import { color as defaultColor } from '../../../../../../../../../../../../common/data/defaultPropValues';
import { getAmount, getSizeConfig } from '../../../utils';

import { DropdownButtonItemDarkTodayStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor }: DropdownButtonItemDarkTodayStylingProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
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
			'color': lighten(theme.colors[color][colorShade], amount.hover),
			'borderColor': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'backgroundColor': lighten(theme.colors.gray[backgroundShade], amount.hover),
			'background': lighten(theme.colors.gray[backgroundShade], amount.hover),

			'&:active': {
				color: lighten(theme.colors[color][colorShade], amount.active),
				borderColor: lighten(theme.colors.gray[backgroundShade], amount.active),
				backgroundColor: lighten(theme.colors.gray[backgroundShade], amount.active),
				background: lighten(theme.colors.gray[backgroundShade], amount.active)
			}
		},

		'&:active': {
			color: lighten(theme.colors[color][colorShade], amount.active),
			borderColor: lighten(theme.colors.gray[backgroundShade], amount.active),
			backgroundColor: lighten(theme.colors.gray[backgroundShade], amount.active),
			background: lighten(theme.colors.gray[backgroundShade], amount.active)
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][colorShade]}` : 'none',
			outlineOffset: 0
		}
	};
};
