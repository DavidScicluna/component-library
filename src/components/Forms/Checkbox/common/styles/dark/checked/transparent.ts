import { lighten, transparentize } from 'color2k';

import { Style } from '../../../../../../../common/types';
import { getHue } from '../../../../../../../common/utils/color';
import { Color } from '../../../../../../../theme/types';
import {
	isError as defaultIsError,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning
} from '../../../default/props';
import { getAmount } from '../../../utils';

import { CheckboxDarkCheckedStyleProps } from './types';

export default ({
	theme,
	color: colorProp,
	isError = defaultIsError,
	isSuccess = defaultIsSuccess,
	isWarning = defaultIsWarning
}: CheckboxDarkCheckedStyleProps): Style => {
	const amount = getAmount();

	const colorShade = getHue({
		colorMode: 'dark',
		type: 'darkest'
	});
	const checkboxShade = getHue({
		colorMode: 'dark',
		type: 'color'
	});
	const backgroundShade = getHue({
		colorMode: 'dark',
		type: 'light'
	});

	const color: Color = isError ? 'red' : isSuccess ? 'green' : isWarning ? 'yellow' : colorProp;

	return {
		'color': theme.colors[color][checkboxShade],
		'borderColor': theme.colors.transparent,
		'backgroundColor': theme.colors.transparent,
		'background': theme.colors.transparent,

		'& .chakra-checkbox': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][checkboxShade],
			backgroundColor: theme.colors.transparent,
			background: theme.colors.transparent
		},

		'& .chakra-checkbox__control': {
			color: theme.colors.gray[colorShade],
			borderColor: theme.colors[color][checkboxShade],
			backgroundColor: theme.colors[color][checkboxShade],
			background: theme.colors[color][checkboxShade]
		},

		'&:hover': {
			'color': lighten(theme.colors[color][checkboxShade], amount.hover),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.5),
			'background': transparentize(theme.colors[color][backgroundShade], 0.5),

			'& .chakra-checkbox': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][checkboxShade], amount.hover),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-checkbox__control': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][checkboxShade], amount.hover),
				backgroundColor: lighten(theme.colors[color][checkboxShade], amount.hover),
				background: lighten(theme.colors[color][checkboxShade], amount.hover)
			},

			'&:active': {
				'color': lighten(theme.colors[color][checkboxShade], amount.active),
				'borderColor': theme.colors.transparent,
				'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
				'background': transparentize(theme.colors[color][backgroundShade], 0.25),

				'& .chakra-checkbox': {
					color: theme.colors.gray[colorShade],
					borderColor: lighten(theme.colors[color][checkboxShade], amount.active),
					backgroundColor: theme.colors.transparent,
					background: theme.colors.transparent
				},

				'& .chakra-checkbox__control': {
					color: theme.colors.gray[colorShade],
					borderColor: lighten(theme.colors[color][checkboxShade], amount.active),
					backgroundColor: lighten(theme.colors[color][checkboxShade], amount.active),
					background: lighten(theme.colors[color][checkboxShade], amount.active)
				}
			}
		},

		'&:active': {
			'color': lighten(theme.colors[color][checkboxShade], amount.active),
			'borderColor': theme.colors.transparent,
			'backgroundColor': transparentize(theme.colors[color][backgroundShade], 0.25),
			'background': transparentize(theme.colors[color][backgroundShade], 0.25),

			'& .chakra-checkbox': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][checkboxShade], amount.active),
				backgroundColor: theme.colors.transparent,
				background: theme.colors.transparent
			},

			'& .chakra-checkbox__control': {
				color: theme.colors.gray[colorShade],
				borderColor: lighten(theme.colors[color][checkboxShade], amount.active),
				backgroundColor: lighten(theme.colors[color][checkboxShade], amount.active),
				background: lighten(theme.colors[color][checkboxShade], amount.active)
			}
		}
	};
};
