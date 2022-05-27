import { darken, transparentize } from 'color2k';

import { CheckboxLightGroupStyleProps } from './types';

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
}: CheckboxLightGroupStyleProps): Style => {
	const amount = getAmount();
	const textShade = getHue({
		colorMode: 'light',
		type: 'text.primary'
	});
	const borderShade = getHue({
		colorMode: 'light',
		type: isError || isSuccess || isWarning ? 'color' : 'divider'
	});
	const backgroundShade = getHue({
		colorMode: 'light',
		type: 'light'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : 'gray';

	return {
		'color': theme.colors[color][textShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'& .chakra-checkbox__control': {
			color: theme.colors.transparent,
			borderColor: theme.colors[color][borderShade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'&:hover': {
			'color': darken(theme.colors[color][textShade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.5),
			'background': transparentize(theme.colors[color][backgroundShade], 0.5),

			'& .chakra-checkbox__control': {
				color: theme.colors.transparent,
				borderColor: darken(theme.colors[color][borderShade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'&:active': {
				'color': darken(theme.colors[color][textShade], amount.active),
				'borderColor': theme.colors.transparent,
				'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
				'background': transparentize(theme.colors[color][backgroundShade], 0.25),

				'& .chakra-checkbox__control': {
					color: theme.colors.transparent,
					borderColor: darken(theme.colors[color][borderShade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				}
			}
		},

		'&:active': {
			'color': darken(theme.colors[color][textShade], amount.active),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
			'background': transparentize(theme.colors[color][backgroundShade], 0.25),

			'& .chakra-checkbox__control': {
				color: theme.colors.transparent,
				borderColor: darken(theme.colors[color][borderShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			}
		}
	};
};
