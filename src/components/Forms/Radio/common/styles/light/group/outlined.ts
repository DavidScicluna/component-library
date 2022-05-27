import { darken } from 'color2k';

import { RadioLightGroupStyleProps } from './types';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../data/defaultPropValues';
import { getAmount } from '../../../utils';

export default ({
	theme,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: RadioLightGroupStyleProps): Style => {
	const amount = getAmount();
	const textShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: isError || isSuccess || isWarning ? 'color' : 'divider'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : 'gray';

	return {
		'color': theme.colors[color][textShade],
		'borderColor': theme.colors[color][borderShade],
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'& .chakra-radio__control': {
			color: theme.colors.transparent,
			borderColor: theme.colors[color][borderShade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'color': darken(theme.colors[color][textShade], amount.hover),
			'borderColor': darken(theme.colors[color][borderShade], amount.hover),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'& .chakra-radio__control': {
				color: theme.colors.transparent,
				borderColor: darken(theme.colors[color][borderShade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:focus': {
				'color': darken(theme.colors[color][textShade], amount.active),
				'borderColor': darken(theme.colors[color][borderShade], amount.active),
				'backgroundColor': theme.colors.transparent,
				'background': theme.colors.transparent,

				'& .chakra-radio__control': {
					color: theme.colors.transparent,
					borderColor: darken(theme.colors[color][borderShade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			},

			'&:active': {
				'color': darken(theme.colors[color][textShade], amount.active),
				'borderColor': darken(theme.colors[color][borderShade], amount.active),
				'backgroundColor': theme.colors.transparent,
				'background': theme.colors.transparent,

				'& .chakra-radio__control': {
					color: theme.colors.transparent,
					borderColor: darken(theme.colors[color][borderShade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		},

		'&:focus': {
			'color': darken(theme.colors[color][textShade], amount.active),
			'borderColor': darken(theme.colors[color][borderShade], amount.active),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'& .chakra-radio__control': {
				color: theme.colors.transparent,
				borderColor: darken(theme.colors[color][borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][textShade], amount.active),
			'borderColor': darken(theme.colors[color][borderShade], amount.active),
			'backgroundColor': theme.colors.transparent,
			'background': theme.colors.transparent,

			'& .chakra-radio__control': {
				color: theme.colors.transparent,
				borderColor: darken(theme.colors[color][borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		}
	};
};
