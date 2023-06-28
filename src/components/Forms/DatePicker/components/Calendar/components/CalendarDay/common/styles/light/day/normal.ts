import { darken } from 'color2k';

import { Style } from '../../../../../../../../../../../common/types';
import { checkIsTouchDevice } from '../../../../../../../../../../../common/utils';
import { getHue } from '../../../../../../../../../../../common/utils/color';
import { getAmount, getSizeConfig } from '../../../utils';

import { CalendarDayLightStylingProps } from './types';

const isTouchDevice: boolean = checkIsTouchDevice();

export default ({ theme }: CalendarDayLightStylingProps): Style => {
	const amount = getAmount();

	const shade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});

	const config = getSizeConfig();
	const { border } = config;

	return {
		'color': theme.colors.gray[shade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'&:hover': {
			'color': darken(theme.colors.gray[shade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'&:active': {
				color: darken(theme.colors.gray[shade], amount.active),
				borderColor: theme.colors.transparent,
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			color: darken(theme.colors.gray[shade], amount.active),
			borderColor: theme.colors.transparent,
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:focus-visible': {
			outline: !isTouchDevice ? `${border}px auto ${theme.colors.gray[shade]}` : 'none',
			outlineOffset: 0
		}
	};
};
