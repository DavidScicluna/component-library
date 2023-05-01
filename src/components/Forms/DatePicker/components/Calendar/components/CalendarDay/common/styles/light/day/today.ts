import { darken } from 'color2k';

import { color as defaultColor } from '../../../../../../../../../../../common/default/props';
import { Style } from '../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../common/utils/color';
import { getAmount, getSizeConfig } from '../../../utils';

import { CalendarDayLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme, color = defaultColor }: CalendarDayLightStylingProps): Style => {
	const amount = getAmount();

	const shade = getHue({
		colorMode: 'light',
		type: 'color'
	});

	const config = getSizeConfig();
	const border = config.border;

	return {
		'color': theme.colors[color][shade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors[color][shade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: darken(theme.colors[color][shade], amount.active),
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: darken(theme.colors[color][shade], amount.active),
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors[color][shade]}` : 'none',
			outlineOffset: 0
		}
	};
};
